import React, { useState } from 'react';
import { Star, X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartItems = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product name', price: 35.00, quantity: 1, total: 221.00 },
        { id: 2, name: 'product name', price: 25.00, quantity: 1, total: 521.00 },
        { id: 3, name: 'Product name', price: 15.00, quantity: 1, total: 421.00 },
    ]);

    const updateQuantity = (id, change) => {
        setProducts(products.map(product => 
            product.id === id 
                ? { ...product, quantity: Math.max(1, product.quantity + change) }
                : product
        ));
    };

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const [couponCode, setCouponCode] = useState('');
const subtotal = products.reduce((sum, product) => sum + product.total, 0);
const shippingCharge = 0.00; // You can update this as needed
const total = subtotal + shippingCharge + 85;


    return (
        <>
            <main className="flex bg-transparent text-white min-h-screen">
                <div className="relative w-full h-screen p-4 md:p-12 flex flex-col justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('src/assets/images/close-up-delicious-chicken-meal 1.png')",
                            zIndex: -1 
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="relative z-10">
                     
                        <h1 className="text-4xl md:text-8xl font-bold text-center mb-4 font-['Fede_Ro']">Cart Items</h1>
                    </div>
                </div>
            </main>
            <div className="container mx-auto p-4 md:p-6">
                <div className="mb-8 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-2 font-['Fede_Ro']">Product</th>
                                <th className="text-left p-2 font-['Fede_Ro']">Price</th>
                                <th className="text-left p-2 font-['Fede_Ro']">Quantity</th>
                                <th className="text-left p-2 font-['Fede_Ro']">Total</th>
                                <th className="text-left p-2 font-['Fede_Ro']">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b">
                                    <td className="p-2 flex items-center">
                                        <img src="src/assets/images/unsplash__79ZJS8pV70.png" alt={product.name} className="w-16 h-16 md:w-20 md:h-20 object-cover mr-4" />
                                        <div>
                                            <p className="font-medium font-['Fede_Ro']">{product.name}</p>
                                            <div className="flex">
                                                {[...Array(3)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                                {[...Array(2)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-gray-300" />
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 font-['Fede_Ro']">${product.price.toFixed(2)}</td>
                                    <td className="p-2">
                                        <div className="flex items-center border rounded-md">
                                            <button onClick={() => updateQuantity(product.id, -1)} className="p-1">
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="px-2 font-['Fede_Ro']">{product.quantity}</span>
                                            <button onClick={() => updateQuantity(product.id, 1)} className="p-1">
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-2 font-['Fede_Ro']">${product.total.toFixed(2)}</td>
                                    <td className="p-2">
                                        <button onClick={() => removeProduct(product.id)}>
                                            <X className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-8 p-6 bg-white">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Coupon Code</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Here code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-r hover:bg-teal-600 transition duration-300">
            Apply
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Total Bill</h2>
        <div className="border border-gray-300 rounded p-4">
          <div className="flex justify-between mb-2">
            <span>Cart Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge</span>
            <span>${shippingCharge.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Link to='/checkout'>
        <button className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300">
          Order Now
        </button>
        </Link>
      </div>
    </div>
            </div>
        </>
    );
};

export default CartItems;
