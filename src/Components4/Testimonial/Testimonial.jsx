import { useState, useEffect } from "react";
import "./testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { fetchAllReviews, addReview } from "../../firebase"; // Import the new function

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [formData, setFormData] = useState({ name: "", review: "" }); // State for form data
  const [error, setError] = useState(""); // State for error handling
  const [success, setSuccess] = useState(""); // State for success message

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:1000px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchAllReviews(); // Fetch reviews from Firebase
        setReviews(data.slice(-4).reverse()); // Show only the latest 4 reviews
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!formData.name || !formData.review) {
      setError("Both fields are required.");
      return;
    }
    try {
      await addReview(formData); // Add review to Firebase
      setSuccess("Review submitted successfully!");
      setFormData({ name: "", review: "" }); // Reset form
      const updatedReviews = await fetchAllReviews(); // Refresh reviews
      setReviews(updatedReviews.slice(-4).reverse());
    } catch (error) {
      setError("Failed to submit review. Please try again.");
    }
  };

  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section title */}
        <div
          className="text-center px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-base leading-7 md:leading-10 lg:leading-[40px] text-khaki font-normal font-Lora">
            Testimonial
          </p>
          <h3
            className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-5 md:leading-7 lg:leading-10 2xl:leading-[45px] font-medium font-Garamond"
          >
            Our Customers Say
          </h3>
        </div>
        {/* section content */}
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={index} className="keen-slider__slide">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="bg-[#ededed] dark:bg-normalBlack p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-[#ededed] dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]">
                    <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal mt-7">
                      {review.review}
                    </p>
                  </div>
                  <div className="flex items-center mt-10 lg:mt-[51px]">
                    <div className="ml-5 md:ml-6">
                      <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond">
                        {review.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* form to add review */}
        <div className="mt-20">
          <div
            className="text-center px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-base leading-7 md:leading-10 lg:leading-[40px] text-khaki font-normal font-Lora">
              Share Your Experience
            </p>
            <h3
              className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-5 md:leading-7 lg:leading-10 2xl:leading-[45px] font-medium font-Garamond"
            >
              Add Your Review
            </h3>
          </div>
          <div className="mt-14 2xl:mt-[60px]">
            {error && (
              <p className="text-red-500 text-center font-Lora">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-center font-Lora">{success}</p>
            )}
            <form
              onSubmit={handleSubmit}
              className="bg-[#ededed] dark:bg-normalBlack p-[30px] max-w-md mx-auto relative before:absolute before:w-6 before:h-6 before:bg-[#ededed] dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px]"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-4 mb-6 border border-gray-300 rounded text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora"
              />
              <textarea
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Your Review"
                className="w-full p-4 mb-6 border border-gray-300 rounded text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-khaki text-lightBlack py-3 rounded text-sm lg:text-base font-medium font-Garamond hover:bg-[#d4b45d] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
