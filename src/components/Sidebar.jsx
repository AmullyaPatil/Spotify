// src/components/Sidebar.js
import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Your Library</h2>
      <ul>
        <li>Playlists</li>
        <li>Podcasts</li>
        <li>Albums</li>
      </ul>
      <input type="text" placeholder="Search" className="sidebar-search" />
    </aside>
  );
};

export default Sidebar;
