import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <div className="pt-[100px]">
    <section
      className="bg-[url('/images/home-4/hero-bg.jpg')] bg-center  bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center"
      data-aos="fade-down"
    >
      <div className=" text-center ">
        <img
          src="/images/home-4/section-sahpe.png"
          alt=""
          className="mx-auto w-32 h-32 "
        />
        <h2 className="text-white text-xl sm:text-4xl leading-8 md:leading-10 font-normal font-Lora my-[6px] sm:py-2 md:py-0">
        Gems * Astro * Vastu
        </h2>
        <div className="mb-6 md:mb-[30px]">
          <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl leading-10  font-semibold font-Garamond">
          Enliven your home with 
          </h1>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond mt-1">
          Urjassvi Vastu
          </h1>
        </div>
        <Link to={"/appointment"}>
          <button className="btn-secondary lg:h-[55px] before:top-[3.3rem] lg:before:top-[4rem]">
            Make It Now
          </button>
        </Link>
      </div>
    </section>
    // </div>
  );
};

export default HeroSection;
