import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative w-full  my-10 h-[400px] md:h-[300px] lg:h-[400px] overflow-hidden">
      <img 
        src="/src/assets/images/frame4.png" 
        alt="Restaurant terrace"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-['Fede_Ro']">Book Early & Save</h2>
        <p className="text-xl md:text-2xl mb-8 font-['Fede_Ro']">Lorem ipsum dolor sit amet consectetur.</p>
        <Link to='/products'><button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-['Fede_Ro'] font-semibold hover:bg-teal-600 transition-colors duration-300">
          Book Now
        </button></Link>
        
      </div>
    </div>
  );
};

export default Banner;