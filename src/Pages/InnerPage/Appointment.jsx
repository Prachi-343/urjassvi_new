import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";

const Appointment = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    appointmentType: "",
    reachMethod: "",
    date: "",
    time: "",
    address: "",
    reason: "",
  });

  const [responseMessage, setResponseMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMessage("Your appointment has been submitted successfully.");
  };

  return (
    <div>
      <BreadCrumb title="Appointment" />
      <div className="dark:bg-lightBlack py-20 2xl:py-[120px]">
        <form className="Container" onSubmit={handleSubmit}>
          <h3 className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 font-semibold font-Garamond">
            Appointment Form
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between mt-8 md:mt-10 xl:mt-12 gap-5 md:gap-6 xl:gap-[30px]">
            {/* Name */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              />
            </div>
            {/* Email */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              />
            </div>
            {/* Mobile */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Mobile Number:
              </label>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              />
            </div>
            {/* Gender */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Gender:
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* Appointment Type */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Appointment Type:
              </label>
              <select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              >
                <option value="" disabled>
                  Select Appointment Type
                </option>
                <option value="1">Gemstone consultancy</option>
                <option value="2">Astrology consultancy</option>
                <option value="3">Vastu consulting</option>
                <option value="4">Pooja</option>
              </select>
            </div>
            {/* Preferred Date */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Preferred Date:
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              />
            </div>
            {/* Preferred Time */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <label className="text-lightBlack dark:text-white font-medium font-Garamond text-sm sm:text-base leading-7">
                Preferred Time:
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full h-12 md:h-[52px] lg:h-[60px] px-4 border border-[#a0a0a0] dark:border-lightGray text-gray dark:text-lightGray outline-none bg-transparent mt-4 focus:ring-0"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-[30px] 2xl:mt-10">
            <button
              type="submit"
              className="w-full px-4 h-12 md:h-[52px] lg:h-[60px] text-white uppercase bg-khaki hover-animBg after:rounded-none after:bg-normalBlack"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
