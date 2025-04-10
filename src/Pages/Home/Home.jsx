import { useEffect } from "react";
import { testFirebaseConnection } from "../../firebase";
import BookingVideo from "../../Components4/BookingVideo/BookingVideo";
import ExtraService from "../../Components4/ExtraService/ExtraService";
import HeroSection from "../../Components4/HeroSection/HeroSection";
import LatestNews from "../../Components4/LatestNews/LatestNews";
import Testimonial from "../../Components4/Testimonial/Testimonial";
import WelcomeSection from "../../Components4/WelcomeSection/WelcomeSection";
import Store from "../../Components4/Store/Store";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ExtraService />
      <Store />
      <BookingVideo />
      <Testimonial />
      <LatestNews />
    </>
  );
};

export default Home;
