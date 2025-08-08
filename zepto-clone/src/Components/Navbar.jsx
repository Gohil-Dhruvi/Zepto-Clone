import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FaCoffee,
  FaHome,
  FaGift,
  FaAppleAlt,
  FaHeadphones,
  FaMobileAlt,
  FaFlask,
  FaTshirt,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt
} from 'react-icons/fa';
import CategoryItem from './Category';
import zepto from '../assets/zepto-logo.svg';

const Navbar = () => {
  const [locationInputVisible, setLocationInputVisible] = useState(false);
  const locationState = useSelector((state) => state.location);
  const selectedLocation = locationState?.selectedLocation || 'Select Location';

  return (
    <div className="bg-[#f8f1ff] shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-3 px-6">
        {/* Left section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <span className="text-3xl font-bold tracking-tight">
            <img src={zepto} alt="Zepto Logo" className="h-6 w-auto" />
          </span>

          {/* Super Saver with status */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full border border-gray-300">
              <div className="w-4 h-4 bg-white border border-gray-400 rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                Super Saver
              </span>
            </div>
            <span className="text-[10px] text-gray-600 mt-1 ml-1">Service ON</span>
          </div>

          {/* Location */}
          <div className="relative">
            <div
              onClick={() => setLocationInputVisible(!locationInputVisible)}
              className="text-sm text-gray-800 font-medium cursor-pointer bg-transparent px-3 py-1 rounded-lg border border-gray-300"
            >
              {selectedLocation} ▼
            </div>
            {locationInputVisible && (
              <div className="absolute top-10 left-0 bg-white shadow-md p-4 rounded-md w-64 z-50">
                <div className="flex items-center border border-gray-300 px-2 py-1 rounded-md">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-8 max-w-2xl hidden md:block">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-300">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for chocolates, snacks, etc."
              className="flex-1 text-sm bg-transparent outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 text-gray-800">
          <div className="flex flex-col items-center cursor-pointer hover:text-[#7a00ff]">
            <FaUser size={18} />
            <span className="text-xs">Login</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-[#7a00ff]">
            <FaShoppingCart size={18} />
            <span className="text-xs">Cart</span>
          </div>
        </div>
      </div>

      {/* Category menu */}
      <div className="w-full px-6 py-2 overflow-x-auto border-t border-gray-200 bg-white flex items-center gap-6">
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