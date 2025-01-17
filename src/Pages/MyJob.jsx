import React from 'react';
import useAuth from '../Hook/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyJob = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: jobs = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(`/myJobs/${user?.email}`);
      console.log(data);

      toast.success('My jobs data loading');
      return data;
    },
    queryKey: ['jobs', user],
  });
  console.log(jobs);

  if (!error) {
    toast.success('Data loaded Succesfully');
  } else {
    toast.error('Loading failed');
  }

  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/deleteJob/${id}`);
      if (data.deletedCount > 0) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your Craft has been deleted.',
          icon: 'success',
        });
      }
      console.log(data);
      refetch();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job'] });
    },
  });

  const handleDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        mutateAsync(id);
      }
    });
  };

  if (isLoading) return <p>Your data is loading.......</p>;

  return (
    <div className="max-w-7xl mx-auto my-16 ">
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="text-lg font-bold">
              <th>Job title</th>
              <td>Image</td>
              <td>Owner</td>
              <td>Email</td>
              <td>Category</td>
              <td>Salary Range</td>
              <td>Description</td>
              <td>Posting </td>
              <th>Deadline</th>
              <th>Applicant</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map(job => (
              <tr key={job?._id}>
                <td>{job?.job_title}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={job?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{job?.name}</td>
                <td>{job?.owner_email}</td>
                <td>{job?.category}</td>
                <td>
                  {job?.min_salary}-{job?.max_salary}
                </td>
                <td>{job?.description}</td>
                <td>{new Date(job?.posting_date).toLocaleDateString()} </td>
                <th>{new Date(job?.deadline).toLocaleDateString()}</th>
                <td>
                  {user?.email === job?.owner_email ? (
                    <Link
                      to={`/jobDetails/${job?._id}`}
                      className=" bg-green-300 px-3 py-1 rounded-xl"
                    >
                      {job?.applicant_no}
                    </Link>
                  ) : (
                    <p>{job?.applicant_no}</p>
                  )}
                </td>
                <td>
                  <div className="flex justify-between items-center">
                    <Link
                      className="flex justify-between items-center"
                      to={`/jobUpdate/${job?._id}`}
                      state={job?.job_title}
                    >
                      <button
                        // data-aos="fade-right"
                        // data-aos-duration="1000"
                        type="button"
                        className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#00C2CB] text-white mt-4 "
                      >
                        {' '}
                        <FaPencilAlt />
                      </button>
                    </Link>
                    <Link
                      className="flex justify-between items-center"
                      onClick={() => handleDelete(job?._id)}
                    >
                      <button
                        // data-aos="fade-right"
                        // data-aos-duration="1000"
                        type="button"
                        className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#00C2CB] text-white mt-4 "
                      >
                        {' '}
                        <RiDeleteBin6Line />
                      </button>
                      {/* <p>{area}sft</p> */}
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`${jobs.length === 0 ? 'flex' : 'hidden'}`}>
        <p className="text-gray-300 font-bold text-4xl mt-20 text-center">
          You have not add data yet ....
        </p>
      </div>
    </div>
  );
};

export default MyJob;
