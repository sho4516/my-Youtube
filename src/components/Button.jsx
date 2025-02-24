import React from "react";

const Button = ({ name, selected, onClick }) => {
  return (
    <button
      className={`bg-[#272727] px-5 py-1 rounded-lg cursor-pointer hover:bg-[#3f3f3f] transition w-auto font-extrabold ${
        name === selected ? "bg-white text-black hover:bg-white" : ""
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Button;
