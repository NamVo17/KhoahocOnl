
import React, { useEffect } from "react";
import { Search, Filter, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Skeleton } from "../../components/ui/Skeleton";
import { useToast } from "../../hooks/useToast";
import { Toaster } from "../../components/ui/Toaster";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/ui/PageTransition";
import { AnimatedCard } from "../../components/ui/AnimatedCard";
import { AnimatedButton } from "../../components/ui/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../services/courseService";
import HistoryModal from "../../components/ui/HistoryModal";
import CourseDetailModal from "../../components/ui/CourseDetailModal";
import { setCourses, setFilteredCourses, setSuggestions, setIsLoadingSuggestions } from "../../store/slices/coursesSlice";
import { setFavorites, addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";
import { setViewHistory, addToHistory } from "../../store/slices/historySlice";
import { setSearchTerm, setPriceFilter, setSelectedCourse, setIsChatOpen, setIsHistoryOpen } from "../../store/slices/uiSlice";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ChatBot from "../../components/ChatBot";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Redux selectors
  const courses = useSelector((state) => state.courses.courses);
  const filteredCourses = useSelector((state) => state.courses.filteredCourses);
  const suggestions = useSelector((state) => state.courses.suggestions);
  const isLoadingSuggestions = useSelector((state) => state.courses.isLoadingSuggestions);
  const favorites = useSelector((state) => state.favorites.favorites);
  const viewHistory = useSelector((state) => state.history.viewHistory);
  const searchTerm = useSelector((state) => state.ui.searchTerm);
  const priceFilter = useSelector((state) => state.ui.priceFilter);
  const selectedCourse = useSelector((state) => state.ui.selectedCourse);
  const isChatOpen = useSelector((state) => state.ui.isChatOpen);
  const isHistoryOpen = useSelector((state) => state.ui.isHistoryOpen);

  // Fetch courses on mount
  useEffect(() => {
    fetchCourses()
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((err) => {});
  }, [dispatch]);

  // Filter courses when searchTerm, priceFilter, or courses change
  useEffect(() => {
    let filtered = courses;
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (priceFilter !== "all") {
      filtered = filtered.filter((course) => {
        switch (priceFilter) {
          case "under-500k":
            return course.price < 500000;
          case "500k-1m":
            return course.price >= 500000 && course.price <= 1000000;
          case "over-1m":
            return course.price > 1000000;
          default:
            return true;
        }
      });
    }
    dispatch(setFilteredCourses(filtered));
  }, [searchTerm, priceFilter, courses, dispatch]);

  // Sync favorites and viewHistory from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedHistory = localStorage.getItem("viewHistory");
    if (savedFavorites) dispatch(setFavorites(JSON.parse(savedFavorites)));
    if (savedHistory) dispatch(setViewHistory(JSON.parse(savedHistory)));
  }, [dispatch]);

  // Sync favorites and viewHistory from localStorage on window focus
  useEffect(() => {
    const handleFocus = () => {
      const savedFavorites = localStorage.getItem("favorites");
      const savedHistory = localStorage.getItem("viewHistory");
      if (savedFavorites) dispatch(setFavorites(JSON.parse(savedFavorites)));
      if (savedHistory) dispatch(setViewHistory(JSON.parse(savedHistory)));
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [dispatch]);

  // Handlers
  const handleCourseClick = (course) => {
    dispatch(setSelectedCourse(course));
    dispatch(addToHistory(course.id));
    const newHistory = [course.id, ...viewHistory.filter((id) => id !== course.id)].slice(0, 10);
    localStorage.setItem("viewHistory", JSON.stringify(newHistory));
  };

  const toggleFavorite = (courseId) => {
    let newFavorites;
    if (favorites.includes(courseId)) {
      dispatch(removeFavorite(courseId));
      newFavorites = favorites.filter((id) => id !== courseId);
    } else {
      dispatch(addFavorite(courseId));
      newFavorites = [...favorites, courseId];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    toast({
      title: favorites.includes(courseId) ? "Đã xóa khỏi yêu thích" : "Đã thêm vào yêu thích",
      description: favorites.includes(courseId)
        ? "Khóa học đã được xóa khỏi danh sách yêu thích"
        : "Khóa học đã được thêm vào danh sách yêu thích",
    });
  };

  const handleEnrollNow = (course) => {
    toast({
      title: "🎉 Đăng ký thành công!",
      description: `Bạn đã đăng ký khóa học "${course.title}". Chúng tôi sẽ liên hệ với bạn sớm nhất.`,
    });
  };

  const getAISuggestions = async () => {
    dispatch(setIsLoadingSuggestions(true));
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let suggestedCourses = [];
      const userBehavior = {
        viewedCourses: viewHistory.map((id) => courses.find((c) => c.id === id)).filter(Boolean),
        favoriteCourses: favorites.map((id) => courses.find((c) => c.id === id)).filter(Boolean),
        searchHistory: searchTerm ? [searchTerm] : [],
      };
      const categoryScores = {};
      const tagScores = {};
      userBehavior.viewedCourses.forEach((course) => {
        categoryScores[course.category] = (categoryScores[course.category] || 0) + 1;
        course.tags.forEach((tag) => {
          tagScores[tag] = (tagScores[tag] || 0) + 1;
        });
      });
      userBehavior.favoriteCourses.forEach((course) => {
        categoryScores[course.category] = (categoryScores[course.category] || 0) + 2;
        course.tags.forEach((tag) => {
          tagScores[tag] = (tagScores[tag] || 0) + 2;
        });
      });
      const courseScores = courses
        .filter((course) => !viewHistory.includes(course.id))
        .map((course) => {
          let score = 0;
          score += (categoryScores[course.category] || 0) * 10;
          course.tags.forEach((tag) => {
            score += (tagScores[tag] || 0) * 5;
          });
          score += course.rating * 2;
          score += Math.log(course.students) * 0.5;
          if (course.originalPrice && course.originalPrice > course.price) {
            score += 5;
          }
          return { course, score };
        })
        .sort((a, b) => b.score - a.score);
      if (courseScores.length > 0 && courseScores[0].score > 0) {
        suggestedCourses = courseScores.slice(0, 3).map((item) => item.course);
      } else {
        suggestedCourses = courses.sort((a, b) => b.rating * b.students - a.rating * a.students).slice(0, 3);
      }
      dispatch(setSuggestions(suggestedCourses));
      const hasUserBehavior = viewHistory.length > 0 || favorites.length > 0;
      toast({
        title: hasUserBehavior ? "🎯 Gợi ý AI dựa trên sở thích của bạn!" : "⭐ Gợi ý khóa học phổ biến!",
        description: hasUserBehavior
          ? `Dựa trên ${viewHistory.length} khóa học đã xem và ${favorites.length} yêu thích`
          : `Top ${suggestedCourses.length} khóa học được đánh giá cao nhất`,
      });
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể lấy gợi ý lúc này. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      dispatch(setIsLoadingSuggestions(false));
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const toggleChat = () => {
    dispatch(setIsChatOpen(!isChatOpen));
  };

  const toggleHistory = () => {
    dispatch(setIsHistoryOpen(!isHistoryOpen));
  };

  const historyCourses = viewHistory
    .map((id) => courses.find((course) => course.id === id))
    .filter(Boolean);

  return (
    <>
      <Header
        toggleChat={toggleChat}
        toggleHistory={toggleHistory}
        favorites={favorites}
        viewHistory={viewHistory}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <FadeIn delay={0.2} className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4">
            <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                placeholder="Course search..."
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                className="pl-9 sm:pl-10 text-sm sm:text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="relative w-full sm:w-48">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Filter className="h-4 w-4" />
                </span>
                <select
                  value={priceFilter}
                  onChange={e => dispatch(setPriceFilter(e.target.value))}
                  className="
                      pl-10 pr-6 py-2
                      w-full
                      border border-gray-300
                      rounded-md
                      bg-white
                      text-gray-700
                      text-sm
                      shadow-sm
                      focus:outline-none
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                      transition
                      appearance-none
                      cursor-pointer
                    "
                >
                  <option value="all">All Price</option>
                  <option value="under-500k"> Dưới 500K</option>
                  <option value="500k-1m">500K - 1M</option>
                  <option value="over-1m">Trên 1M</option>
                </select>
                {/* Mũi tên dropdown */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  ▼
                </span>
              </div>
            </motion.div>
          </div>

          {/* AI Suggestions Button */}
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={getAISuggestions}
                disabled={isLoadingSuggestions}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm sm:text-base px-4 sm:px-6 transition-all duration-300"
              >
                <motion.div
                  animate={isLoadingSuggestions ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 1, repeat: isLoadingSuggestions ? Number.POSITIVE_INFINITY : 0 }}
                >
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                </motion.div>
                {isLoadingSuggestions ? "Taking suggestions..." : "Suggest AI"}
              </Button>
            </motion.div>
          </div>
        </FadeIn>

        {/* AI Suggestions Section */}
        <AnimatePresence>
          {(suggestions.length > 0 || isLoadingSuggestions) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <FadeIn delay={0.3}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center px-1">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-purple-600" />
                  </motion.div>
                  <span className="text-base sm:text-2xl">AI Suggestions for You</span>
                </h2>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {isLoadingSuggestions
                  ? Array.from({ length: 3 }).map((_, index) => (
                    <StaggerItem key={index}>
                      <Card className="overflow-hidden">
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Skeleton className="h-48 w-full" />
                          <CardHeader>
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                          </CardHeader>
                          <CardContent>
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-2/3" />
                          </CardContent>
                        </motion.div>
                      </Card>
                    </StaggerItem>
                  ))
                  : suggestions.map((course, index) => (
                    <StaggerItem key={course.id}>
                      <AnimatedCard delay={index * 0.1} className="overflow-hidden border-purple-200">
                        <div className="relative overflow-hidden">
                          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Badge className="absolute top-2 left-2 bg-purple-600">Gợi ý AI</Badge>
                          </motion.div>
                          <motion.div >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-2 right-2  "
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(course.id);
                              }}
                            >
                              <Heart
                                className={`h-3 w-3 transition-colors duration-200  ${favorites.includes(course.id) ? "fill-red-500 text-red-500" : "fill-white text-gray-600"
                                  }`}
                              />
                            </Button>
                          </motion.div>
                        </div>
                        <CardHeader>
                          <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                            <span>({course.students.toLocaleString()} học viên)</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{course.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-green-600">{formatPrice(course.price)}</span>
                              {course.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {formatPrice(course.originalPrice)}
                                </span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex space-x-2 justify-center">
                          <AnimatedButton className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" onClick={() => handleCourseClick(course)}>
                            Details
                          </AnimatedButton>
                          <AnimatedButton variant="outline " className="!bg-white" onClick={() => handleEnrollNow(course)}>
                           Join Now
                          </AnimatedButton>
                        </CardFooter>
                      </AnimatedCard>
                    </StaggerItem>
                  ))}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Course Grid */}
        <FadeIn delay={0.4}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Course ({filteredCourses.length})</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredCourses.map((course, index) => (
              <StaggerItem key={course.id}>
                <AnimatedCard delay={index * 0.05} className="overflow-hidden">
                  <div className="relative overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-40 sm:h-48 object-cover"
                      />
                    </motion.div>
                    <Badge className="absolute top-2 left-2 text-xs" variant="secondary">
                      {course.category}
                    </Badge>
                    <motion.div >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2  p-1 sm:p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(course.id);
                        }}
                      >
                        <Heart
                          className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-200 ${favorites.includes(course.id) ? "fill-red-500 text-red-500" : "fill-white text-gray-600"}`}
                        />
                      </Button>
                    </motion.div>
                  </div>
                  <CardHeader className="p-3 sm:p-6">
                    <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{course.title}</h3>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                      <span className="hidden sm:inline">({course.students.toLocaleString()} học viên)</span>
                      <span className="sm:hidden">({(course.students / 1000).toFixed(0)}k)</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                      {course.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {course.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <span className="text-lg sm:text-2xl font-bold text-green-600">
                          {formatPrice(course.price)}
                        </span>
                        {course.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-500 line-through">
                            {formatPrice(course.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 sm:p-6 pt-0 flex space-x-2 flex justify-center">
                    <AnimatedButton
                      className="flex-1 text-sm sm:text-base py-2 sm:py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      onClick={() => handleCourseClick(course)}
                    >       
                      See Details
                    </AnimatedButton>
                    <AnimatedButton
                      variant="outline"
                      onClick={() => handleEnrollNow(course)}
                      className="text-sm sm:text-base"
                    >
                     Join Now
                    </AnimatedButton>
                  </CardFooter>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        <AnimatePresence>
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 text-lg mb-2">Không tìm thấy khóa học</div>
              <div className="text-gray-400">Thử điều chỉnh từ khóa tìm kiếm hoặc bộ lọc</div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => dispatch(setIsHistoryOpen(false))}
        historyCourses={historyCourses}
        viewHistory={viewHistory}
        formatPrice={formatPrice}
        handleCourseClick={handleCourseClick}
      />

      {/* Course Detail Modal */}
      <CourseDetailModal
        selectedCourse={selectedCourse}
        onClose={() => dispatch(setSelectedCourse(null))}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handleEnrollNow={handleEnrollNow}
        formatPrice={formatPrice}
      />
        {/* Chatbot */}
      <AnimatePresence>
        {isChatOpen && (
          <ChatBot
            isOpen={isChatOpen}
            onClose={() => dispatch(setIsChatOpen(false))}
            courses={courses}
            onCourseRecommend={handleCourseClick}
          />
        )}
      </AnimatePresence>
      <Toaster />
    </>
  );
};

export default CoursesPage;