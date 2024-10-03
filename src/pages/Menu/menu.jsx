import React, { useState } from "react";
import { ChefHat, CookingPot, Pizza, UtensilsCrossed } from "lucide-react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("STARTER");
  const [priceRange, setPriceRange] = useState(100);

  const menuItems = [
    {
      name: "Product Name",
      price: 20.0,
      ingredients: "ingredient1, ingredient2, ingredient3, ingredient4",
    },
    {
      name: "Product Name",
      price: 20.0,
      ingredients: "ingredient1, ingredient2, ingredient3, ingredient4",
    },
    {
      name: "Product Name",
      price: 20.0,
      ingredients: "ingredient1, ingredient2, ingredient3, ingredient4",
    },
    {
      name: "Product Name",
      price: 20.0,
      ingredients: "ingredient1, ingredient2, ingredient3, ingredient4",
    },
    {
      name: "Product Name",
      price: 20.0,
      ingredients: "ingredient1, ingredient2, ingredient3, ingredient4",
    },
  ];

  const tabs = ["STARTER", "MAIN COURSE", "DESSERTS", "DRINKS"];
  const stats = [
    { icon: <ChefHat size={50} />, value: "420", label: "Professional Chefs" },
    { icon: <CookingPot size={50} />, value: "320", label: "Items Of Food" },
    {
      icon: <UtensilsCrossed size={50} />,
      value: "30+",
      label: "Years Of Experience",
    },
    { icon: <Pizza size={50} />, value: "220", label: "Happy Customers" },
  ];

  return (
    <>
      <main className="relative bg-transparent text-white min-h-screen flex flex-col justify-center font-['Fede_Ro']">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal 1.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 md:px-12 py-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            Menu
          </h1>
        </div>
      </main>

      <div className="container mx-auto px-4 md:px-8 py-6 font-['Fede_Ro']">
        <div className="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm md:text-lg ${
                activeTab === tab
                  ? "text-teal-500 border-b-2 border-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-base md:text-lg font-semibold mb-2">
            Filter By Price
          </h3>
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full md:w-64"
            />
            <span className="text-gray-600 mt-2 md:mt-0">Filter</span>
          </div>
          <div className="text-xs md:text-sm text-gray-500 mt-1">
            From $0 to ${priceRange}
          </div>
        </div>

        <div className="space-y-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start border-b pb-6 md:pb-8"
            >
              <img
                src="src/assets/images/unsplash_-lHZUkiWM74.png"
                alt={item.name}
                className="w-full md:w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6 rounded-md"
              />
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.name}
                  </h3>
                  <span className="text-lg md:text-xl font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-500 mt-1 text-sm md:text-base">
                  {item.ingredients}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full my-10 md:my-20 md:h-64 lg:h-80 overflow-hidden h-auto min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem]">
  <img
    src="src/assets/images/close-up-delicious-chicken-meal 1.png"
    alt="Food background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-70"></div>
 <div className="relative z-10 flex flex-wrap justify-center items-center h-full p-4 font-['Fede_Ro']">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="text-center text-white p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
    >
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 flex items-center justify-center">
        <span className="mr-2">{stat.icon}</span>
      </div>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
        {stat.value}
      </div>
      <div className="text-xxs sm:text-xs md:text-sm lg:text-base">
        {stat.label}
      </div>
    </div>
  ))}
</div>

</div>

    </>
  );
};

export default Menu;
