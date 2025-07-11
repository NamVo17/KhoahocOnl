import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Clock, Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./PageTransition";
import { AnimatedCard } from "./AnimatedCard";
import { AnimatedButton } from "./AnimatedButton";

export default function HistoryModal({
  isOpen,
  onClose,
  historyCourses,
  viewHistory,
  formatPrice,
  handleCourseClick
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Lịch sử xem ({viewHistory.length})</span>
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {historyCourses.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chưa có lịch sử xem</h3>
                    <p className="text-gray-600">Các khóa học bạn đã xem sẽ hiển thị ở đây</p>
                  </motion.div>
                ) : (
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {historyCourses.map((course, index) => (
                      <StaggerItem key={course.id}>
                        <AnimatedCard delay={index * 0.1} className="cursor-pointer">
                          <div className="flex space-x-4 p-4">
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              width={80}
                              height={60}
                              className="w-20 h-15 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm line-clamp-2 mb-1">{course.title}</h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{course.rating}</span>
                                <span>•</span>
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-green-600 text-sm">{formatPrice(course.price)}</span>
                                <AnimatedButton
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    handleCourseClick(course);
                                    onClose();
                                  }}
                                >
                                  Xem lại
                                </AnimatedButton>
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                )}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}