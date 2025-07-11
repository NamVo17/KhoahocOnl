import React from 'react';
import { FaStar } from 'react-icons/fa';

const Evaluate = () => {
  return (
    <div className="bg-gradient-to-r from-white to-[#c3c9f9] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-center text-gray-900 font-semibold text-xl md:text-2xl mb-10 flex items-center justify-center gap-3">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-[#5a7de0]"
            fill="none"
            stroke="#5a7de0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 12c3-3 6-3 9 0s6 3 9 0"></path>
            <path d="M3 16c3-3 6-3 9 0s6 3 9 0"></path>
          </svg>
          Hear From Our Beloved Student
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-[#5a7de0]"
            fill="none"
            stroke="#5a7de0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 12c3-3 6-3 9 0s6 3 9 0"></path>
            <path d="M3 16c3-3 6-3 9 0s6 3 9 0"></path>
          </svg>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of Jenni Amy, a young woman with dark hair, smiling"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/6eab59a9-30dc-441d-9cc9-d1eca05fd65f.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  Jenni Amy
                </h3>
                <p className="text-xs text-yellow-700">
                  Tokyo, Japan
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              This platform has completely transformed my approach to graphic design. The courses are incredibly well-structured, and all the instructors are industry experts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of Devon Lane, a woman with long dark hair, smiling"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/4b7b4401-c36c-49bb-9b07-9adb35ba4153.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  Devon Lane
                </h3>
                <p className="text-xs text-yellow-700">
                  Paris, France
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              This website offers fantastic UX/UI design course that are engaging and informative. The practical exercises and realworld case studies have given me solid understanding of design principles and experience. Loved the whole course alot.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of Esther Howard, a man with glasses and beard"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/18fcece0-1486-48c8-6b06-ead01d93ece5.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  Esther Howard
                </h3>
                <p className="text-xs text-yellow-700">
                  Grand Canyon, USA
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              I've taken several courses on this website, and each one has been fantastic. The lessons are practical, the projects are engaging, and the community is supportive.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of Darlene Robertson, a man with short hair and light skin"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/15e291f8-3709-4ec1-09c0-752319e9de7d.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  Darlene Robertson
                </h3>
                <p className="text-xs text-yellow-700">
                  Marrakech, Morocco
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              I've been using this site to learn more about music production, and the results have been phenomenal. The courses are detailed and cover everything.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of Kathryn Murphy, a woman with dark hair and medium skin tone"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/66113e66-31f5-41e7-ff48-9ae313915df6.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  Kathryn Murphy
                </h3>
                <p className="text-xs text-yellow-700">
                  Sydney, Australia
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The web development courses offered here are top-notch. The curriculum covers everything from the basics to advanced techniques.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_0_20px_0_rgba(90,125,224,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <img
                alt="Portrait of William Wilson, a man with dark hair and beard"
                className="w-12 h-12 rounded-full object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/5474883a-15ea-411b-c768-7dde6e5c8087.jpg"
                width="48"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  William Wilson
                </h3>
                <p className="text-xs text-yellow-700">
                  Reykjavik, Iceland
                </p>
                <div className="flex  mt-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              I've always loved photography but wanted to take my skills to the next level. This website offers excellent courses that cover from amature to advanced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluate; 