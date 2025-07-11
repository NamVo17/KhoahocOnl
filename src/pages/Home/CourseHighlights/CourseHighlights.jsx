import React, { useState } from 'react';

const tabData = [
  {
    label: '1. Live Sessions',
    content: (
      <>
        <h3 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl mb-6">Live Sessions</h3>
        <div className="flex items-start gap-3 mb-4">
          <div className="mt-1 text-[#6b7280] text-sm sm:text-base">
            <i className="far fa-clock text-[#6b7280] text-lg sm:text-xl"></i>
          </div>
          <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
            These live sessions enable learners to interact directly with expert instructors, engage with dynamic discussions, and ask questions all in real-time.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 text-[#6b7280] text-sm sm:text-base">
            <i className="fas fa-brain text-[#6b7280] text-lg sm:text-xl"></i>
          </div>
          <p className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
            Alongside instructor-led teaching, live sessions foster peer interaction, allowing students to and collaborate on projects and join group activities anytime.
          </p>
        </div>
      </>
    ),
  },
  {
    label: '2. Resource Files',
    content: (
      <>
        <h3 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl mb-6">Resource Files</h3>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          These downloadable materials include lecture notes, presentation slides, coding examples, and reference documents to support your learning journey.
        </div>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          You can access them anytime to review key concepts or deepen your understanding.
        </div>
        <div className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          We regularly update these resources based on feedback and course enhancements to ensure relevance and quality.
        </div>
      </>
    ),
  },
  {
    label: '3. Exam/Quizes',
    content: (
      <>
        <h3 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl mb-6">Exam/Quizzes</h3>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          Our interactive exams and quizzes are designed to reinforce your learning and assess your progress in real-time.
        </div>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          Each quiz provides instant feedback to help you identify strengths and areas for improvement.
        </div>
        <div className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          With a mix of multiple-choice questions, short answers, and practical tasks, learners stay engaged and motivated throughout the course.
        </div>
      </>
    ),
  },
  {
    label: '4. 24/7 Support',
    content: (
      <>
        <h3 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl mb-6">24/7 Support</h3>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          Our dedicated support team is available around the clock to assist you with any course-related queries.
        </div>
        <div className="mb-2 text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          Whether it's a technical issue, content clarification, or study advice, help is just a message away.
        </div>
        <div className="text-[#6b7280] text-xs sm:text-sm leading-relaxed">
          This ensures a smooth, stress-free learning experience, no matter your timezone or schedule.
        </div>
      </>
    ),
  },
];

const CourseHighlights = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-[#c3c9ff] p-6">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10 flex items-center justify-center gap-3">
          <svg 
            aria-hidden="true" 
            className="w-8 h-8 text-[#4a5bdc]" 
            fill="none" 
            stroke="#4a5bdc" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M3 10c3-3 6 3 9 0 3-3 6 3 9 0"></path>
            <path d="M3 14c3-3 6 3 9 0 3-3 6 3 9 0"></path>
          </svg>
          <h2 className="text-[#0f172a] font-extrabold text-xl sm:text-2xl md:text-3xl">
            Our Course Highlights
          </h2>
          <svg 
            aria-hidden="true" 
            className="w-8 h-8 text-[#4a5bdc]" 
            fill="none" 
            stroke="#4a5bdc" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M3 10c3-3 6 3 9 0 3-3 6 3 9 0"></path>
            <path d="M3 14c3-3 6 3 9 0 3-3 6 3 9 0"></path>
          </svg>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10 ">
          {tabData.map((tab, idx) => (
            <button
              key={tab.label}
              className={
                (activeTab === idx
                  ? 'bg-[#4a5bdc] text-white '
                  : 'bg-white text-[#0f172a] shadow-md ') +
                'text-xs sm:text-sm md:text-base font-semibold rounded-lg px-6 py-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-200'
              }
              type="button"
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-xl w-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200  ">
            {tabData[activeTab].content}
          </div>
          <div className="w-full max-w-md md:max-w-sm rounded-2xl overflow-hidden shadow-lg ">
            <img 
              alt="Woman wearing white shirt and headphones smiling while looking at laptop on desk with notebook and pen in modern room with blurred plant and fireplace in background" 
              className="w-full h-auto object-cover rounded-2xl " 
              height="300" 
              src="https://storage.googleapis.com/a1aa/image/db7f8d66-0937-4c9d-de1d-79ad1ec250b0.jpg" 
              width="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights; 