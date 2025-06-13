import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">StyleSphere</h2>
          <p className="text-sm">Discover the best of fashion for Men, Women & Kids. Latest trends, premium quality, and unbeatable prices.</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">Men</a></li>
            <li><a href="#" className="hover:text-pink-400">Women</a></li>
            <li><a href="#" className="hover:text-pink-400">Kids</a></li>
            <li><a href="#" className="hover:text-pink-400">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-400">Return Policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Shipping Info</a></li>
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-4">Get updates on new arrivals and special offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l bg-gray-800 focus:outline-none text-white w-full"
            />
            <button type="submit" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-r text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} StyleSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
