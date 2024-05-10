import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllJobs = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: jobs = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure('/allJobs');
      // console.log(data);
      return data;
    },
    queryKey: ['jobs'],
  });
  // console.log(jobs);
  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary Range</th>
          </tr>
        </thead>
        <tbody>
          {jobs?.map(job => (
            <tr key={job._id} className="hover">
              <th>{job?.job_title}</th>
              <td>{new Date(job?.posting_date).toLocaleDateString()}</td>
              <td>{new Date(job?.deadline).toLocaleDateString()}</td>
              <td>
                {job?.min_salary}-{job?.max_salary}
              </td>
              <td>
                <Link
                  className="flex justify-between items-center"
                  to={`/jobDetails/${job?._id}`}
                >
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    type="button"
                    className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#00C2CB] text-white mt-4 "
                  >
                    {' '}
                    View Details
                    {/* <FaPencilAlt /> */}
                  </button>
                  {/* <p>{area}sft</p> */}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobs;
