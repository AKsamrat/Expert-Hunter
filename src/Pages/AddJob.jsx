import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [postingDate, setPostingDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const { mutateAsync } = useMutation({
    mutationFn: async jobData => {
      const { data } = await axiosSecure.post('/addJob', jobData);
      return data;
    },
    onSuccess: () => {
      toast.success('Job Added Successfully');

      queryClient.invalidateQueries({ queryKey: ['job'] });
    },
  });

  const handleFormSubmission = async e => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const image = form.job_image.value;
    const owner_email = user?.email;
    const deadline = startDate;
    const category = form.category.value;
    const min_salary = form.min_salary.value;
    const max_salary = form.max_salary.value;
    const applicant_no = form.applicant.value;
    const posting_date = startDate;
    const description = form.description.value;

    const jobData = {
      job_title,
      image,
      name: user?.displayName,
      deadline,
      category,
      min_salary,
      max_salary,
      applicant_no: 0,
      posting_date,
      description,
      owner_email,
    };
    console.table(jobData);
    await mutateAsync(jobData);
    navigate('/myPostedJobs');
  };

  return (
    <div className="max-w-5xl mx-auto mt-5 px-4  min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-3xl font-bold  capitalize text-center text-[#00C2CB] pb-5 ">
          Post a Job
        </h2>

        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Image
              </label>
              <input
                id="job_image"
                name="job_image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Min Salary
              </label>
              <input
                id="salary"
                name="min_salary"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Max Salary
              </label>
              <input
                id="salary"
                name="max_salary"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Applicant Number
              </label>
              <input
                id="applicant"
                name="applicant"
                type="number"
                defaultValue={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Posting date</label>

              <DatePicker
                className="border p-2 rounded-md"
                disabled
                selected={postingDate}
                onChange={date => setPostingDate(date)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white  bg-[#00C2CB] rounded-md hover:bg-[#57dce3] focus:outline-none "
            >
              ADD JOB
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
