import React from 'react';

const CategoryItem = ({ icon, label, active = false }) => {
  return (
    <div className={`flex flex-col items-center text-sm font-medium cursor-pointer transition-all px-2 py-1 ${active ? 'text-[#7a00ff] border-b-2 border-[#7a00ff]' : 'text-gray-700 hover:text-[#7a00ff]'}`}>
      <div>{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default CategoryItem;