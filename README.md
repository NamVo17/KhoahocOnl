# 🎓 Education Ecommerce Platform

Nền tảng thương mại điện tử giáo dục được xây dựng với React, Redux, và TailwindCSS. Ứng dụng cung cấp trải nghiệm học tập trực tuyến với các tính năng hiện đại như AI chatbot, gợi ý khóa học thông minh, và giao diện người dùng responsive.

## ✨ Tính năng chính

### 🏠 Trang chủ (HomePage)
- **Giới thiệu**: Thông tin về nền tảng giáo dục
- **Khám phá**: Tìm hiểu các khóa học nổi bật
- **Nổi bật khóa học**: Hiển thị các khóa học được đánh giá cao
- **Mentor hàng đầu**: Giới thiệu các giảng viên chất lượng
- **Đánh giá**: Phản hồi từ học viên
- **Câu hỏi thường gặp**: FAQ về khóa học
- **Liên hệ**: Thông tin liên hệ và hỗ trợ

### 📚 Trang khóa học (CoursesPage)
- **Tìm kiếm thông minh**: Tìm kiếm theo tên, mô tả, tags
- **Lọc theo giá**: Dưới 500k, 500k-1M, trên 1M VND
- **Gợi ý AI**: Dựa trên lịch sử xem và yêu thích
- **Chi tiết khóa học**: Modal hiển thị thông tin đầy đủ
- **Đăng ký khóa học**: Tích hợp thông báo thành công

### ❤️ Trang yêu thích (FavoritesPage)
- **Quản lý yêu thích**: Thêm/xóa khóa học khỏi danh sách
- **Lưu trữ local**: Dữ liệu được lưu trong localStorage
- **Đồng bộ**: Tự động đồng bộ khi chuyển tab

### 🤖 AI Chatbot
- **Tư vấn thông minh**: Phân tích ý định người dùng
- **Gợi ý khóa học**: Dựa trên từ khóa và sở thích
- **Câu hỏi nhanh**: Các câu hỏi mẫu để tương tác
- **Phản hồi tự nhiên**: Sử dụng emoji và ngôn ngữ thân thiện

### 📊 Quản lý trạng thái
- **Redux Toolkit**: Quản lý state tập trung
- **LocalStorage**: Lưu trữ yêu thích và lịch sử
- **Toast notifications**: Thông báo trạng thái thao tác

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **React 19**: Framework chính
- **React Router v7**: Điều hướng ứng dụng
- **Redux Toolkit**: Quản lý state

### UI/UX Libraries
- **TailwindCSS**: Framework CSS utility-first
- **Framer Motion**: Animation và transition
- **Radix UI**: Components accessible (Dialog, Toast, Select, ScrollArea)
- **Lucide React**: Icon library
- **React Icons**: Icon components

### Development Tools
- **Create React App**: Boilerplate
- **Axios**: HTTP client
- **PostCSS**: CSS processing
- **Testing Library**: Unit testing

## 📁 Cấu trúc dự án

```
src/
├── components/           # Components UI
│   ├── Layout/          # Header, Footer
│   ├── ui/              # UI components (Button, Card, Dialog, etc.)
│   └── ChatBot.jsx      # AI Chatbot component
├── pages/               # Các trang chính
│   ├── Home/            # Trang chủ và các section
│   ├── CoursesPage/     # Trang danh sách khóa học
│   └── Favorites/       # Trang yêu thích
├── store/               # Redux store
│   ├── index.js         # Store configuration
│   └── slices/          # Redux slices
│       ├── coursesSlice.js
│       ├── favoritesSlice.js
│       ├── historySlice.js
│       └── uiSlice.js
├── services/            # API services
│   └── courseService.js # Course data fetching
├── hooks/               # Custom hooks
│   └── useToast.js      # Toast notification hook
├── lib/                 # Utility functions
│   └── utils.js         # Common utilities
├── App.js               # Main app component
├── index.js             # Entry point
└── globals.css          # Global styles
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- **Node.js**: >= 16.x
- **npm**: >= 8.x

### Bước 1: Clone dự án
```bash
git clone <repository-url>
cd KhoahocOnl
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy ứng dụng
```bash
npm start
```

Ứng dụng sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

## 🏗️ Build cho production

```bash
npm run build
```

Kết quả build sẽ được tạo trong thư mục `build/`

## 🧪 Chạy tests

```bash
npm test
```

## 📊 Dữ liệu mẫu

Dữ liệu khóa học được lưu trong `public/API/courses.json` với 8 khóa học mẫu:

