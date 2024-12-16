import React from "react";

const PlaylistCard = ({ image, title, description }) => {
  return (
    <div className="bg-green-600 rounded p-8">
      <img src={image} alt={title} className="rounded mb-4" />
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default PlaylistCard;
