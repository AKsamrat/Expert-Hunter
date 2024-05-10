import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo1.jpg';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut();
  };
  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
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
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span> All Jobs</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJob"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>My Posted Job</span>
        </NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink
            to="/apliedJob"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>Aplied Job</span>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Add Job</span>
        </NavLink>
        {/* <Link to="/myCart">My Added Product</Link> */}
      </li>
      <li>
        <NavLink
          to="/myJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>My jobs</span>
        </NavLink>
        {/* <Link to="/myCart">My Added Product</Link> */}
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Blogs</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/userProfile"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] border-b-4 border-[#00C2CB]'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>User Profile</span>
        </NavLink>
      </li>
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

          {user ? (
            <div className="  flex items-center  justify-end ml-4">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div title={user?.displayName} className="w-10 rounded-full">
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
              <div className="flex justify-center items-center pl-2">
                <Link
                  to={'/login'}
                  onClick=""
                  className="btn bg-[#00C2CB] text-white"
                >
                  LogIn
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Navbar;
