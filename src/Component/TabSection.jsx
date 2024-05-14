import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TabSection = () => {
  const axiosSecure = useAxiosSecure();

  const [cardNumber, setCardNumber] = useState(6);
  // console.log(cardNumber);
  const handleShowLess = () => {
    setCardNumber(6);
  };
  const handleShowAll = () => {
    setCardNumber(jobs.length);
  };

  const {
    data: jobs = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure('/allJob');
      console.log(data);
      toast.success('Tab section data loading');
      // refetch();
      return data;
    },
    queryKey: ['jobs'],
  });
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4 ">
      <Tabs>
        <div className=" container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white capitalize lg:text-4xl ">
            Find Your Jobs <span className="text-[#00C2CB]">Categories</span>
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
            We will help you find exciting job opportunity <br /> From
            first-growing startup over the continent . So Find your more startup
            job with your excellence
          </p>

          <div className="*:font-bold lg:text-xl capitalize ">
            <TabList>
              <Tab>All Job</Tab>
              <Tab>On Site</Tab>
              <Tab>Remote</Tab>
              <Tab>Part-Time</Tab>
              <Tab>Hybrid</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
              {jobs?.length > ` ${cardNumber}`
                ? jobs
                    ?.slice(0, 6)
                    .map(job => <JobCard key={job._id} job={job} />)
                : jobs.map(job => <JobCard key={job._id} job={job} />)}
            </div>

            {` ${cardNumber}` < 7 ? (
              <div
                onClick={handleShowAll}
                className="mt-10 flex justify-center"
              >
                <button className="text-white bg-[#00C2CB] border-0 py-2 px-6 focus:outline-none hover:bg-[#50d7de] rounded font-semibold duration-200">
                  <FaAngleDoubleDown />
                </button>
              </div>
            ) : (
              <div
                onClick={handleShowLess}
                className="mt-10 flex justify-center"
              >
                <button className="text-white bg-[#00C2CB] border-0 py-2 px-6 focus:outline-none hover:bg-[#52d9e0] rounded font-semibold duration-200">
                  <FaAngleDoubleUp />
                </button>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
              {jobs
                .filter(catJob => catJob.category === 'On Site')
                .map(job => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
              {jobs
                .filter(catJob => catJob.category === 'Remote')
                .map(job => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
              {jobs
                .filter(catJob => catJob.category === 'Part Time')
                .map(job => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
              {jobs
                .filter(catJob => catJob.category === 'Hybrid')
                .map(job => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabSection;
