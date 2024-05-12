import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { GrCopy } from 'react-icons/gr';
import { RiUserSearchFill } from 'react-icons/ri';

const HowItWork = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4  py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-5xl ">
        How It Works
      </h1>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 pb-5">
        Expert Hunter featured jobs are shown here, You select the job according
        to your skill. Apply by clicking on & Apply Now If you have not created
        your CV at Expert Hunter, create a CV
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
        <div className="p-5 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 flex flex-col justify-center items-center ">
          <div className="border-2 rounded-full p-2 h-40 w-40 flex justify-center items-center border-[#00C2CB] hover:translate-x-2 hover:scale-110 duration-150">
            <div className=" flex justify-center  items-center w-32 h-32 mx-auto rounded-full bg-[#00C2CB] dark:bg-gray-500 aspect-square">
              <p className="text-6xl text-white">
                <GrCopy />
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl py-3">
                Create Your Resume
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Expert Hunter is currently a Largest job site in Bangladesh,
                here you will find jobs according to your skills. To find the
                job of your choice from Expert Hunter, create a account and add
                Resume.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-2 h-40 w-40 flex justify-center items-center border-[#00C2CB] hover:translate-x-2 hover:scale-110 duration-150">
            <div className=" flex justify-center  items-center w-32 h-32 mx-auto rounded-full bg-[#00C2CB] dark:bg-gray-500 aspect-square">
              <p className="text-6xl text-white">
                <FaPaperPlane />
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl py-3">
                Post Your Jobs
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Expert Hunter is currently a Largest job site in Bangladesh, If
                you want to give your organization's recruitment notice, create
                an account for your organization. We will contact and help you.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 flex flex-col justify-center items-center">
          <div className="border-2 rounded-full p-2 h-40 w-40 flex justify-center items-center border-[#00C2CB] hover:translate-x-2 hover:scale-110 duration-150">
            <div className=" flex justify-center  items-center w-32 h-32 mx-auto rounded-full bg-[#00C2CB] dark:bg-gray-500 aspect-square">
              <p className="text-6xl text-white">
                <RiUserSearchFill />
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl py-3">
                Hire Now
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                You can choose the candidate of your choice from Expert Hunter,
                we have 485 + CV. Where you will get your candidate. Goog
                employee can make a company top of the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
