import React from 'react';

const ChefCards = ({ name, position, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
    <div className="w-full h-full relative">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>
);

const ChefCard = () => {
  const chefs = [
    { name: 'D.Estwood', position: 'Chief Chef', imageUrl: '/src/assets/images/Rectangle 8863.png' },
    { name: 'D.Estwood', position: 'Chief Chef', imageUrl: '/src/assets/images/Rectangle 8863.png' },
    { name: 'D.Estwood', position: 'Chief Chef', imageUrl: '/src/assets/images/Rectangle 8863.png' },
    { name: 'D.Estwood', position: 'Chief Chef', imageUrl: '/src/assets/images/Rectangle 8863.png' },
  ];

  return (
    <div className="container mx-auto my-10 px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 font-['Fede_Ro']">Meet Our Chef</h2>
      <div className="grid grid-cols-1  font-['Fede_Ro'] sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {chefs.map((chef, index) => (
          <ChefCards key={index} {...chef} />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-['Fede_Ro'] font-semibold hover:bg-teal-600 transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
