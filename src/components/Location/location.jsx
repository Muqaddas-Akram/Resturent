import React from 'react';

const Location = () => {
  return (
    <div className="max-w-full mx-auto p-4 py-20 md:p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 font-['Fede_Ro'] pr-0 md:pr-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pouros and Sons</h1>
        <p className="text-lg mb-2">646 First Street, Quigleyville 36427</p>
        <p className="text-lg mb-4">country</p>
        <div className="mb-4">
          <span className="text-red-500 text-2xl">★★★★</span>
          <span className="text-xl text-gray-500 ml-2">768-123 Reviews</span>
        </div>
        <p className="text-xl">0321-1234-123</p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <div className="relative w-full h-64 md:h-full">
          <img 
            src="src/assets/images/Screenshot 2024-07-13 224723.png" 
            alt="Location Map" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
