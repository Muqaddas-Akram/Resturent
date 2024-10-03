import React from 'react';

const FoodCategory = () => {
  const categories = [
    { image: "/src/assets/images/unsplash_-lHZUkiWM74.png", label: "Dessert" },
    { image: "/src/assets/images/unsplash_dphM2U1xq0U.png", label: "Fast Food" },
    { image: "/src/assets/images/unsplash_MRHyv-hHxgk.png", label: "Dessert" },
    { image: "/src/assets/images/unsplash_q54Oxq44MZs.png", label: "Dessert" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 font-['Fede_Ro']">Food Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative overflow-hidden font-['Fede_Ro'] rounded-lg group">
            <img 
              src={category.image} 
              alt={category.label}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-teal-500 text-white px-4 py-2  rounded-full text-sm font-semibold">
                {category.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
