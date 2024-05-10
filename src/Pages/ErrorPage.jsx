import React from 'react';
// import error from '../assets/error3.webp';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div
        className="container flex flex-col items-center justify-center px-5 mx-auto my-8"
        style={{
          backgroundImage: `url('error3.webp')`,
        }}
      >
        <img
          className="w-[800px] h-[400px] border-2 border-slate-300"
          // src={error}
          alt=""
        />
        <div className="max-w-md text-center">
          <Link
            to={'/'}
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold btn bg-orange-400 rounded dark:bg-violet-600 dark:text-gray-50 mb-6"
          >
            Back to homepage
          </Link>
        </div>
      </div>
      {/* <p className="text-2xl font-semibold md:text-3xl">
        Sorry, we couldn't find this page.
      </p>
      <p className="mt-4 mb-8 dark:text-gray-600">
        But dont worry, you can find plenty of other things on our homepage.
      </p> */}
    </section>
  );
};

export default ErrorPage;
