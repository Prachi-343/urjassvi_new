import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <div>
      <BreadCrumb title="Blog" />
      <div className="dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            <div className="grid items-center gap-5 2xl:gap-y-[30px] grid-cols-1 lg:grid-cols-2">
              {/* Blog One */}
              <div
                className="overflow-hidden 3xl:w-[410px] group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="relative">
                  <img
                    src="/images/home-1/blog-1.jpg "
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6 ">
                      <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        August 10, 2023
                      </p>
                      <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        title
                      </p>
                    </div>
                      <h2 className="text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                        How to Book a Room online Step by Step Guide
                      </h2>
                  </div>

                  <div className="  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5">
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Mr. name
                          </span>
                        </span>
                      </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
