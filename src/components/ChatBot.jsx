import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Clock, Star } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ScrollArea } from "./ui/ScrollArea";

const QUICK_QUESTIONS = [
  "Tôi muốn học tiếng Anh với người Mỹ",
  "Khóa học lập trình web cho người mới",
  "Marketing online với AI",
  "Thiết kế UI/UX cơ bản",
  "Data Science với Python",
  "Khóa học nào có giá rẻ nhất?",
  "Tôi muốn học kinh doanh online",
  "Khóa học nào phù hợp cho người đi làm?",
];

const NATURAL_RESPONSES = {
  greeting: [
    "Chào bạn! 😊 Mình có thể giúp bạn tìm khóa học phù hợp đây. Bạn đang muốn học gì vậy?",
    "Hi! Rất vui được gặp bạn 👋 Bạn có muốn mình tư vấn khóa học gì không?",
    "Xin chào! Mình là AI tư vấn khóa học đây. Bạn đang quan tâm lĩnh vực nào nhỉ?",
  ],
  thanks: [
    "Không có gì đâu! 😄 Mình luôn sẵn sàng giúp bạn mà. Còn cần tư vấn gì khác không?",
    "Hehe, đó là việc của mình mà! 😊 Bạn còn thắc mắc gì về khóa học không?",
    "Dễ thôi! Mình rất vui được giúp bạn 🤗 Có gì cứ hỏi nhé!",
  ],
  english: [
    "Ồ học tiếng Anh à! 🇺🇸 Đây là lựa chọn tuyệt vời đấy. Mình có mấy khóa học hay ho này:",
    "Tiếng Anh rất quan trọng nhỉ! 😍 Mình tìm được mấy khóa học chất lượng này cho bạn:",
    "Học tiếng Anh để thăng tiến sự nghiệp phải không? 🚀 Những khóa học này sẽ giúp bạn:",
  ],
  programming: [
    "Lập trình đang rất hot đấy! 💻 Mình có mấy khóa học từ cơ bản đến nâng cao này:",
    "Ôi, bạn muốn trở thành developer à? 🔥 Tuyệt vời! Mình gợi ý mấy khóa học này:",
    "Coding là tương lai! 🚀 Đây là những khóa học mình nghĩ bạn sẽ thích:",
  ],
  marketing: [
    "Marketing trong thời đại số rất thú vị! 📈 Mình có mấy khóa học hot này:",
    "Ồ bạn muốn làm marketer à? 🎯 Những khóa học này sẽ giúp bạn thành công:",
    "Digital marketing đang boom lắm! 💥 Mình tìm được mấy khóa học chất này:",
  ],
  design: [
    "Thiết kế là nghệ thuật đấy! 🎨 Mình có mấy khóa học hay này cho bạn:",
    "UI/UX đang rất được săn đón! ✨ Những khóa học này sẽ giúp bạn:",
    "Design thinking rất quan trọng! 💡 Mình gợi ý mấy khóa học này:",
  ],
  data: [
    "Data Science là tương lai! 📊 Mình có mấy khóa học từ cơ bản đến chuyên sâu:",
    "Big Data và AI đang rất hot! 🤖 Những khóa học này sẽ giúp bạn:",
    "Python cho Data Science à? 🐍 Tuyệt vời! Mình có mấy khóa học này:",
  ],
  business: [
    "Kinh doanh online rất tiềm năng! 💼 Mình có mấy khóa học hay này:",
    "Khởi nghiệp là ước mơ của nhiều người! 🚀 Những khóa học này sẽ giúp bạn:",
    "Business skills rất quan trọng! 📈 Mình gợi ý mấy khóa học này:",
  ],
  price: [
    "Ah bạn quan tâm về giá cả nhỉ! 💰 Mình tìm được mấy khóa học giá tốt này:",
    "Học với budget hợp lý à? 😊 Những khóa học này vừa chất lượng vừa giá rẻ:",
    "Tiết kiệm mà vẫn chất lượng! 👍 Mình có mấy khóa học này:",
  ],
  followUp: [
    "Bạn thấy khóa học nào thú vị không? Mình có thể kể chi tiết hơn đấy! 😊",
    "Có khóa học nào bạn muốn biết thêm không? Cứ hỏi mình nhé! 🤗",
    "Bạn còn thắc mắc gì về những khóa học này không? Mình sẵn sàng giải đáp! 💬",
    "Nếu cần tư vấn thêm về bất kỳ khóa học nào, bạn cứ nói mình nhé! 😄",
  ],
  noMatch: [
    "Hmm, mình chưa hiểu rõ bạn muốn học gì 🤔 Bạn có thể nói cụ thể hơn không?",
    "Ơ, mình hơi bối rối 😅 Bạn có thể mô tả rõ hơn về mục tiêu học tập không?",
    "Mình chưa tìm được khóa học phù hợp 😔 Bạn thử nói chi tiết hơn xem?",
  ],
};

