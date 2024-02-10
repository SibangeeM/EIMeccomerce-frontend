import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterProduct = ({materials,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5  rounded-full cursor-pointer ${isActive ? "bg-green-500 text-white" : "bg-blue-500"}`}>
        <IoIosArrowDown />
      </div>
      <p className="text-center font-medium my-1 capitalize">{materials}</p>
    </div>
  );
};

export default FilterProduct;