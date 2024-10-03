import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-14 py-6 bg-black text-white font-['Fede_Ro']">
      <div>
        <select className="bg-black px-4 border-none text-white font-['Fede_Ro']">
          <option>English</option>
          <option>Italian</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
      <div className="text-2xl font-['Fede_Ro']">LOGO</div>
      <div className="flex space-x-4">
        <Instagram size={20} color="white" />
        <Facebook size={20} color="white" />
        <Twitter size={20} color="white" />
      </div>
    </header>
  );
};

export default Navbar;