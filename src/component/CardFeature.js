import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import loginSignupImage from "../assest/iStock-499062505.jpg";

const CardFeature = ({
  id,
  image,
  name,
  materials,
  grade,
  pricePound,
  priceTon,
  description,
  loading,
}) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        materials: materials,
        image: image,
        grade: grade,
        pricePound: pricePound,
        priceTon: priceTon,
        description: description,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col " style={{
      backgroundImage: `url(${loginSignupImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {image ? (
        < >
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center" >
              <img src={image} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {materials}
            </h3>
            <p className=" text-slate-500  font-medium">Grade: {grade}</p>
            <p className=" text-slate-500  font-medium">Seller Name: {name}</p>
            <p className=" font-bold">
              <span className="text-red-500">$</span>
              <span>{pricePound} / pound</span>
            </p>
           
          </Link>

          <button
            className="bg-blue-500 py-1 mt-2 rounded hover:bg-green-500 w-full"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
