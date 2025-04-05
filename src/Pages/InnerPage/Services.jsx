import { HiArrowLongRight } from "react-icons/hi2";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="">
      <BreadCrumb title="services" />

      {/* service page content */}
      <div className="dark:bg-mediumBlack ">
        <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
          {/* section title and button */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" md:w-[450px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
                FACILITIES
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
                ENJOY COMPLETE & BEST QUALITY FACILITIES
              </h1>
            </div>
            <div className="mt-5 md:mt-0">
              <Link to="/room">
                <button className="btn-items">view more item</button>
              </Link>
            </div>
          </div>
          {/* facilities container */}
          <div className="">
            {/* facilities section -1  */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/home-1/facilities-thumb-1.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    01
                  </h2>
                </div>
              </div>
              <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#">Birth Journal</Link>
                </h1>
                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Unlock the mysteries of your life with a personalized Birth Journal, crafted using your unique astrological chart. This journal delves deep into the cosmic influences that shape your personality, relationships, and life path. By analyzing planetary positions at the time of your birth, it provides profound insights into your strengths, challenges, and opportunities. Discover how celestial alignments influence your career, love life, and personal growth. The Birth Journal serves as a guide to understanding your true potential and navigating life’s complexities. It offers clarity on your purpose and helps you make informed decisions aligned with your destiny.  
                </p>
                <Link to="#">
                  <HiArrowLongRight
                    size={30}
                    className="text-gray hover:text-khaki"
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 2 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#"> Vastu Shastra</Link>
                </h1>

                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Enhance harmony and prosperity in your life with expert Vastu Shastra guidance. This ancient Indian science focuses on balancing energies within your living and working spaces to promote well-being and success. By analyzing the layout, orientation, and design of your environment, Vastu Shastra identifies areas of imbalance and offers practical solutions to restore harmony. Discover how the placement of objects, rooms, and entrances can influence your health, relationships, and financial growth. With personalized recommendations, you can align your surroundings with positive cosmic energies. Vastu Shastra serves as a powerful tool to create a space that supports your goals and aspirations. It provides clarity on how to optimize your environment for peace, happiness, and prosperity. Let Vastu Shastra transform your space into a sanctuary of positivity and success.

                </p>
                <Link to="#">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%] md:pl-[30px] relative mt-5 md:mt-0">
                <img
                  src="/images/home-1/facilities-thumb-2.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* facilities section - 3 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/home-1/facilities-thumb-3.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    03
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#">Face Reading</Link>
                </h1>

                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Unveil the hidden truths of your personality and destiny with expert Face Reading analysis. This ancient practice deciphers the unique features of your face to reveal insights about your character, emotions, and life path. By examining facial structures, expressions, and lines, Face Reading provides a deeper understanding of your strengths, challenges, and potential. Discover how your facial traits reflect your inner self and influence your relationships, career, and decision-making. This insightful practice serves as a guide to self-awareness, helping you unlock your true potential and align with your life’s purpose. Whether you seek clarity in personal growth or professional endeavors, Face Reading offers profound revelations to navigate life’s complexities. Let your face tell the story of your journey and illuminate the path to a brighter future.
                </p>
                <Link to="#">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 4 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#">Lal Kitab</Link>
                </h1>

                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Unlock simple yet powerful remedies for a better life with Lal Kitab astrology. Known as the 'Red Book of Astrology,' Lal Kitab offers a unique approach to understanding and resolving life's challenges. By analyzing your birth chart, it identifies planetary influences and their impact on your life. Lal Kitab provides practical and easy-to-follow remedies to mitigate negative effects and enhance positive outcomes. Whether you're facing obstacles in relationships, career, health, or finances, its solutions are designed to bring balance and harmony. This ancient wisdom bridges the gap between Vedic astrology and practical living, offering insights that are both profound and actionable. Discover how Lal Kitab can guide you toward a life of peace, prosperity, and fulfillment. Let its timeless teachings illuminate your path and empower you to overcome life's complexities with confidence.

                </p>
                <Link to="#">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
                <img
                  src="/images/home-1/facilities-thumb-4.jpg"
                  alt=""
                  className="w-full h-full "
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    04
                  </h1>
                </div>
              </div>
            </div>

            {/* facilities section - 5 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] my-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-[100%] md:pr-[30px]">
                <img
                  src="/images/home-1/facilities-thumb-5.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    05
                  </h2>
                </div>
              </div>
              <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#">Gemstones</Link>
                </h1>

                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Harness the power of gemstones to attract positivity, success, and well-being in your life. Each gemstone is uniquely connected to specific planetary energies, offering a profound influence on various aspects of your life. By analyzing your astrological chart, the right gemstone is recommended to balance energies and mitigate challenges. Whether you seek to enhance your career, improve relationships, or promote health, gemstones act as powerful tools to align your life with cosmic vibrations. These natural treasures not only amplify positive energies but also protect against negative influences. Discover how wearing the right gemstone can unlock your potential, bring clarity, and guide you toward a harmonious and prosperous life. Let the timeless wisdom of gemstones illuminate your path to success and inner peace.
                </p>
                <Link to="#">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>
            </div>

            {/* facilities section - 6 */}
            <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
            <div
              className="grid grid-cols-1 md:grid-cols-2 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
                <h1 className="text-4xl md:text-5xl 4xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                  <Link to="#">kundli dosh</Link>
                </h1>

                <p className="font-Lora text-xl sm:text-2xl text-gray dark:text-lightGray leading-[32px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                Identify and resolve Kundli Dosh with expert astrological remedies for a harmonious and prosperous life. Kundli Dosh, caused by unfavorable planetary alignments in your birth chart, can lead to challenges in various aspects of life, including relationships, career, health, and finances. By analyzing your Kundli, our experts pinpoint the specific doshas affecting your life and provide personalized solutions to mitigate their impact. These remedies, rooted in ancient Vedic astrology, are designed to restore balance and align your life with positive cosmic energies. Whether it’s Mangal Dosh, Kaal Sarp Dosh, or Pitra Dosh, our guidance helps you overcome obstacles and unlock your true potential. Embrace peace, prosperity, and success by addressing Kundli Dosh with time-tested astrological wisdom. Let us help you navigate life’s challenges and create a path toward fulfillment and happiness.
                </p>
                <Link to="#">
                  <HiArrowLongRight
                    className="text-gray hover:text-khaki"
                    size={30}
                  />
                </Link>
              </div>

              <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
                <img
                  src="/images/home-1/facilities-thumb-6.jpg"
                  alt=""
                  className="w-full h-full "
                />
                <div className="hidden md:block absolute -top-[0px] -left-[12%]">
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki">
                    06
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
