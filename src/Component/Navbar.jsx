import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo1.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import { MdLockOutline } from 'react-icons/md';

const Navbar = ({ setDarkMode, darkMode }) => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheam] = useState(localStorage.getItem('theme') || 'light');
  const handleSignout = () => {
    logOut();
  };
  const handleToogle = e => {
    if (e.target.checked) {
      setTheam('dark');
      setDarkMode(!darkMode);
    } else {
      setTheam('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);
  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span> All Jobs</span>
        </NavLink>
      </li>

      {user?.email && (
        <li>
          <NavLink
            to="/appliedJob"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>Aplied Job</span>
          </NavLink>
        </li>
      )}
      {user?.email && (
        <li>
          <NavLink
            to="/addJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>Add Job</span>
          </NavLink>
        </li>
      )}
      {user?.email && (
        <li>
          <NavLink
            to="/myPostedJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>My jobs</span>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Blogs</span>
        </NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink
            to="/userProfile"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB]  bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>User Profile</span>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-5 px-4 ">
        <header className="bg-white shadow-lg  flex justify-between items-center w-full dark:bg-[#120505]  ">
          <div>
            {/* <div className="dropdown z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Navitems}
              </ul>
            </div> */}
            <Link
              to="/"
              className=" flex flex-shrink-0 items-center gap-2  md:w-[180px] w-[150px] "
            >
              <img
                className=" md:w-[280px] w-full lg:h-[65px] h-[60px]  "
                src={logo}
                alt=""
              />
            </Link>
          </div>
          {/* middle */}
          <ul className="flex justify-center items-center gap-6 hidden lg:flex">
            {Navitems}
          </ul>
          {/* End */}
          <div className="flex justify-center items-center gap-3">
            <div className=" w-[50px]">
              <label className="cursor-pointer grid place-items-center">
                <input
                  onChange={handleToogle}
                  type="checkbox"
                  // value="synthwave"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
            {user ? (
              <div className="  flex items-center  justify-end ml-4">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {/* <li>
                    <p className="text-green-600 font-bold">
                      {user?.displayName}
                    </p>
                  </li> */}
                    {Navitems}
                    <li>
                      <Link
                        className=" text-[#FF3811] font-bold "
                        onClick={handleSignout}
                      >
                        SignOut
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="  w-full md:w-auto   ">
                <div className="flex justify-center items-center pl-2 ">
                  <Link
                    to={'/login'}
                    onClick=""
                    className="btn bg-[#00C2CB] text-white flex justify-center items-center gap-2 text-xl"
                  >
                    <MdLockOutline />
                    LogIn
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
