import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { Badge } from "./Badge";
import { AnimatedButton } from "./AnimatedButton";

export default function CourseDetailModal({
  selectedCourse,
  onClose,
  favorites,
  toggleFavorite,
  handleEnrollNow,
  formatPrice
}) {
  if (!selectedCourse) return null;
  return (
    <AnimatePresence>
      <Dialog open={!!selectedCourse} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto mx-4 sm:mx-auto bg-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader className="pb-4">
              <DialogTitle className="text-lg sm:text-2xl font-bold pr-8">{selectedCourse.title}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img
                    src={selectedCourse.image || "/placeholder.svg"}
                    alt={selectedCourse.title}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 sm:mt-4 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm sm:text-base">{selectedCourse.rating}</span>
                    <span className="text-gray-600 text-xs sm:text-sm">
                      ({selectedCourse.students.toLocaleString()} học viên)
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <div>
                      <span className="font-medium">Giảng viên:</span> {selectedCourse.instructor}
                    </div>
                    <div>
                      <span className="font-medium">Thời lượng:</span> {selectedCourse.duration}
                    </div>
                    <div>
                      <span className="font-medium">Cấp độ:</span> {selectedCourse.level}
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-green-600">
                      {formatPrice(selectedCourse.price)}
                    </span>
                    {selectedCourse.originalPrice && (
                      <span className="text-sm sm:text-lg text-gray-500 line-through">
                        {formatPrice(selectedCourse.originalPrice)}
                      </span>
                    )}
                  </div>
                  {selectedCourse.originalPrice && (
                    <Badge className="bg-red-100 text-red-800 text-xs">
                      Tiết kiệm {Math.round((1 - selectedCourse.price / selectedCourse.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Mô tả khóa học</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {selectedCourse.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Thẻ</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedCourse.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row justify-center space-x-2 pt-4">
                    <AnimatedButton
                      className="flex-1 text-sm sm:text-base py-2 sm:py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                      onClick={() => handleEnrollNow(selectedCourse)}
                    >
                      Đăng ký ngay
                    </AnimatedButton>
                    <AnimatedButton
                      variant="outline"
                      onClick={() => toggleFavorite(selectedCourse.id)}
                      className="w-auto"
                    >
                      <Heart
                        className={`h-4 w-4 ${favorites.includes(selectedCourse.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      <span className="ml-2 ">
                        {favorites.includes(selectedCourse.id) ? "Bỏ yêu thích" : "Yêu thích"}
                      </span>
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}