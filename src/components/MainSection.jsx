// src/components/MainSection.js
import React from "react";
import "../styles/MainSection.css";
import Card from "./Card";

const MainSection = () => {
  const mixes = [
    { id: 1, title: "Liked Songs" },
    { id: 2, title: "Daily Mix 1" },
    { id: 3, title: "Trending Now India" },
    { id: 4, title: "Today's Top Hits" },
  ];

  return (
    <section className="main-section">
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Music</button>
        <button className="tab">Podcasts</button>
      </div>
      <div className="cards">
        {mixes.map((mix) => (
          <Card key={mix.id} title={mix.title} />
        ))}
      </div>
    </section>
  );
};

export default MainSection;
