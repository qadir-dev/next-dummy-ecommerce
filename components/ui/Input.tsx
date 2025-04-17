import React from "react";

type TINPUT = {
  placeholder: string;
  type: string;
};

const Input: React.FC<TINPUT> = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-[#7b6e5d] rounded-md px-4 py-1 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-[#4b2e2b] duration-300"
    />
  );
};

export default Input;
