import React from 'react';
import { useSelector } from 'react-redux';
import {
  FaCoffee, FaHome, FaGift, FaAppleAlt, FaHeadphones,
  FaMobileAlt, FaFlask, FaTshirt, FaSearch, FaShoppingCart, FaUser
} from 'react-icons/fa';
import CategoryItem from './Category';

const Navbar = () => {
  const locationState = useSelector((state) => state.location);
  const selectedLocation = locationState?.selectedLocation || 'Select Location';

  return (
    <div className="bg-[#f8f1ff] shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-[#7a00ff] tracking-tight">zepto</span>

          {/* Super Saver */}
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-gray-300">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">Super Saver</span>
          </div>

          {/* Location */}
          <div className="ml-4 text-sm text-gray-800 font-medium cursor-pointer bg-white px-3 py-1 rounded-lg border border-gray-300">
            {selectedLocation} ▼
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-8 max-w-2xl">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-300">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for"
              className="flex-1 text-sm bg-transparent outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 text-gray-800">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#7a00ff]">
            <FaUser size={18} />
            <span className="text-sm">Login</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#7a00ff]">
            <FaShoppingCart size={18} />
            <span className="text-sm">Cart</span>
          </div>
        </div>
      </div>

      {/* Category menu */}
      <div className="flex items-center gap-6 px-4 py-2 overflow-x-auto border-t border-gray-200 bg-white">
        <CategoryItem icon={<FaShoppingCart size={16} />} label="All" active />
        <CategoryItem icon={<FaCoffee size={16} />} label="Cafe" />
        <CategoryItem icon={<FaHome size={16} />} label="Home" />
        <CategoryItem icon={<FaGift size={16} />} label="Toys" />
        <CategoryItem icon={<FaAppleAlt size={16} />} label="Fresh" />
        <CategoryItem icon={<FaHeadphones size={16} />} label="Electronics" />
        <CategoryItem icon={<FaMobileAlt size={16} />} label="Mobiles" />
        <CategoryItem icon={<FaFlask size={16} />} label="Beauty" />
        <CategoryItem icon={<FaTshirt size={16} />} label="Fashion" />
      </div>
    </div>
  );
};

export default Navbar;
