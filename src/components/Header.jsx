import React from "react";

const Header = () => {
  return (
    <div className="p-6 bg-black text-white">
    <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 rounded-full bg-white text-black font-semibold">All</button>
        <button className="px-4 py-2 rounded-full text-gray-400 hover:text-white">Music</button>
        <button className="px-4 py-2 rounded-full text-gray-400 hover:text-white">Podcasts</button>
      </div>
    </div>
  );
};

export default Header;
