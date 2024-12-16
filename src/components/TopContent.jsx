import React from "react";

const topItems = [
  { title: "Liked Songs", image: "https://via.placeholder.com/30x30", active: true },
  { title: "Charlie Putt", image: "https://via.placeholder.com/30x30" },
  { title: "Night 🌃💤", image: "https://via.placeholder.com/30x30" },
  { title: "Jungkook", image: "https://via.placeholder.com/30x30" },
  { title: "Jimin", image: "https://via.placeholder.com/30x30" },
  { title: "Your Episodes", image: "https://via.placeholder.com/30x30" },
];

const TopContent = () => {
  return (
    <div className="p-6 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {topItems.map((item, index) => (
          <div
            key={index}
            className="flex bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-19 h-full object-cover"
            />
           <div className="p-4 flex flex-col justify-center">
              <span className="text-white font-medium">{item.title}</span>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TopContent;
