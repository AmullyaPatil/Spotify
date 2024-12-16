import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center space-x-6">
      <button className="text-white font-bold border-b-2 border-white">All</button>
      <button className="text-gray-400 hover:text-white">Music</button>
      <button className="text-gray-400 hover:text-white">Podcasts</button>
    </div>
  );
};

export default Header;
