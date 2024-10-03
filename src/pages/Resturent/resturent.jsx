import React from 'react';

const RestaurantPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="order-2 md:order-1">
          <img 
            src="/src/assets/images/pic.png" 
            alt="Outdoor seating area" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="order-1 md:order-2 bg-white p-6 flex flex-col justify-center border-t-4 border-r-4 border-teal-500">
          <h2 className="text-3xl font-bold text-right mb-4 font-['Fede_Ro']">Our Restaurant</h2>
          <p className="text-gray-700 font-['Fede_Ro']">
            Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec
            nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
            facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
            mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius
            hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
            maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
            accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas
            duis.
          </p>
        </div>
        <div className="order-3 bg-white p-6 border-l-4 border-b-4 flex flex-col justify-center  border-teal-500">
          <h2 className="text-3xl font-bold mb-4 font-['Fede_Ro']">Meet & Greet</h2>
          <p className="text-gray-700 font-['Fede_Ro']">
            Lorem ipsum dolor sit amet consectetur. Sed amet nibh
            ante ultricies adipiscing euismod enim diam imperdiet.
            Tellus justo proin sed orci et turpis diam libero. Eleifend
            facilisis sed facilisis varius hendrerit accumsan tortor. Donec
            nisi est mattis mauris morbi orci maecenas duis. Eleifend
            facilisis sed facilisis varius hendrerit accumsan tortor. Donec
            nisi est mattis mauris morbi orci maecenas duis.
          </p>
        </div>
        <div className="order-4">
          <img 
            src="src/assets/images/Picture.jpg.webp.png" 
            alt="Meeting room" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
