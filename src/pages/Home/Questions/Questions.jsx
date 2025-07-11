import React, { useState } from 'react';

const faqs = [
  {
    question: "What types of courses are available on the platform?",
    answer: "Our platform offers a wide range of courses including Web Development, Data Science, Digital Marketing, Business English, UI/UX Design, Cybersecurity, and more. Whether you're a beginner or an advanced learner, there's something for everyone."
  },
  {
    question: "What if I need help during the course?",
    answer: "You can reach out to our support team anytime through live chat or email. Additionally, many courses include Q&A sections, discussion forums, or direct support from instructors to ensure you get the help you need."
  },
  {
    question: "Can I get a refund if I'm not satisfied with the course?",
    answer: "Yes, we offer a satisfaction guarantee. If you're not happy with a course, you may request a refund within 7 days of purchase, provided that less than 20% of the course has been completed."
  },
  {
    question: "Are the courses accredited or do they offer certifications?",
    answer: "Some of our courses are accredited by recognized institutions, while all courses offer a certificate of completion. Accredited courses will be clearly marked in the course description."
  }
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0); // Mặc định mở câu đầu tiên

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white text-[#0B1B3F] font-sans">
      <div className="max-w-7xl mx-auto px-12 py-12 md:py-20">
        <h2 className="text-center text-[2rem] md:text-[2.5rem] font-bold mb-12 flex items-center justify-center gap-3">
          Curious Minds: Your Top Questions Answered!
          <svg aria-hidden="true" className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 7c0 3-3 3-3 0s3-3 3 0zM21 7c0 3-3 3-3 0s3-3 3 0z"></path>
            <path d="M15 7c0 3-3 3-3 0s3-3 3 0z"></path>
          </svg>
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* FAQ */}
          <div className="md:flex-1 max-w-x2 mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-[#E6E8F0] rounded-2xl p-7 shadow-md transition-all`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full flex justify-between items-center text-[#0B1B3F] font-semibold text-lg leading-6 focus:outline-none"
                    aria-expanded={openIndex === idx}
                  >
                    <span className="text-left max-w-[85%]">{faq.question}</span>
                    <span>
                      {openIndex === idx ? (
                        <svg width="20" height="20" fill="none" stroke="#0B1B3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M18 15l-6-6-6 6"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" fill="none" stroke="#0B1B3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  {openIndex === idx && faq.answer && (
                    <p className="mt-3 text-[15px] leading-6 text-[#6B7280] font-normal">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Ảnh */}
          <div className="mt-10 md:mt-0 md:w-[300px] flex justify-center md:justify-end">
            <img
              alt="Smiling woman with long brown hair wearing gray t-shirt and watch, looking slightly up and to the right"
              className="rounded-2xl w-[300px] h-[420px] object-cover"
              src="https://storage.googleapis.com/a1aa/image/648c9bcf-6b30-44d8-7206-156fc64565b0.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions; 