import React, { useState } from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllJobs = () => {
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const axiosSecure = useAxiosSecure();
  const [itemperPage, setItemperPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);

  const {
    data: jobs = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/allJobs?page=${currentPage}&size=${itemperPage}&search=${search}`
      );
      // console.log(data);
      // refetch();
      toast.success('All Jobs data loading');
      return data;
    },
    queryKey: ['jobs', search, currentPage, itemperPage],
  });
  const handleSearch = e => {
    e.preventDefault();

    setSearch(searchText);
    refetch();
    // mutateAsync(search);
  };
  const handleReset = () => {
    setSearch('');
    setSearchText('');
  };
  // console.log(jobs);

  //for pagination------

  const numberOfpages = Math.ceil(count / itemperPage);
  //   console.log(numberOfpages);
  //   const pages = [];
  const pages = [...Array(numberOfpages).keys()];

  const handleItemsPerPage = e => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemperPage(val);
    setCurrentPage(0);
  };

  const { data: ejob = [] } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure('/jobsCount');
      console.log(data);
      // refetch();
      setCount(data.count);

      return data;
    },
    queryKey: ['jobs', search],
  });

  const handlePreviouspage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextpage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-16">
      <p className="text-3xl font-bold text-[#00C2CB] text-center pb-2">
        ALL JOBS
      </p>
      <p className="text-center pb-8">
        Please Find your Prefarable and suitable job Here also try to apply{' '}
      </p>
      <div className="flex justify-center items-center gap-4 my-6">
        <form onSubmit={handleSearch}>
          <div className=" p-1 overflow-hidden      focus-within:border-blue-400 ">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent border rounded-lg"
              type="text"
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button
              type="submit"
              className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#00C2CB] rounded-md hover:bg-gray-600 focus:bg-[#3facb2] focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
        <button onClick={handleReset} className="btn bg-[#00C2CB] text-white">
          Reset
        </button>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr className="*:text-lg lg:*:text-xl">
            <th>Job Title</th>
            <th>Job Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary Range</th>
          </tr>
        </thead>
        <tbody>
          {jobs?.map(job => (
            <tr key={job._id} className="hover">
              <td>{job?.job_title}</td>
              <td>{new Date(job?.posting_date).toLocaleDateString()}</td>
              <td>{new Date(job?.deadline).toLocaleDateString()}</td>
              <td>
                $ {job?.min_salary}-{job?.max_salary}
              </td>
              <td>
                <Link
                  className="flex justify-between items-center"
                  to={`/jobDetails/${job?._id}`}
                  state={job?.job_title}
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

      {/* pagination */}

      <div className="pagination ">
        <button onClick={handlePreviouspage}>Prev</button>
        {pages.map(p => (
          <button
            key={p}
            onClick={() => setCurrentPage(p)}
            className={`hidden ${
              currentPage === p ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {p}
          </button>
        ))}
        {/* {pages?.map(page => (
          <button
            className="btn btn-primary mx-1"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))} */}
        <button onClick={handleNextpage}>Next</button>
        {/* {pages?.map(page => (
          <button
            className="btn btn-primary mx-1"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))} */}
        <select value={itemperPage} onChange={handleItemsPerPage} name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default AllJobs;
