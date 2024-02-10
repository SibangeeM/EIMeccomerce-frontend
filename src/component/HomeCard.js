import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import loginSignupImage from "../assest/iStock-499062505.jpg";

const HomeCard = ({
  name,
  image,
  materials,
  pricePound,
  grade,
  loading,
  id,
}) => {
  return (
    <>
      <div
        className="bg-white shadow-md p-2 rounded min-w-[150px]"
        style={{
          backgroundImage: `url(${loginSignupImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {name ? (
          <>
            <Link
              to={`/menu/${id}`}
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            >
              <div className="w-40 min-h-[150px]">
                <img src={image} className="h-full w-full" />
              </div>
              <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
                {materials}
              </h3>
              <p className="text-center text-slate-500  font-medium">
                Grade: {grade}
              </p>
              <p className="text-center text-slate-500  font-medium">
                Seller Name: {name}
              </p>
              <p className="text-center font-bold">
                <span className="text-red-500">$</span>
                <span>{pricePound} / pound</span>
              </p>

              <p className="text-center font-bold text-slate-500 font-medium flex items-center justify-center">
                <span>
                  <FaStar />
                </span>
                <span className="ml-1">Featured Product</span>
              </p>
            </Link>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>{loading}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeCard;
