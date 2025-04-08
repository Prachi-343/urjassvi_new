import { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import { TbPlayerPlayFilled } from "react-icons/tb";

const BookingVideo = () => {
  const [toggler, setToggler] = useState(false);
  const [latestVideo, setLatestVideo] = useState(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Simulate fetching video data
    const videoData = [
      {
        createdAt: "9 February 2025 at 01:48:37 UTC+5:30",
        title: "sid demo",
        url: "https://firebasestorage.googleapis.com/v0/b/four-ea12b.appspot.com/o/videos%2FWIN_20250206_02_24_03_Pro.mp4?alt=media&token=21f5bc19-04f0-4101-b55b-fee41ba6b7bc",
      },
      // Add more videos if needed
    ];

    // Find the latest video based on createdAt
    const latest = videoData.reduce((prev, current) =>
      new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
    );
    setLatestVideo(latest);
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="py-20 xl:py-[120px] bg-[url('/images/home-4/video-bg.jpg')] bg-center bg-cover ">
      <div className="grid items-center justify-center">
        <div
          className=" text-center px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/home-4/section-sahpe.png"
            alt=""
            className="mx-auto"
          />

          <div className="mt-2 lg:mt-3 mb-2">
            <h1
              className="text-white text-[23px] sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-10 lg:leading-[40px] 2xl:leading-[50px]
           font-semibold font-Garamond sm:px-[60px] lg:px-[135px] xl:px-[235px] 2xl:px-[335px] 3xl:px-[535px]"
            >
              Discover the ancient science of architecture and design that harmonizes the energies of your living spaces.
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <hr className="w-[60px] h-[3px] bg-khaki my-3 md:my-4 lg:mt-5 lg:mb-2" />
          </div>
          {latestVideo && !videoError ? (
            <div
              className="grid items-center justify-center mt-[15px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className=" w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-full border-2 border-white grid items-center justify-center cursor-pointer"
                title={latestVideo.title}
                onClick={() => setToggler(!toggler)}
              >
                <TbPlayerPlayFilled className="w-8 h-8 text-white" />
              </div>
              <FsLightbox
                toggler={toggler}
                sources={[latestVideo.url]}
                onError={handleVideoError}
              />
            </div>
          ) : (
            <div className="text-white mt-5">
              <p>Unable to load the video. Please try again later.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingVideo;
