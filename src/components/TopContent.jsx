import React from "react";

const topItems = [
  { title: "Liked Songs", image: "https://via.placeholder.com/60", active: true },
  { title: "Charlie Putt", image: "https://via.placeholder.com/60" },
  { title: "Night 🌃💤", image: "https://via.placeholder.com/60" },
  { title: "Jungkook", image: "https://via.placeholder.com/60" },
  { title: "Jimin", image: "https://via.placeholder.com/60" },
  { title: "Your Episodes", image: "https://via.placeholder.com/60" },
];

const TopContent = () => {
  return (
    <div className="p-6 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {topItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-12 w-12 rounded-lg mr-4"
            />
            <span className="text-white font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopContent;
