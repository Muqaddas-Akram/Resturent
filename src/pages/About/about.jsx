import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 my-5">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl text-black mb-2 font-['Fede_Ro']">About us</h2>
          <h1 className="text-4xl font-bold mb-4 font-['Fede_Ro']">We Create the best foody product</h1>
          <p className="text-gray-600 mb-6 font-['Fede_Ro']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center font-['Fede_Ro']">
              <Check className="text-teal-500 mr-2" />
              <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
            </li>
            <li className="flex items-center font-['Fede_Ro']">
              <Check className="text-teal-500 mr-2" />
              <span>Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
            </li>
            <li className="flex items-center font-['Fede_Ro']">
              <Check className="text-teal-500 mr-2" />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </li>
            {showMore && (
              <>
                <li className="flex items-center font-['Fede_Ro']">
                  <Check className="text-teal-500 mr-2" />
                  <span>Additional detail 1</span>
                </li>
                <li className="flex items-center font-['Fede_Ro']">
                  <Check className="text-teal-500 mr-2" />
                  <span>Additional detail 2</span>
                </li>
                <li className="flex items-center font-['Fede_Ro']">
                  <Check className="text-teal-500 mr-2" />
                  <span>Additional detail 3</span>
                </li>
              </>
            )}
          </ul>
          <Link to="/about">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-teal-500 text-white px-6 py-2 rounded-full font-['Fede_Ro']"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
          </Link>
        </div>
       

        {/* Right column */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <img 
              src="src/assets/images/close-up-delicious-chicken-meal.jpg" 
              alt="Food dish with eggs" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="src/assets/images/unsplash_mAQZ3X_8_l0.png" 
              alt="Food dish with salad" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="src/assets/images/unsplash_jpkfc5_d-DI@2x.png" 
              alt="Sandwich" 
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
