import { BsCalendar4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <section className="bg-[#ededed] dark:bg-normalBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section title */}
        <div className="text-center px-5">
          <p className="text-base leading-7 md:leading-10 lg:leading-[40px]  text-khaki font-normal font-Lora">
          Daily Routines
          </p>
          <h3
            className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-5 md:leading-7 lg:leading-10  2xl:leading-[45px]
           font-medium font-Garamond"
          >
            Today Available At Office
          </h3>
        </div>

        {/* Section content */}
        <div className="mt-14 2xl:mt-[60px]">
          <div className="grid grid-cols-6 2xl:grid-rows-4 2xl:grid-flow-col gap-6 3xl:gap-[30px]">
            {/* card - 1 */}
            <div
              className=" bg-white dark:bg-lightBlack  h-full col-span-6 md:col-span-3 2xl:row-span-4 2xl:col-start-1 2xl:col-end-4 group overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-all duration-300"
                  src="/images/home-4/blog-1.jpg"
                  alt=""
                />
              </div>
              <div className="px-3 sm:px-7 py-5 md:mt-1 lg:pb-7 2xl:pb-5 ">
                <Link to="/contact">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300 2xl:pr-[100px]">
                  Baby Names by Nakshatra
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-2 lg:pt-[10px] pb-5 lg:pb-[27px]">
                Discover meaningful baby names inspired by Nakshatra, the lunar constellations in Vedic astrology. Each Nakshatra reflects unique traits and characteristics, guiding you to choose a name that aligns with your child’s destiny. 
                </p>
                <Link to={"/contact"}>
                  <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px]  lg:before:top-[3.2rem] 2xl:before:top-[3.5rem] ">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* card - 2 */}

            <div
              className=" 2xl:flex items-center bg-white dark:bg-lightBlack col-span-6 md:col-span-3 2xl:row-span-2 2xl:col-start-4 2xl:col-end-7 group overflow-hidden 2xl:w-[645px]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  className="object-cover w-full h-[200px] sm:h-[350px] md:h-[234px] lg:h-[316px] xl:h-[375px] 2xl:h-full md:rounded-none group-hover:scale-105  transition-all duration-300 2xl:w-[310px]"
                  src="/images/home-4/blog-2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-between px-3 sm:px-7 py-5 md:py-[30px] 2xl:py-2 2xl:w-[346px] ">
                <Link to="/contact">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                  Birth journal (kundli)
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-3 pb-5 2xl:pb-[27px]">
                Explore the daily planetary overview and uncover how celestial movements influence your life. A Birth Journal (Kundli) provides insights into your personality, relationships, and future by analyzing the planetary positions at the time of your birth.
                </p>
                <Link to={"/contact"}>
                  <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px]  lg:before:top-[3.2rem] 2xl:before:top-[3.5rem] ">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>

            {/* card - 3 */}
            <div
              className=" 2xl:flex items-center bg-white dark:bg-lightBlack col-span-6 md:col-span-3 2xl:row-span-2 2xl:col-start-4 2xl:col-end-7 group overflow-hidden 2xl:w-[645px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="overflow-hidden">
                <img
                  className="object-cover w-full h-[200px] sm:h-[350px] md:h-[234px] lg:h-[316px] xl:h-[375px] 2xl:h-full md:rounded-none group-hover:scale-105  transition-all duration-300 2xl:w-[310px]"
                  src="/images/home-4/blog-3.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between px-3 sm:px-7 py-5 md:py-[30px] 2xl:py-2 2xl:w-[346px] ">
                <Link to="/contact">
                  <h5 className="text-[22px] 2xl:text-3xl mt-3 leading-6  md:leading-7 2xl:leading-[38px] text-lightBlack dark:text-white font-medium font-Garamond hover:text-khaki dark:hover:text-khaki transition-all duration-300">
                  Vastu Shastra
                  </h5>
                </Link>
                <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-3 pb-5 2xl:pb-[27px]">
                Discover the ancient science of Vastu Shastra, designed to harmonize your living and working spaces with cosmic energies. By aligning your environment with natural elements, Vastu Shastra promotes health, prosperity, and well-being. 
                </p>
                <Link to={"/contact"}>
                  <button className="btn-primary mb-2 sm:h-[42px] 2xl:h-[49px]  lg:before:top-[3.2rem] 2xl:before:top-[3.5rem] ">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
