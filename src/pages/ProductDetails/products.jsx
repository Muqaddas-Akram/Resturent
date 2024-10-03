import React, { useState, useEffect } from "react";
import { Star, Minus, Plus, Heart, ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
import Services from "../../components/Services/services";

const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const products = [
    { name: "Burger", price: 38.0, oldPrice: 44.0, image: "src/assets/images/unsplash_jpkfc5_d-DI@2x.png" },
    { name: "Pasta", price: 28.0, oldPrice: 30.0, image: "src/assets/images/top-view-delicious-pasta-arrangement.jpg" },
    { name: "Burger", price: 38.0, oldPrice: 44.0, image: "src/assets/images/unsplash_jpkfc5_d-DI@2x.png" },
    { name: "Pasta", price: 28.0, oldPrice: 30.0, image: "src/assets/images/top-view-delicious-pasta-arrangement.jpg" },
    { name: "Burger", price: 38.0, oldPrice: 44.0, image: "src/assets/images/unsplash_jpkfc5_d-DI@2x.png" },
    { name: "Pasta", price: 28.0, oldPrice: 30.0, image: "src/assets/images/top-view-delicious-pasta-arrangement.jpg" },
 
    
  ];

  const galleryImages = [
    "src/assets/images/close-up-delicious-chicken-meal.jpg",
    "src/assets/images/close-up-delicious-chicken-meal.jpg",
    "src/assets/images/close-up-delicious-chicken-meal.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Move every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center bg-transparent text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal 1.png')",
            zIndex: -1,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 font-['Fede_Ro']">Products Detail</h1>
        </div>
      </main>

      <div className="container mx-auto p-4 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Gallery */}
          <div className="lg:w-1/2">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="hidden lg:flex flex-col gap-2 w-svw">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`rounded object-cover cursor-pointer ${
                      selectedImage === index ? 'border-2 border-teal-500' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              {/* Main image */}
              <div className="flex-grow mt-5">
                <img
                  src={galleryImages[selectedImage]}
                  alt="Main product"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right column - Product details */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 font-['Fede_Ro']">Product Name</h1>
            <p className="text-gray-600 mb-4 font-['Fede_Ro']">Category: Pizza</p>
            <p className="mb-4 font-['Fede_Ro']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="text-2xl sm:text-3xl font-bold mb-4 font-['Fede_Ro']">$54.00</div>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="text-red-600 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-['Fede_Ro']">5.0 Rating | 22 Reviews</span>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-['Fede_Ro']">Quantity</label>
              <div className="flex items-center">
                <button onClick={decrementQuantity} className="bg-gray-200 px-3 py-1 rounded-l">
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="border-t border-b border-gray-200 text-center w-16 py-1 font-['Fede_Ro']"
                />
                <button onClick={incrementQuantity} className="bg-gray-200 px-3 py-1 rounded-r">
                  <Plus size={16} />
                </button>
                <Link to="/addtocart">
                  <button className="ml-4 bg-teal-500 text-white px-6 py-2 rounded font-['Fede_Ro']">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 lg:mt-12 pb-8 font-['Fede_Ro']">
          <div className="border-b flex flex-wrap">
            <button
              className={`py-2 px-4 ${
                activeTab === "description" ? "border-b-2 border-teal-500" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "reviews" ? "border-b-2 border-teal-500" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (24)
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "description" ? (
              <div>
                <p className="mb-4">
                  Nam tristique porta ligula, vel viverra sem eleifend nec.
                   Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec 
                   mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer 
                   at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
                  porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo,
                  sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla 
                  facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                </p>
                <p className="mb-4">
                  Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur 
                  blandit justo urna, id porttitor est dignissim nec. Pellentesque 
                  scelerisque hendrerit posuere. Sed at dolor duis nisi rutrum accumsan 
                  at sagittis neque. Aliquam aliquam accumsan lectus quis auctor. Curabitur 
                  rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. 
                  Integer eu vulputate justo. Aenean pretium orci vel tempor sodales. 
                  Suspendisse eu fringilla leo, non aliquam sem.
                </p>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Key Benefits</h3>
                <ul className="list-disc pl-5">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                  <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                  <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                  <li>Mauris eget diam magna, in blandit turpis.</li>
                </ul>
              </div>
            ) : (
              <div>
                <p className="mb-4">
                  Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur 
                  blandit justo urna, id porttitor est dignissim nec. Pellentesque 
                  scelerisque hendrerit posuere. Sed at dolor duis nisi rutrum accumsan 
                  at sagittis neque. Aliquam aliquam accumsan lectus quis auctor. Curabitur 
                  rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. 
                  Integer eu vulputate justo. Aenean pretium orci vel tempor sodales. 
                  Suspendisse eu fringilla leo, non aliquam sem.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Similar products */}
      <div className="max-w-full mx-auto px-4 pb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 ml-5 font-['Fede_Ro']">Similar Products</h2>
        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                <div className="relative bg-white rounded-lg overflow-hidden shadow-md group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center mb-20 space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-teal-500 p-1 shadow-md"
                      aria-label="Add to favorites"
                    >
                      <Heart className="text-white" />
                    </button>
                    <button
                      className="bg-teal-500 p-1 shadow-md"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold font-['Fede_Ro']">{product.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-base sm:text-lg font-bold font-['Fede_Ro']">${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through font-['Fede_Ro']">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-72 -right-8 transform -translate-y-1/2 flex-row items-center space-x-2 px-10">
            <button
              onClick={prevSlide}
              className="bg-teal-500 text-white w-9 h-9 rounded-full items-center justify-center font-['Fede_Ro'] text-xl"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="bg-teal-500 text-white w-9 h-9 rounded-full items-center justify-center font-['Fede_Ro'] text-xl"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-4 h-4 rounded-full mx-1 ${
                dot === Math.floor(currentIndex / 4)
                  ? "bg-teal-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <Services />
    </>
  );
};

export default Products;
