import React from 'react';
import { FaStar } from 'react-icons/fa';
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        <section className="flex flex-col max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Master
            <span className="text-blue-600">
              {' '}Creative Skills
            </span>
            <span className="inline-block align-top text-blue-400 text-2xl ml-1">
              ✦
            </span>
            <br />
            and Launch Your
            <br />
            Career Now!!
            <span className="inline-block align-top text-blue-600 text-3xl -mt-3 ml-1">
              ➶
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-md">
            Unlock your potential. Discover a world of knowledge.Start your journey today. Empower your future with over 100+ courses to choose from.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm sm:text-base font-semibold flex items-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              Learn More
              <i className="fas fa-arrow-up-right"></i>
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                alt="Portrait of a young man with short hair smiling"
                className="w-10 h-10 rounded-full border-2 border-white"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/9300fa97-32f3-4008-8d08-1b837c67780d.jpg"
                width="40"
              />
              <img
                alt="Portrait of a young man with glasses smiling"
                className="w-10 h-10 rounded-full border-2 border-white"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/887c8358-6648-4c7c-4348-0e1c7a19c3c8.jpg"
                width="40"
              />
              <img
                alt="Portrait of a young woman with curly hair smiling"
                className="w-10 h-10 rounded-full border-2 border-white"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/e59d66fa-7d89-4ffd-7cad-0b69f76b6862.jpg"
                width="40"
              />
            </div>
            <p className="text-gray-700 text-sm sm:text-base font-medium">
              Trusted by 100k+ students
              <span className="flex items-center ml-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </span>
              <span className="text-gray-500 ml-2 font-normal">
                4.5/5 (25k reviews)
              </span>
            </p>
          </div>
        </section>
        <section className="relative w-full max-w-lg">
          <img
            alt="Smiling young man with brown hair wearing a gray sweatshirt sitting at a desk with a laptop in a modern office with shelves and plants in the background"
            className="rounded-3xl w-full h-auto object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/719f9e0f-2bcd-4c4e-6508-c5354d4b0d3f.jpg"
            width="600"
          />

        </section>
      </main>
    </div>
  );
};

export default AboutUs; 