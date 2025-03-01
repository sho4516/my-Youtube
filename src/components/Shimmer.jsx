import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-card w-[30%] h-72 p-2 flex flex-col gap-2 animate-pulse">
      <div className="w-full h-[60%] bg-gray-700 rounded-lg"></div>

      <div className="w-[80%] h-4 bg-gray-700 rounded"></div>

      <div className="w-[50%] h-4 bg-gray-700 rounded"></div>

      <div className="w-[40%] h-4 bg-gray-700 rounded"></div>
    </div>
  );
};

export default Shimmer;
