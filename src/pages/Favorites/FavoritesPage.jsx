import React, { useEffect } from "react";
import { Heart, ArrowLeft, Star } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { CardContent, CardFooter, CardHeader } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { useToast } from "../../hooks/useToast";
import { Toaster } from "../../components/ui/Toaster";
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from "../../components/ui/PageTransition";
import { AnimatedCard } from "../../components/ui/AnimatedCard";
import { AnimatedButton } from "../../components/ui/AnimatedButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchCourses } from "../../services/courseService";
import { useSelector, useDispatch } from "react-redux";
import { setFavorites } from "../../store/slices/favoritesSlice";
import { setCourses } from "../../store/slices/coursesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const favorites = useSelector((state) => state.favorites.favorites);
  const courses = useSelector((state) => state.courses.courses);

  // Fetch courses and favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      dispatch(setFavorites(JSON.parse(savedFavorites)));
    }
    // Fetch courses nếu chưa có
    if (!courses || courses.length === 0) {
      fetchCourses()
        .then((data) => {
          dispatch(setCourses(data));
        })
        .catch((err) => {
          // Lỗi đã được log trong service, có thể xử lý thêm nếu muốn
        });
    }
  }, [dispatch, courses]);

  // Lọc ra các khóa học yêu thích
  const favoriteCourses = courses.filter((course) => favorites.includes(course.id));

  const handleRemoveFavorite = (courseId) => {
    const newFavorites = favorites.filter((id) => id !== courseId);
    dispatch(setFavorites(newFavorites));
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    toast({
      title: "Đã xóa khỏi mục yêu thích",
      description: "Khóa học đã bị xóa khỏi danh sách yêu thích của bạn",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/">
                <AnimatedButton variant="ghost" size="sm" className="p-1 sm:p-2">
                  <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">Back</span>
                </AnimatedButton>
              </Link>
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-2xl font-bold text-gray-900"
              >
                My Favorites
              </motion.h1>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              <span className="text-gray-600 text-sm sm:text-base">{favorites.length}</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {favoriteCourses.length === 0 ? (
          <FadeIn className="text-center py-8 sm:py-12 px-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Start exploring courses and add them to your favorites!
            </p>
            <Link to="/">
              <AnimatedButton className="text-sm sm:text-base px-4 sm:px-6">Browse Courses</AnimatedButton>
            </Link>
          </FadeIn>
        ) : (
          <>
            <FadeIn delay={0.2} className="mb-4 sm:mb-6 px-1">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Your Favorite Courses ({favoriteCourses.length})
              </h2>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Courses you've saved for later</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {favoriteCourses.map((course, index) => (
                <StaggerItem key={course.id}>
                  <AnimatedCard delay={index * 0.1} className="overflow-hidden">
                    <div className="relative">
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
                          onClick={() => handleRemoveFavorite(course.id)}
                        >
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4 fill-red-500 text-red-500" />
                        </Button>
                      </motion.div>
                    </div>
                    <CardHeader className="p-3 sm:p-6">
                      <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{course.title}</h3>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                        <span className="hidden sm:inline">({course.students.toLocaleString()} students)</span>
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
                    <CardFooter className="p-3 sm:p-6 pt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <AnimatedButton className="flex-1 text-sm sm:text-base">Enroll Now</AnimatedButton>
                      <AnimatedButton
                        variant="outline"
                        onClick={() => handleRemoveFavorite(course.id)}
                        className="w-full sm:w-auto text-sm sm:text-base"
                      >
                        Remove
                      </AnimatedButton>
                    </CardFooter>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </main>

      <Toaster />
    </PageTransition>
  );
} 