import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageTransition } from "../../components/ui/PageTransition";
import { setCourses, setFilteredCourses } from "../../store/slices/coursesSlice";
import { setFavorites } from "../../store/slices/favoritesSlice";
import { setViewHistory, addToHistory } from "../../store/slices/historySlice";
import {  setSelectedCourse, setIsChatOpen, setIsHistoryOpen } from "../../store/slices/uiSlice";
import { fetchCourses } from "../../services/courseService";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import AboutUs from "./AboutUs/AboutUs";
import ExploreOver from "./ExploreOver/ExploreOver";
import CourseHighlights from "./CourseHighlights/CourseHighlights";
import OurPopular from "./OurPopular/OurPopular";
import TopMentor from "./TopMentor/TopMentor";
import Evaluate from "./Evaluate/Evaluate";
import Questions from "./Questions/Questions";
import GetinTouch from "./GetinTouch/GetinTouch";
import HistoryModal from "../../components/ui/HistoryModal";
import { AnimatePresence } from "framer-motion";
import ChatBot from "../../components/ChatBot";
import { Toaster } from "../../components/ui/Toaster";

export default function HomePage() {
  const dispatch = useDispatch();
  

  // Redux selectors
  const courses = useSelector((state) => state.courses.courses);
  const favorites = useSelector((state) => state.favorites.favorites);
  const viewHistory = useSelector((state) => state.history.viewHistory);
  const searchTerm = useSelector((state) => state.ui.searchTerm);
  const priceFilter = useSelector((state) => state.ui.priceFilter);
  const isChatOpen = useSelector((state) => state.ui.isChatOpen);
  const isHistoryOpen = useSelector((state) => state.ui.isHistoryOpen);

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch(() => {});
  }, [dispatch]);

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

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    const savedHistory = localStorage.getItem("viewHistory");
    if (savedFavorites) dispatch(setFavorites(JSON.parse(savedFavorites)));
    if (savedHistory) dispatch(setViewHistory(JSON.parse(savedHistory)));
  }, [dispatch]);

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

  const handleCourseClick = (course) => {
    dispatch(setSelectedCourse(course));
    dispatch(addToHistory(course.id));
    const newHistory = [course.id, ...viewHistory.filter((id) => id !== course.id)].slice(0, 10);
    localStorage.setItem("viewHistory", JSON.stringify(newHistory));
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
    <PageTransition className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        toggleChat={toggleChat}
        toggleHistory={toggleHistory}
        favorites={favorites}
        viewHistory={viewHistory}
      />
      <AboutUs />
      <ExploreOver />
      <CourseHighlights />
      <OurPopular />
      <TopMentor />
      <Evaluate />
      <Questions />
      <GetinTouch />
      <Footer />
      
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => dispatch(setIsHistoryOpen(false))}
        historyCourses={historyCourses}
        viewHistory={viewHistory}
        formatPrice={formatPrice}
        handleCourseClick={handleCourseClick}
      />

      
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
    </PageTransition>
  );
} 