1. **Complete English Speaking Course** - Khóa học tiếng Anh với giáo viên bản xứ
2. **Web Development Bootcamp** - Lập trình web với React & Node.js
3. **Digital Marketing Mastery** - Marketing số với AI
4. **Data Science & Machine Learning** - Khoa học dữ liệu với Python
5. **UI/UX Design Fundamentals** - Thiết kế UI/UX với Figma
6. **Business English for Professionals** - Tiếng Anh thương mại
7. **Mobile App Development** - Phát triển app với React Native
8. **Cybersecurity Fundamentals** - Bảo mật thông tin

## 🎨 Tùy chỉnh

### Thêm khóa học mới
Chỉnh sửa file `public/API/courses.json` và thêm object khóa học mới:

```json
{
  "id": "9",
  "title": "Tên khóa học",
  "price": 999000,
  "originalPrice": 1299000,
  "image": "/images/khoahoc10.png",
  "description": "Mô tả ngắn",
  "fullDescription": "Mô tả chi tiết",
  "instructor": "Tên giảng viên",
  "rating": 4.8,
  "students": 1500,
  "duration": "12 weeks",
  "level": "Beginner",
  "category": "Programming",
  "tags": ["React", "JavaScript", "Web Development"]
}
```

### Tùy chỉnh style
- **Tailwind config**: Chỉnh sửa `tailwind.config.js`
- **Global styles**: Chỉnh sửa `src/globals.css`
- **Theme colors**: Thay đổi CSS variables trong globals.css

## 🔧 Scripts có sẵn

```json
{
  "start": "react-scripts start",    // Chạy development server
  "build": "react-scripts build",    // Build cho production
  "test": "react-scripts test",      // Chạy tests
  "eject": "react-scripts eject"     // Eject CRA config
}
```

## 📱 Responsive Design

Ứng dụng được thiết kế responsive với breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔐 Lưu trữ dữ liệu

- **Favorites**: Lưu trong localStorage với key "favorites"
- **View History**: Lưu trong localStorage với key "viewHistory"
- **Auto-sync**: Tự động đồng bộ khi focus window

## 🎯 Tính năng AI

### Chatbot Intelligence
- Phân tích ý định người dùng qua từ khóa
- Gợi ý khóa học dựa trên sở thích
- Hỗ trợ đa ngôn ngữ (tiếng Việt)
- Tương tác tự nhiên với emoji

### Course Recommendations
- Dựa trên lịch sử xem khóa học
- Phân tích tags và categories
- Tính điểm ưu tiên theo rating và số học viên
- Gợi ý khóa học có giảm giá

## 🚀 Deployment

### Netlify
```bash
npm run build
# Upload thư mục build/ lên Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push thư mục build/ lên gh-pages branch
```

## 📝 Ghi chú

- Ứng dụng sử dụng localStorage để lưu trữ dữ liệu local
- Chatbot hoạt động offline với logic AI đơn giản
- Tất cả animations sử dụng Framer Motion
- UI components được xây dựng với Radix UI primitives
- Responsive design với TailwindCSS breakpoints

## 🤝 Đóng góp


## 📄 License

Dự án này được phát hành dưới Nam Vo.

---

**Happy Coding! 🎉**

## 📦 Các thư viện cần cài đặt

Dưới đây là các thư viện chính được sử dụng trong dự án (sẽ tự động cài khi chạy `npm install`):

- **react**: Thư viện xây dựng giao diện người dùng
- **react-dom**: Kết nối React với DOM
- **react-router-dom**: Điều hướng giữa các trang
- **react-redux**: Kết nối React với Redux
- **@reduxjs/toolkit**: Quản lý state hiện đại cho Redux
- **axios**: Gọi API, fetch dữ liệu
- **tailwindcss**: Framework CSS utility-first
- **postcss, autoprefixer**: Hỗ trợ xử lý CSS cho Tailwind
- **framer-motion**: Animation cho React
- **@radix-ui/react-dialog, @radix-ui/react-toast, @radix-ui/react-select, @radix-ui/react-scroll-area**: UI primitives hiện đại, accessible
- **react-icons, lucide-react**: Thư viện icon
- **class-variance-authority, clsx, tailwind-merge**: Hỗ trợ quản lý className động
- **@testing-library/react, @testing-library/jest-dom, @testing-library/user-event, @testing-library/dom**: Thư viện test cho React
- **web-vitals**: Đo lường hiệu năng web

> **Lưu ý:**
> Tất cả các thư viện này sẽ được cài đặt tự động khi bạn chạy `npm install`. Nếu muốn cài riêng lẻ, bạn có thể dùng lệnh:
> ```bash
> npm install <tên-thư-viện>
> ```
