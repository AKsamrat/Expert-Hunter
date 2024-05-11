import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../Hook/useAxiosSecure';
import useAuth from '../Hook/useAuth';
import { toast } from 'react-toastify';

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async applicantData => {
      const { data } = await axiosSecure.post('/applyJob', applicantData);
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success('Job applied Successfully');

      queryClient.invalidateQueries({ queryKey: ['job'] });
    },
  });
  const {
    data: jobs = [],
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(`/job/${id}`);
      // console.log(data);
      return data;
    },
    queryKey: ['jobs', user?.email],
  });

  const handleSubmit = async e => {
    if (user?.email === jobs?.owner_email)
      return alert.error('Action Not permited');
    e.preventDefault();
    const form = e.target;
    const jobId = jobs?._id;
    const applicant_name = user?.displayName;
    const applicant_email = user?.email;
    const comment = form.comment.value;
    const salary = form.salary.value;
    const resume = form.resume.value;
    const title = jobs?.job_title;
    const category = jobs?.category;
    const applicantData = {
      jobId,
      title,
      applicant_name,
      applicant_email,
      salary,
      comment,
      resume,
      category,
    };
    // console.table();
    const todayDate = Date.now();
    const deadline = new Date(jobs?.deadline).toLocaleDateString();
    const lastdate = Date.parse(deadline);
    console.log(todayDate);
    console.log(lastdate);
    if (lastdate < todayDate) return alert('deadline is over');
    await mutateAsync(applicantData);
    form.reset();
  };

  if (isError) return alert.error(error.message);
  return (
    <div className="my-14 max-w-7xl mx-auto mt-5 px-4 ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="rounded-2xl object-cover   h-[350px] ">
            <img className="h-[60vh]" src={jobs?.image} alt="" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 ">
                Deadline: {new Date(jobs?.deadline).toLocaleDateString()}
              </span>
              <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
                {jobs?.category}
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
                {jobs?.job_title}
              </h1>

              <p className="mt-2 text-lg text-gray-600 ">{jobs?.description}</p>
              <p className="mt-6 text-sm font-bold text-gray-600 ">
                Owner Details:
              </p>
              <div className="flex justify-between gap-5">
                <div>
                  <p className="mt-2 text-sm  text-gray-600 ">
                    Name: {jobs?.name}
                  </p>
                  <p className="mt-2 text-sm  text-gray-600 ">
                    Email: {jobs?.owner_email}
                  </p>
                </div>
                <p>Number Of Applicant : {jobs?.applicant_no}</p>
              </div>
              <p className="mt-6 text-lg font-bold text-gray-600 ">
                Salary Range: ${jobs?.min_salary} - ${jobs?.max_salary}
              </p>
            </div>
          </div>
        </div>

        {/* modal section  */}

        <div className="flex justify-center mt-6">
          <div>
            <button
              onClick={() => document.getElementById('my_modal_4').showModal()}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#00C2CB] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Apply
            </button>
          </div>
          <dialog id="my_modal_4" className="modal modal-middle  ">
            <div className="modal-box w-7/12 max-w-5xl">
              <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
                <h2 className="text-3xl font-bold text-[#00C2CB] capitalize text-center pb-5 ">
                  APPLY HERE
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700 " htmlFor="emailAddress">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        disabled
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 " htmlFor="emailAddress">
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        name="email"
                        disabled
                        defaultValue={user?.email}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 " htmlFor="price">
                        Aspected Salary
                      </label>
                      <input
                        id="price"
                        type="text"
                        name="salary"
                        required
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 " htmlFor="emailAddress">
                        Place your Resume Url
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="resume"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-gray-700 " htmlFor="comment">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        type="text"
                        cols={30}
                        className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#00C2CB] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </section>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
