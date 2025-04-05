import { Link } from "react-router-dom";

const ExtraService = () => {
  return (
    <section className="bg-[#ededed] dark:bg-normalBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section header */}
        <div
          className="flex md:flex-row flex-col items-center justify-between space-y-1 md:space-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            
            <h3
              className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-9
           font-semibold font-Garamond"
            >
              Extra Services
            </h3>
          </div>
          <div>
            <p className="text-[13px] md:text-base leading-[26px] text-gray dark:text-white font-normal font-Lora text-center w-full md:w-[250px] lg:w-[350px] xl:w-[465px] 2xl:w-[560px] p-5 md:p-0">
            Our astrology services include personalized horoscope readings, career and love guidance, and accurate predictions. Get expert insights to shape your future with confidence.
            </p>
          </div>
          <Link to={"/services"}>
            <button className="btn-items text-sm md:text-base ">
              VIEW ALL SERVICES
            </button>
          </Link>
        </div>
        {/* section content */}
        <div className="pt-10 xl:pt-[60px]">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] ">
            <div
              className="extra-service bg-[url('/images/home-4/service-1.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-1.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                Birth Journal
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Discover the secrets of your life with a personalized birth journal based on your unique astrological chart.
                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service-2 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-2.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-2.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                Vastu Shastra
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Enhance harmony and prosperity in your life with expert Vastu Shastra guidance.

                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service -3 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-3.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-3.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                Face Reading
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Unveil hidden truths about your personality and destiny with expert face reading analysis.
                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          

          
            {/* service- 04 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-4.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-4.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                Lal Kitab
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Unlock simple yet powerful remedies for a better life with Lal Kitab astrology.
                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service- 05 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-5.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-5.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                Gemstones
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Harness the power of gemstones to attract positivity, success, and well-being in your life.
                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service- 06 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-6.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-5.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                 kundli dosh
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                Identify and resolve Kundli Dosh with expert remedies for a harmonious and prosperous life.
                </p>
                <div className="float-left">
                  <Link to={"/services"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraService;
