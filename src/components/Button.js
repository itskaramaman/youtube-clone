import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-gray-100 font-semibold p-2 rounded-md">{text}</button>
  );
};

export default Button;
