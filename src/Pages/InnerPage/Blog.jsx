import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../firebase"; // Import your Firebase config

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <BreadCrumb title="Blog" />
      <div className="dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            <div className="grid items-center gap-5 2xl:gap-y-[30px] grid-cols-1 lg:grid-cols-2">
              {blogs.map((blog) => (
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
                  <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                    <div className="py-6 px-[30px] ">
                      <div className="flex items-center space-x-6 ">
                        <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          {blog.title}
                        </p>
                      </div>
                      <h2 className="text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                        {blog.content}
                      </h2>
                    </div>

                    <div className="border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5">
                      <div className="">
                        <span className="text-sm sm:text-base flex items-center">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline underline-offset-1">
                            Author
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
