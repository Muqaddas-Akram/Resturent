import React, { useState } from 'react';
import About from '../About/about';
import FoodCategory from '../FoodCategory/foodCategory';
import Banner from '../Banner/banner';
import ChefCard from '../ChefCard/chefCard';
import ResturentPage from "../Resturent/resturent";
import Services from '../../components/Services/services';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Adjust based on the number of images you have

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col md:flex-row">
          {/* Slider Container */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative">
            {/* Background Image with Blur Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{
                backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal.jpg')",
              }}
            ></div>
            {/* Text Overlay */}
            <div className="max-w-full mx-auto px-4 py-8 relative z-10">
              <div className="relative">
                <div className="relative z-10">
                  <p className="text-xl italic mb-4 text-white font-['Fede_Ro']">It's Quick & Amusing!</p>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white font-['Fede_Ro']">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                  <p className="mb-8 text-white font-['Fede_Ro']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                  </p>
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-['Fede_Ro']">See Menu</button>
                </div>
              </div>
            </div>
            {/* Slider Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
              <button
                onClick={prevSlide}
                className="bg-teal-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-['Fede_Ro'] text-xl"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="bg-teal-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-['Fede_Ro'] text-xl"
              >
                &gt;
              </button>
            </div>
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {[...Array(totalSlides)].map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                    index === currentSlide ? 'bg-teal-500' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          {/* Static Image on Right Side */}
          <div
            className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto"
            style={{
              backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal.jpg')",
            }}
          ></div>
        </main>
      </div>
      <About />
      <FoodCategory />
      <Banner />
      <ChefCard />
      <ResturentPage />
      <Services />
    </>
  );
};

export default Home;
