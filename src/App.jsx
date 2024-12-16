import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="h-screen flex bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
