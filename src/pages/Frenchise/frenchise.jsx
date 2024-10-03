import React from 'react';
import Slider from '../../components/Slider/slider';
import Location from '../../components/Location/location';

const Frenchise = () => {
  return (
    <>
      <main className="flex bg-transparent text-white min-h-screen">
        {/* Section with blurred background image */}
        <div className="relative w-full h-screen p-12 flex flex-col justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/images/pic.png')",
              zIndex: -1 // Ensure the image is behind the content
            }}
          ></div>

          {/* Black overlay with reduced opacity */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content on top of the blurred background */}
          <div className="relative z-10"> 
            <h1 className="text-8xl font-bold text-center mb-4 font-['Fede_Ro']">Our Branches</h1>
          </div>
        </div>
      </main>
      <div className="py-20">
        <h1 className="text-4xl font-bold text-center font-['Fede_Ro'] mb-6">Introducing New look</h1>
        <Slider/>
      </div>
      <Location/>
      <div  className="py-20">
        <h1 className="text-4xl font-bold text-center font-['Fede_Ro'] mb-6">We Are Now in Bristol</h1>
        <Slider/>
      </div>
      <Location/>
    </>
  );
};

export default Frenchise;
