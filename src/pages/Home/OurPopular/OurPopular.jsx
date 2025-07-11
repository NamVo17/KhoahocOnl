import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../../../services/courseService';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const OurPopular = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        // Sắp xếp theo số học viên hoặc rating nếu muốn
        setCourses(data.slice(0, 6)); // Lấy 6 khóa học đầu tiên
      } catch (err) {
        // Xử lý lỗi nếu cần
      }
    };
    getCourses();
  }, []);

  // Hàm render sao
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
      <>
        {[...Array(full)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500 inline" />
        ))}
        {half && <FaStarHalfAlt className="text-yellow-500 inline" />}
        {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => (
          <FaStar key={i + 5} className="text-gray-300 inline" />
        ))}
      </>
    );
  };

  return (
    <div className="bg-white text-gray-900 ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center font-semibold text-lg sm:text-xl md:text-2xl text-gray-900 mb-10 relative">
          <span className="inline-block">
            Our Popular Enrolled Courses
          </span>
          <span aria-hidden="true" className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2">
            <svg
              className="inline-block stroke-blue-600"
              fill="none"
              height="20"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10c3-5 6-5 8-5 2 0 3 2 4 4 1 2 2 3 4 3 2 0 3-2 4-4 1-2 2-3 4-3 2 0 3 2 4 4"
                stroke="#3B82F6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <circle cx="1" cy="10" fill="#3B82F6" r="1"></circle>
              <circle cx="39" cy="10" fill="#3B82F6" r="1"></circle>
            </svg>
          </span>
        </h2>

        <section aria-label="Popular courses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {courses.map((course) => (
            <article key={course.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between max-w-sm mx-auto hover:bg-gray-200  hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <img
                alt={course.title}
                className="rounded-lg mb-4 object-cover w-full h-56"
                src={course.image}
                loading="lazy"
              />
              <div className="mb-3 flex items-center text-yellow-500 text-sm font-semibold space-x-1">
                <span>{course.rating}</span>
                <span>{renderStars(course.rating)}</span>
                <span className="text-gray-400 text-xs">({course.students})</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-1 leading-snug">
                {course.title}
              </h3>
              <p className="text-gray-600 text-xs mb-4 leading-tight">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <button className="text-xs font-semibold text-gray-700 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 transition">
                  Join Now
                </button>
                <span className="font-semibold text-gray-900 text-sm">
                  {course.price ? `${(course.price / 1000).toLocaleString()}₫` : ''}
                </span>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            to="/courses"
            className="flex items-center gap-2 text-xs font-semibold text-gray-700 border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-100 bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            View All Courses
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default OurPopular; 