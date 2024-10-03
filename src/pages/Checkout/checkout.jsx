import React from 'react';

const Checkout = () => {
  return (
    <>
      <main className="flex bg-transparent text-white min-h-screen">
        <div className="relative w-full h-screen p-12 flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal 1.png')",
              zIndex: -1 
            }}
          ></div>

          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10">
            <h1 className="text-8xl font-bold text-center mb-4 font-['Fede_Ro']">Check Out</h1>
          </div>
        </div>
      </main>
      <div>
      <div className="container mx-auto p-4 py-20 flex flex-col md:flex-row">
      <div className="md:w-2/3 pr-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">First name</label>
            <input type="text" id="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">Last name</label>
            <input type="text" id="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">Email address</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">Phone number</label>
            <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">Address</label>
            <input type="text" id="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="col-span-1">
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 font-['Fede_Ro']">Area</label>
            <select id="area" className="mt-1 block w-full border font-['Fede_Ro'] border-gray-300 rounded-md shadow-sm p-2">
              <option>Choose Area</option>
            </select>
          </div>
        </form>
      </div>
      <div className="md:w-1/3 mt-4 md:mt-0">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 font-['Fede_Ro']">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <img src="/src/assets/images/close-up-delicious-chicken-meal.jpg" alt="Product" className="w-20 h-20 object-cover rounded" />
                <div>
                  <p className="font-medium">{item === 2 ? 'Chicken Tikka Kabab' : 'Product Name'}</p>
                  <p className="text-sm text-gray-500">{item === 2 ? '150 gm net' : 'qty'}</p>
                  <p className="font-medium font-['Fede_Ro']">50$</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between font-['Fede_Ro']">
              <span>Sub-total</span>
              <span>130$</span>
            </div>
            <div className="flex justify-between font-['Fede_Ro']">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-['Fede_Ro']">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between  font-['Fede_Ro']">
              <span>Tax</span>
              <span>54.76$</span>
            </div>
            <div className="flex justify-between font-semibold text-lg font-['Fede_Ro']" >
              <span>Total</span>
              <span>432.65$</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-teal-500 text-white font-['Fede_Ro'] py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
            Check Out
          </button>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Checkout;
