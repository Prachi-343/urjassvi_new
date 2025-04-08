import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsPlay,
  BsTwitter,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const About = () => {
  const [setCurrentSlide] = useState(0);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [latestBlogs, setLatestBlogs] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);
      setLatestBlogs(blogList);
    };

    fetchLatestBlogs();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .slice(0, 3); // Limit to 3 reviews
      setReviews(reviewsList);
    };

    fetchReviews();
  }, []);

  return (
    <section className="">
      <BreadCrumb title="About Us" home={""} />

      {/* about content */}
      <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* image */}
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/about-thumb.png"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* text */}
            <div
              className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-medium"> 
                About Astrology
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                kNOW ABOUT ASTROLOGY
              </h1>
              <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Astrology is an ancient practice that studies the influence of celestial bodies on human life. It is based on the belief that the positions and movements of the planets, stars, and moon impact personality traits, relationships, and future events
              </p>

              <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px] mt-5">
                By analyzing birth charts, zodiac signs, and planetary alignments, astrology provides insights into various aspects of life, including career, love, and personal growth. Whether used for self-discovery or guidance, astrology serves as a tool to understand the deeper connections between the cosmos and human experiences.
              </p>

              <div className="bg-whiteSmoke dark:bg-lightBlack px-[30px] py-5">
                <p className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora ">
                14, Shree Sankeshwar Building, above Jay Maharashtra Chana Bhandar, beside Prakash Hardware, Tilak Nagar, Dombivli East, 
                </p>
                <p className="text-sm sm:text-base leading-10  text-lightBlack dark:text-white font-medium font-Lora ">
                Dombivli, Maharashtra 421201
                </p>
              </div>
              <Link to="/appointment">
              <button  className="btn-primary mt-[30px]">MORE ABOUT</button>
              </Link>
            </div>

            {/* text */}
          </div>
        </div>
      </section>
    
      {/* next --> */}


      {/* Clients Feedback */}
      <section className="bg-[#f8f6f3] dark:bg-lightBlack py-20 lg:py-[120px]">
        <div className="Container  ">
          {/* Section heading */}
          <div
            className="flex items-start justify-between relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="space-y-3 md:w-[450px] xl:w-[550px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                FEEDBACK
              </h5>
              <h1 className="text-[22px] sm:text-3xl 2xl:text-[38px] leading-6 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold uppercase">
                clients feedback about services
              </h1>
            </div>
            <div className="hidden sm:flex items-center lg:space-x-5  space-x-3 ">
              <button className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group">
                <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
              </button>
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
             hover:border-none group"
              >
                <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
              </button>
            </div>
          </div>
          <hr className="w-full h-[2px] text-[#e8e8e8] dark:text-[#383838]  mt-10 " />

          {/* Clients Feedback  */}
          <div
            className="relative"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-normalBlack group-hover:bg-khaki dark:hover:bg-khaki transition-all ease-in-out duration-500 p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-white before:group-hover:bg-khaki dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]"
                >
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray group-hover:text-white font-normal mt-7">
                    {review.review}
                  </p>
                  <div className="flex items-center mt-10 lg:mt-[51px]">
                    <div className="ml-5 md:ml-6">
                      <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond">
                        {review.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog */}
      <div className="dark:bg-normalBlack">
        <section className="Container py-20 lg:py-[120px]">
          {/* Section Header */}
          <div
            className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4  ">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-4/section-sahpe.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white  font-Garamond font-semibold uppercase mb-[8px]">
              LATEST POST FROM BLOG
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
            Dive into the cosmic world of astrology with Urjassvi. Discover insights about celestial influences, vastu tips, and astrological guidance to enrich your life.
            </p>
          </div>
          {/* All blogs are here */}
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src={blog.imageURL}
                      className="w-full h-full object-cover"
                      alt={blog.title}
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px]">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          {blog.title}
                        </p>
                      </div>
                      <Link to={`/blog`}>
                        <h2 className="text-xl sm:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          {blog.content}
                        </h2>
                      </Link>
                    </div>
                    <div className="border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-2 lg:py-3">
                      <div className="px-[30px] flex items-center justify-between">
                        {/* Additional blog details can go here */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
