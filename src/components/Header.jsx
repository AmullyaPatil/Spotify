// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="nav-btn">←</button>
        <button className="nav-btn">→</button>
      </div>
      <input type="text" className="search-bar" placeholder="What do you want to play?" />
      <div className="header-right">
        <button className="explore-btn">Explore Premium</button>
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">👤</button>
      </div>
    </header>
  );
};

export default Header;
