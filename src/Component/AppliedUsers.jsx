import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AppliedUsers = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const { data: appliedUser = [] } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(`/appliedUsers/${id}`);
      console.log(data);
      // refetch();

      return data;
    },
    queryKey: ['appliedUser', id],
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3 my-5 text-center bg-green-300">
        Applied Applicant
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="*:text-lg lg:*:text-xl">
            <th>Applicant Name</th>
            <th>Applicant Email</th>
            <th>Expected Salary</th>
            <th>Comment</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {appliedUser?.map(job => (
            <tr key={job._id} className="hover">
              <td>{job?.applicant_name}</td>
              <td>{job?.applicant_email}</td>
              <td>{job?.salary}</td>
              <td>{job?.comment}</td>
              <td>
                {/* <Link className=" bg-green-300 px-3 py-1 rounded-xl">
                  {' '}
                  {job?.resume}
                </Link> */}
                <a
                  href={job?.resume}
                  target="_blank"
                  className=" bg-green-300 px-3 py-1 rounded-xl"
                >
                  View Resume
                </a>
                {/* {job?.resume} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedUsers;
