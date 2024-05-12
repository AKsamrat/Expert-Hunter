import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    applicant_no,
    name,
    min_salary,
    max_salary,

    posting_date,
    category,
    deadline,
  } = job || {};
  return (
    <div className="border border-[#00c1cb9b] rounded-xl p-5 shadow-2xl hover:translate-x-2 hover:scale-110 duration-150">
      <p className="text-2xl font-bold pb-3">{job_title}</p>
      <p className="capitalize pb-2">Owner: {name}</p>
      <div className="flex justify-between items-center pb-3 border-b-2 ">
        <p className="text-md bg-[#FFE4E6]  rounded-xl px-2 text-[#FF757B] flex justify-center items-center gap-3">
          <IoBriefcaseOutline />
          {category}
        </p>
        <div className="flex justify-center gap-4 items-center">
          <p className="text-xl text-[#00C2CB]">
            <MdOutlineWatchLater />
          </p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()} </p>
        </div>
      </div>
      <p className="text-xl font-semibold py-3">
        Salary Range:{' '}
        <span className="text-2xl text-orange-500">
          {' '}
          ${min_salary} - ${max_salary}
        </span>
      </p>
      <p className="flex justify-start items-center gap-2">
        Applicant Number :{applicant_no}{' '}
        <span className="text-[#00C2CB]">
          <FaUserTie />
        </span>
      </p>
      <Link className="flex justify-end items-center" to={`/jobDetails/${_id}`}>
        <button
          // data-aos="fade-right"
          // data-aos-duration="1000"
          type="button"
          className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#00C2CB] text-white mt-4 flex items-center gap-2"
        >
          <span className="text-lg">
            <FcViewDetails />
          </span>{' '}
          Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
