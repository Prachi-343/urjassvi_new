import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <div className="pt-[100px]">
    <section
      className="bg-[url('/images/home-4/hero-bg1.png')] bg-center bg-no-repeat bg-cover h-[800px] md:h-[900px] xl:h-[1000px] 3xl:h-[1100px] grid items-center justify-center"
      data-aos="fade-down"
    >
      <div className="text-center">
      <img
        src="/images/home-4/section-sahpe.png"
        alt=""
        className="mx-auto w-48 h-48"
      />
      <h2 className="text-white text-2xl sm:text-5xl leading-10 md:leading-12 font-normal font-Lora my-[8px] sm:py-3 md:py-1">
        Gems * Astro * Vastu
      </h2>
      <div className="mb-8 md:mb-[40px]">
        <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl leading-12 font-semibold font-Garamond">
        Enliven your home with
        </h1>
        <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl leading-12 lg:leading-[65px] xl:leading-[76px] font-semibold font-Garamond mt-2">
        Urjassvi Vastu
        </h1>
      </div>
      <Link to={"/appointment"}>
        <button className="btn-secondary lg:h-[65px] before:top-[4rem] lg:before:top-[5rem]">
        Make It Now
        </button>
      </Link>
      </div>
    </section>
    // </div>
  );
};

export default HeroSection;
