import React from 'react';

const TopMentor = () => {
  return (
    <div className="bg-white flex justify-center py-10 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-center text-slate-900 font-semibold text-xl md:text-2xl mb-8 flex items-center justify-center gap-3">
          <svg 
            aria-hidden="true" 
            className="w-8 h-8 text-indigo-500" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M3 12c0-3 3-6 6-6"></path>
            <path d="M9 6c3 0 6 3 6 6"></path>
          </svg>
          Top Reviewed Mentors
          <svg 
            aria-hidden="true" 
            className="w-8 h-8 text-indigo-500 rotate-180" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M3 12c0-3 3-6 6-6"></path>
            <path d="M9 6c3 0 6 3 6 6"></path>
          </svg>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img 
              alt="Black man wearing glasses and white shirt smiling with arms crossed" 
              className="rounded-2xl w-36 h-36 object-cover hover:shadow-xl hover:-translate-y-1 transition-all duration-200" 
              height="150" 
              src="https://storage.googleapis.com/a1aa/image/11f3f974-9d4c-46af-e2df-85ae8f854052.jpg" 
              width="150"
            />
            <h3 className="mt-4 font-semibold text-slate-900 text-base">
              Alex Harper
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Sr. Product Designer
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              alt="Man wearing glasses and teal shirt smiling with hand near chin" 
              className="rounded-2xl w-36 h-36 object-cover hover:shadow-xl hover:-translate-y-1 transition-all duration-200" 
              height="150" 
              src="https://storage.googleapis.com/a1aa/image/a7ef23fc-f4cf-41ec-d907-1e38c0cc02c0.jpg" 
              width="150"
            />
            <h3 className="mt-4 font-semibold text-slate-900 text-base">
              Jordan Lee
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              3D Motion Designer
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              alt="Woman holding book smiling wearing white shirt" 
              className="rounded-2xl w-36 h-36 object-cover hover:shadow-xl hover:-translate-y-1 transition-all duration-200" 
              height="150" 
              src="https://storage.googleapis.com/a1aa/image/3edb1ff6-4c0c-4cdc-9bc1-31ac550b8bbe.jpg" 
              width="150"
            />
            <h3 className="mt-4 font-semibold text-slate-900 text-base">
              Emily Carter
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Digital Marketing Executive
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              alt="Man wearing glasses and black shirt smiling sitting indoors" 
              className="rounded-2xl w-36 h-36 object-cover hover:shadow-xl hover:-translate-y-1 transition-all duration-200" 
              height="150" 
              src="https://storage.googleapis.com/a1aa/image/6cb7e537-d0f3-405c-e65a-a5f58446762f.jpg" 
              width="150"
            />
            <h3 className="mt-4 font-semibold text-slate-900 text-base">
              Wasi Andad
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Sr. Video Editor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMentor; 