export default function ChatBot({ isOpen, onClose, courses, onCourseRecommend }) {
  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "bot",
      content:
        "Chào bạn! 😊 Mình là AI tư vấn khóa học của EduMarket. Bạn đang muốn học gì vậy? Cứ thoải mái hỏi mình nhé!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const analyzeUserIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    let recommendedCourses = [];

    if (lowerMessage.includes("tiếng anh") || lowerMessage.includes("english")) {
      recommendedCourses = courses.filter(
        (course) =>
          course.tags.some((tag) => tag.toLowerCase().includes("english")) ||
          course.category.toLowerCase().includes("language")
      );
    } else if (
      lowerMessage.includes("lập trình") ||
      lowerMessage.includes("web") ||
      lowerMessage.includes("react") ||
      lowerMessage.includes("javascript") ||
      lowerMessage.includes("programming") ||
      lowerMessage.includes("code") ||
      lowerMessage.includes("developer")
    ) {
      recommendedCourses = courses.filter(
        (course) =>
          course.tags.some(
            (tag) =>
              tag.toLowerCase().includes("react") ||
              tag.toLowerCase().includes("javascript") ||
              tag.toLowerCase().includes("web") ||
              tag.toLowerCase().includes("full-stack")
          ) || course.category.toLowerCase().includes("programming")
      );
    } else if (lowerMessage.includes("marketing") || lowerMessage.includes("quảng cáo") || lowerMessage.includes("seo")) {
      recommendedCourses = courses.filter(
        (course) =>
          course.tags.some((tag) => tag.toLowerCase().includes("marketing")) ||
          course.category.toLowerCase().includes("marketing")
      );
    } else if (
      lowerMessage.includes("thiết kế") ||
      lowerMessage.includes("ui") ||
      lowerMessage.includes("ux") ||
      lowerMessage.includes("figma") ||
      lowerMessage.includes("design")
    ) {
      recommendedCourses = courses.filter(
        (course) =>
          course.tags.some(
            (tag) =>
              tag.toLowerCase().includes("ui") ||
              tag.toLowerCase().includes("ux") ||
              tag.toLowerCase().includes("design")
          ) || course.category.toLowerCase().includes("design")
      );
    } else if (
      lowerMessage.includes("data") ||
      lowerMessage.includes("python") ||
      lowerMessage.includes("machine learning") ||
      lowerMessage.includes("ai")
    ) {
      recommendedCourses = courses.filter(
        (course) =>
          course.tags.some(
            (tag) =>
              tag.toLowerCase().includes("python") ||
              tag.toLowerCase().includes("data") ||
              tag.toLowerCase().includes("ai") ||
              tag.toLowerCase().includes("machine learning")
          ) || course.category.toLowerCase().includes("data")
      );
    } else if (
      lowerMessage.includes("business") ||
      lowerMessage.includes("kinh doanh") ||
      lowerMessage.includes("professional")
    ) {
      recommendedCourses = courses.filter((course) =>
        course.tags.some((tag) => tag.toLowerCase().includes("business") || tag.toLowerCase().includes("professional"))
      );
    } else if (lowerMessage.includes("rẻ") || lowerMessage.includes("giá thấp") || lowerMessage.includes("tiết kiệm")) {
      recommendedCourses = courses.slice().sort((a, b) => a.price - b.price).slice(0, 3);
    } else if (lowerMessage.includes("chất lượng cao") || lowerMessage.includes("tốt nhất")) {
      recommendedCourses = courses.slice().sort((a, b) => b.rating - a.rating).slice(0, 3);
    } else {
      recommendedCourses = courses.slice().sort((a, b) => b.students - a.students).slice(0, 3);
    }

    return recommendedCourses.slice(0, 3);
  };

  const generateBotResponse = (userMessage, recommendedCourses) => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("xin chào") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("chào")
    ) {
      return getRandomResponse(NATURAL_RESPONSES.greeting);
    }
    if (lowerMessage.includes("cảm ơn") || lowerMessage.includes("thanks") || lowerMessage.includes("thank")) {
      return getRandomResponse(NATURAL_RESPONSES.thanks);
    }
    if (lowerMessage.includes("tiếng anh") || lowerMessage.includes("english")) {
      return getRandomResponse(NATURAL_RESPONSES.english);
    }
    if (
      lowerMessage.includes("lập trình") ||
      lowerMessage.includes("programming") ||
      lowerMessage.includes("web") ||
      lowerMessage.includes("code")
    ) {
      return getRandomResponse(NATURAL_RESPONSES.programming);
    }
    if (lowerMessage.includes("marketing")) {
      return getRandomResponse(NATURAL_RESPONSES.marketing);
    }
    if (lowerMessage.includes("thiết kế") || lowerMessage.includes("design")) {
      return getRandomResponse(NATURAL_RESPONSES.design);
    }
    if (lowerMessage.includes("data") || lowerMessage.includes("python")) {
      return getRandomResponse(NATURAL_RESPONSES.data);
    }
    if (lowerMessage.includes("kinh doanh") || lowerMessage.includes("business")) {
      return getRandomResponse(NATURAL_RESPONSES.business);
    }
    if (lowerMessage.includes("rẻ") || lowerMessage.includes("giá")) {
      return getRandomResponse(NATURAL_RESPONSES.price);
    }
    if (recommendedCourses.length === 0) {
      return getRandomResponse(NATURAL_RESPONSES.noMatch);
    }
    const generalResponses = [
      "Ồ, mình hiểu rồi! 😊 Dựa trên yêu cầu của bạn, mình nghĩ những khóa học này sẽ phù hợp:",
      "Được rồi! Mình có mấy khóa học hay ho này cho bạn:",
      "Ah, mình tìm được mấy khóa học thú vị này đây:",
    ];
    return getRandomResponse(generalResponses);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1500 + 800));
      const recommendedCourses = analyzeUserIntent(message);
      const botResponse = generateBotResponse(message, recommendedCourses);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
        courses: recommendedCourses,
      };
      setMessages((prev) => [...prev, botMessage]);
      if (recommendedCourses.length > 0) {
        setTimeout(() => {
          const followUpMessage = {
            id: (Date.now() + 2).toString(),
            type: "bot",
            content: getRandomResponse(NATURAL_RESPONSES.followUp),
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, followUpMessage]);
        }, 2000);
      }
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Ôi, mình gặp chút vấn đề rồi 😅 Bạn thử hỏi lại được không?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-2xl border w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs opacity-90">Course Advisor</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-start space-x-2 max-w-[80%]`}>
                  {message.type === "bot" && (
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.type === "user" && (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Course Recommendations */}
            {messages
              .filter((msg) => msg.type === "bot" && msg.courses && msg.courses.length > 0)
              .slice(-1)
              .map((message) => (
                <div key={`courses-${message.id}`} className="space-y-3">
                  {message.courses?.map((course) => (
                    <Card
                      key={course.id}
                      className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-500"
                      onClick={() => onCourseRecommend(course)}
                    >
                      <CardContent className="p-3">
                        <div className="flex space-x-3">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={60}
                            height={60}
                            className="w-15 h-15 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm line-clamp-2 mb-1">{course.title}</h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{course.rating}</span>
                              <Clock className="h-3 w-3" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-green-600 text-sm">{formatPrice(course.price)}</span>
                              <Badge variant="outline" className="text-xs">
                                {course.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        {/* Quick Questions - hiển thị khi ít tin nhắn */}
        {messages.length <= 3 && (
          <div className="p-4 border-t bg-gray-50">
            <p className="text-xs text-gray-600 mb-2">💡 Bạn có thể hỏi:</p>
            <div className="grid grid-cols-1 gap-2">
              {QUICK_QUESTIONS.slice(0, 4).map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto py-2 px-3 bg-transparent text-left justify-start"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 text-sm"
              disabled={isTyping}
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 