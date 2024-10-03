import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-['Fede_Ro']">LOGO</h2>
            <p className="mb-4 font-['Fede_Ro']">Lorem ipsum dolor sit amet</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow p-2 rounded-l-md"
              />
              <button className="bg-teal-500 text-white p-2 rounded-r-md">
                →
              </button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-['Fede_Ro']">Contact us</h2>
            <ul className="space-y-2">
              <li className="flex items-center font-['Fede_Ro']">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                25950 Long Lane, North Ismael 14280
              </li>
              <li className="flex items-center font-['Fede_Ro']">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                00965 - 96659986
              </li>
              <li className="flex items-center font-['Fede_Ro']">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Jermaine.Connelly@yahoo.com
              </li>
              <li className="flex items-center font-['Fede_Ro']">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Sun - Sat / 10:00 AM - 8:00 PM
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-['Fede_Ro']">Links</h2>
            <ul className="space-y-2 font-['Fede_Ro']">
              <li>About us</li>
              <li>Contact Us</li>
              <li>Our Menu</li>
              <li>Team</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-['Fede_Ro']">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/src/assets/images/unsplash_dphM2U1xq0U.png"
                alt="Gallery image 1"
                className="w-full h-auto object-cover"
              />
              <img
                src="/src/assets/images/unsplash_W10_NCsLVyc.png"
                alt="Gallery image 2"
                className="w-full h-auto object-cover"
              />
              <img
                src="/src/assets/images/unsplash_PxJ9zkM2wdA.png"
                alt="Gallery image 3"
                className="w-full h-auto object-cover"
              />
              <img
                src="/src/assets/images/unsplash__79ZJS8pV70.png"
                alt="Gallery image 4"
                className="w-full h-auto object-cover"
              />
              <img
                src="/src/assets/images/unsplash_74yRjQ-cvNI.png"
                alt="Gallery image 5"
                className="w-full h-auto object-cover"
              />
              <img
                src="/src/assets/images/unsplash_W10_NCsLVyc.png"
                alt="Gallery image 6"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 pb-5 bg-teal-500">
        <div className="container mx-auto px-4 text-white flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0 font-['Fede_Ro']">© Copyright © 2000-2020 Logo.com. All rights reserved</p>
          <div className="flex space-x-4 font-['Fede_Ro']">
            <span>Privacy Policy</span>
            <span>Term of Use</span>
            <span>Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
