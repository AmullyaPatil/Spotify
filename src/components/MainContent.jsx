import React from "react";
import PlaylistCard from "./PlaylistCard";

const playlists = [
  {
    image: "https://via.placeholder.com/150",
    title: "Daily Mix 1",
    description: "Taylor Swift, Quavo, Shawn Mendes",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Daily Mix 2",
    description: "Charlie Puth, Ed Sheeran",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Daily Mix 3",
    description: "Sumit Rai, Pritam",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Daily Mix 4",
    description: "WeWakeMusic, King, Arjun",
  },
];

const MainContent = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Made For Amulya Patil</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {playlists.map((playlist, index) => (
          <PlaylistCard
            key={index}
            image={playlist.image}
            title={playlist.title}
            description={playlist.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
