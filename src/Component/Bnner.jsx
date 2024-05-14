import { Link } from 'react-router-dom';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from '../assets/bann1.png';
import img2 from '../assets/bann2.jpg';
import img3 from '../assets/bann6.webp';
import { useState } from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import JobCard from './JobCard';

const Bnner = () => {
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  // if (!search) {
  //   return;
  // }
  const {
    data: datas = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(`/allJobs?search=${search}`);
      console.log(data);
      setJobs(data);
      // refetch();
      return data;
    },
    queryKey: ['jobs', search],
  });
  const handleSearch = e => {
    e.preventDefault();

    setSearch(searchText);
    refetch();
    e.target.reset();
    // mutateAsync(search);
  };
  // setJobs('');

  return (
    <div className="max-w-7xl mx-auto mt-5 px-4">
      <div className=" relative">
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[550px]">
              <img src={img1} className="w-full rounded-xl" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Searching for a job ?<br /> Find the{' '}
                    <span className="text-[#00C2CB]">best Startup</span> <br />{' '}
                    Job that fit you
                  </h2>
                  <p>
                    Expert hunter is your one-stop-center for Thousand of
                    digital <br /> Fulltime and Freelancer jobs
                  </p>
                  <div>
                    <Link
                      to={'/allJobs'}
                      className="btn  mr-5 bg-[#0f0e0e5d] border-[#00C2CB] px-12 text-white font-semibold text-lg"
                    >
                      All Jobs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[550px]">
              <img src={img2} className="w-full rounded-xl" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Your dream job <br /> is Waiting{' '}
                    <span className="text-[#00C2CB]">Grape This</span> <br />{' '}
                    And Change your life
                  </h2>
                  <p>
                    Find your more startup job with your excellence <br /> All
                    category job are here
                  </p>
                  <div>
                    <Link
                      to={'/allJobs'}
                      className="btn  mr-5 bg-[#0f0e0e5d] border-[#00C2CB] px-12 text-white font-semibold text-lg"
                    >
                      All Jobs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[550px]">
              <img src={img3} className="w-full rounded-xl" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Discover your perfect <br /> Matching{' '}
                    <span className="text-[#00C2CB]">Your Interest</span> <br />{' '}
                    And Skill
                  </h2>
                  <p>
                    We will help you find exciting job opportunity <br /> From
                    first-growing startup over the continent
                  </p>
                  <div>
                    <Link
                      to={'/allJobs'}
                      className="btn  mr-5 bg-[#0f0e0e5d] border-[#00C2CB] px-12 text-white font-semibold text-lg"
                    >
                      All Jobs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="carousel w-full h-[600px]  object-fill mt-7">
      </div> */}
        <form onSubmit={handleSearch}>
          <div className=" p-1 overflow-hidden  z-10    focus-within:border-blue-400 absolute -translate-y-44 left-72 hidden md:flex">
            <input
              className="px-2 w-72 py-4 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent border-[#00C2CB] rounded-l-lg border-2"
              type="text"
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button
              type="submit"
              className="px-1 md:px-6 py-5 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#00C2CB] rounded-r-lg  hover:bg-gray-600 focus:bg-[#3facb2] focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className={` ${searchText ? 'flex' : 'hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-9">
          {jobs?.map(job => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bnner;
