import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SlideIn } from "../ui/PageTransition";
import { AnimatedButton } from "../ui/AnimatedButton";
import { Badge } from "../ui/Badge";
import { MessageCircle, Heart, Clock } from "lucide-react";

const Header = ({ toggleChat, toggleHistory, favorites, viewHistory }) => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="bg-white shadow-sm border-b sticky top-0 z-40 backdrop-blur-sm bg-white/95"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <SlideIn direction="left" className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/">
            <motion.div
              className="text-lg sm:text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              EduMarket AI
            </motion.div>
          </Link>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.3 }}>
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 text-xs sm:text-sm hidden sm:inline-flex"
            >
              AI-Powered Learning
            </Badge>
          </motion.div>
        </SlideIn>
        <SlideIn direction="right" className="flex items-center space-x-2 sm:space-x-4">
          <AnimatedButton
            onClick={toggleChat}
            variant="outline"
            size="sm"
            className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700"
          >
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">AI Chat</span>
          </AnimatedButton>
          {/* Link Tất cả khóa học */}
          <Link
            to="/courses"
            className=" text-gray-700 hover:text-blue-700 font-semibold px-3 py-1 rounded transition-colors duration-200 text-xs sm:text-sm"
          >
            All Course
          </Link>
          <Link
            to="/favorites"
            className="text-gray-600 hover:text-gray-900 flex items-center space-x-1 transition-colors duration-200"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Favourite</span>
              <span className="sm:hidden">({favorites.length})</span>
              <span className="hidden sm:inline">({favorites.length})</span>
            </motion.div>
          </Link>
          <AnimatedButton
            onClick={toggleHistory}
            variant="outline"
            size="sm"
            className="flex items-center space-x-1 bg-transparent text-xs sm:text-sm"
          >
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">History</span>
            <span>({viewHistory.length})</span>
          </AnimatedButton>
        </SlideIn>
      </div>
    </div>
    
  </motion.header>
  
);

export default Header;