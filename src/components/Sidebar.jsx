import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen p-4">
      {/* Spotify Logo */}
      <h1 className="text-white text-2xl font-bold mb-6">Spotify</h1>

      {/* Navigation */}
      <ul>
        <li className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white">Search</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white">Your Library</a>
        </li>
      </ul>

      {/* Playlists */}
      <h2 className="text-gray-400 mt-6 mb-4">Playlists</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-400 hover:text-white">Liked Songs</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-400 hover:text-white">Daily Mix 1</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
