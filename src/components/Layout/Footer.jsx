import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#031424] text-white">
      <footer className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          <div className="md:w-1/3 space-y-4">
            <div className="flex items-center gap-2">
              <img 
                alt="Blue EduMarket AI logo icon" 
                className="w-5 h-5" 
                height="20" 
                src="https://storage.googleapis.com/a1aa/image/01bb2b5e-3739-4ad0-c6a5-7ca0378b1c7b.jpg" 
                width="20"
              />
              <span className="text-blue-500 font-semibold text-sm md:text-base">
              EduMarket AI
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xs">
              Where your journey to expertise begins. We're a cutting-edge online course platform dedicated to empowering learners of all ages and backgrounds with the knowledge and skills.
            </p>
          </div>
          
          <div className="flex justify-between md:w-2/3">
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-4">
              EduMarket AI
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-white/80">
                <li>About</li>
                <li>Pricing</li>
                <li>Jobs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-4">
                Be Master
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-white/80">
                <li>How to Apply</li>
                <li>Blogs</li>
                <li>Course Details</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-4">
                Help Center
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-white/80">
                <li>Community</li>
                <li>Academy</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-white/10 my-8" />
        <p className="text-center text-white/50 text-xs md:text-sm">
          © By 2025 NamVo
        </p>
      </footer>
    </div>
  );
};

export default Footer; 