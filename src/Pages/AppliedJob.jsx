import React, { useState } from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../Hook/useAuth';

const AppliedJob = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState('');
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    data: jobs = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/appliedJobs/${user?.email}?filter=${filter}`
      );
      console.log(data);
      // refetch();
      return data;
    },
    queryKey: ['jobs', filter],
  });
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4">
      <div className="flex justify-center items-center">
        <select
          onChange={e => {
            setFilter(e.target.value);
          }}
          value={filter}
          name="category"
          id="category"
          className="border p-4 rounded-lg border-[#00C2CB]"
        >
          <option value="" className="font-semibold">
            Filter By Category
          </option>
          <option value="On Site">On Site</option>
          <option value="Remote">Remote</option>
          <option value="part Time">Part-Time</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-center text-[#00C2CB] py-8">
          APPLIED JOBS
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left text-lg font-semibold ">
                <th className="p-3">Job Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Expected Salary</th>
                <th className="p-3">Name</th>
                <th className="p-3 ">Email</th>
                <th className="p-3">Resume</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map(job => (
                <tr
                  key={job._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{job.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{job.category}</p>
                  </td>
                  <td className="p-3">
                    <p>${job.salary}.00</p>
                  </td>
                  <td className="p-3">
                    <p>{job.applicant_name}</p>
                  </td>
                  <td className="p-3 text-left">
                    <p>{job.applicant_email}</p>
                  </td>
                  <td className="p-3 text-left">
                    <p>{job.resume}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
