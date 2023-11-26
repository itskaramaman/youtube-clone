import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 hover:bg-gray-200 font-bold p-2 rounded-md text-sm">
      {name}
    </button>
  );
};

export default Button;
