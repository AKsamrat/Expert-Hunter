import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// export const MyComponent = ({ isVisible }) => (
//   <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
// );

const FeatureCompany = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4 my-20">
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-5xl ">
          Featured Company opinion
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Expert Hunter Registered Company are Shown here
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <motion.div
          initial={{ backgroundColor: 'white' }}
          whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'lightcyan' }}
        >
          <div className="h-[450px]">
            <div className="flex flex-col  mx-4 my-6 shadow-lg h-fit">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Glassdoor offers a unique perspective on job hunting by
                  providing company reviews and salary information alongside job
                  listings. This transparency helps me gauge the company culture
                  and compensation package before .
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  Maria vacel
                </p>
                <p className="text-sm uppercase">Glassdoor</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ backgroundColor: 'white' }}
          whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'lightcyan' }}
        >
          <div className="h-[450px]">
            <div className="flex flex-col  mx-4 my-6 shadow-lg h-fit">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  LinkedIn Jobs is an excellent platform for professionals
                  seeking career advancement. The integration with LinkedIn
                  profiles provides valuable insights into companies and
                  connections within my network.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?2"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Linkdin</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ backgroundColor: 'white' }}
          whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'lightcyan' }}
        >
          <div className="h-[450px] ">
            <div className="flex flex-col  mx-4 my-6 shadow-lg h-fit">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Indeed is my go-to job search platform. Its vast database
                  aggregates job postings from various sources, making it
                  convenient to find opportunities in one place.. The search
                  filters are robust, allowing me to narrow down
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?3"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
                />
                <p className="text-xl font-semibold leading-tight">Lary con</p>
                <p className="text-sm uppercase">Indeed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCompany;
