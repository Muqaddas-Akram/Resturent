import React, { useState, useEffect } from 'react';
import { Home, Menu, Sprout, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to reset the overflow style when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { icon: Home, label: 'HOME', to: '/' },
    { icon: Menu, label: 'MENU', to: '/menu' },
    { icon: Sprout, label: 'FRANCHISE', to: '/franchise' },
    { icon: Info, label: 'ABOUT', to: '/about' },
    { icon: Phone, label: 'CONTACT US', to: '/contact' },
  ];

  return (
    <div>
      <button
        className="absolute right-0 top-5 z-50 p-2 bg-black bg-opacity-85 rounded md:hidden"
        onClick={toggleMenu}
      >
        <Menu size={20} color="white" />
      </button>

      <nav
        className={`fixed -right-1 lg:right-4 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-85 px-2 py-4 rounded z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      >
        <ul className="space-y-6 flex flex-col items-center">
          {navItems.map(({ icon: Icon, label, to }, index) => (
            <li key={index}>
              <Link to={to} className="flex flex-col items-center">
                <Icon size={20} color="white" />
                <span className="mt-1 text-white text-xs font-['Fede_Ro']">{label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products">
            <button className="mt-4 bg-teal-500 text-white px-3 font-['Fede_Ro'] py-1 rounded-full text-xs">Book Now</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
