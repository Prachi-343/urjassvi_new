import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../firebase"; // Adjust the path to your firebase.js file

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchAllProducts();
      setProducts(data.slice(0, 4)); // Limit to 4 products
    };
    fetchProducts();
  }, []);

  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white font-Garamond font-semibold uppercase">
            Featured Products
          </h2>
          <p className="text-sm lg:text-base text-gray dark:text-lightGray font-Lora">
            Explore our top products handpicked for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white dark:bg-lightBlack rounded shadow-lg group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative">
                <img
                  src={product.photoURL}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-khaki text-white px-3 py-1 rounded text-sm">
                  ₹{product.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-lightBlack dark:text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-gray dark:text-lightGray">
                  {product.description.slice(0, 50)}...
                </p>
                <Link
                  to="/room_details"
                  state={product}
                  className="inline-block mt-3 text-khaki font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Products Button */}
        <div className="text-center mt-10">
          <Link
            to="/room"
            className="px-6 py-2 bg-khaki text-white font-semibold rounded"
          >
            More Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Store;