import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Adjust based on the number of images you have

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <div className="relative">
        <img
          src={`src/assets/images/frame4.png`}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto object-cover rounded-lg"
        />
        {/* Container for buttons */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="bg-teal-500 text-white w-7 h-7 flex items-center justify-center rounded-full font-['Fede_Ro'] text-xl"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-teal-500 text-white w-7 h-7 flex items-center justify-center rounded-full font-['Fede_Ro'] text-xl"
          >
            &gt;
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentSlide ? 'bg-teal-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
