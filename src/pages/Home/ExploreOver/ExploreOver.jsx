import React from 'react';
import { FaCube, FaPaintBrush, FaVideo, FaLaptopCode, FaHeadphonesAlt, FaChartBar, FaObjectUngroup, FaPlayCircle } from 'react-icons/fa';


const ExploreOver = () => {
  return (
    <div className="bg-white text-[#0B1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Top logos and text */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-[13px] font-semibold text-[#7B8198] mb-10">
          <span>
            Powered by Bigbrands
          </span>
          <img 
            alt="Microsoft logo placeholder, gray background with MS text" 
            className="w-5 h-5" 
            height="20" 
            src="https://storage.googleapis.com/a1aa/image/84252889-eac5-46e1-9c7a-c081032db548.jpg" 
            width="20"
          />
          <span>
            Microsoft
          </span>
          <span>
            Google
          </span>
          <span className="font-extrabold text-[#3B3B3B] flex items-center gap-1">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="#0B1120" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 8a6 6 0 01-12 0 6 6 0 0112 0zM12 14v7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
              </path>
            </svg>
            Linked
            <span className="text-white bg-[#0B1120] rounded-sm px-[2px] py-[1px] text-[11px] font-semibold">
              in
            </span>
          </span>
          <img 
            alt="Maze logo placeholder, gray background with MZ text" 
            className="w-5 h-5" 
            height="20" 
            src="https://storage.googleapis.com/a1aa/image/779307e8-676c-47d0-a13a-e97476c13b6c.jpg" 
            width="20"
          />
          <span>
            maze
          </span>
          <img 
            alt="Adobe logo placeholder, gray background with AD text" 
            className="w-5 h-5" 
            height="20" 
            src="https://storage.googleapis.com/a1aa/image/2b5d747b-ebf3-40f4-484f-dbe9a1ca5469.jpg" 
            width="20"
          />
          <span>
            Adobe
          </span>
        </div>
        
        {/* Title with swirl icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <svg 
            className="w-8 h-8 text-[#4F5BD5]" 
            fill="none" 
            stroke="#4F5BD5" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 8c2-2 4 2 6 0s4-4 6-2 4 4 6 2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
            </path>
          </svg>
          <h2 className="text-[#0B1120] font-extrabold text-lg sm:text-xl md:text-2xl">
            Explore Over 100+ Online Courses
          </h2>
          <svg 
            className="w-8 h-8 text-[#4F5BD5]" 
            fill="none" 
            stroke="#4F5BD5" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 8c2-2 4 2 6 0s4-4 6-2 4 4 6 2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
            </path>
          </svg>
        </div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
              <FaCube className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              3D Modeling and Animation
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaPaintBrush className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Graphic Design
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaVideo className="text-[#0B1120] text-xl" />

            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Video Editing
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaLaptopCode className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Full-Stack Web Development
            </p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaHeadphonesAlt className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Digital Illustration & Concept Art
            </p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaChartBar className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Digital Marketing Mastery
            </p>
          </div>
          
          {/* Card 7 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center  bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaObjectUngroup className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Professional UI/UX Design
            </p>
          </div>
          
          {/* Card 8 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center bg-gradient-to-r from-[#eef2ff] to-[#c3c9ff] hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
            <FaPlayCircle className="text-[#0B1120] text-xl" />
            </div>
            <p className="text-xs font-semibold text-[#0B1120] leading-tight">
              Motion Graphics & Animation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOver; 