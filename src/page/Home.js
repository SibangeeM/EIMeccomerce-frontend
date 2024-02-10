import React from "react";

import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";

import CardFeature from "../component/CardFeature";
import AllProduct from "../component/AllProduct";
import FilterProduct from "../component/FilterProduct";
const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  //fliter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const filter = productData.filter(
      (el) => el.materials.toLowerCase() === filterby.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  }, [filterby]);

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="">
            <h3 className="text-4xl md:text-7xl font-bold py-3 text-blue-500" >
              Grounded in Quality, <br></br>
              <span className="text-green-500">Delivered to Your Doorstep</span>
            </h3>
            <p className="py-3 text-base ">
              At Earth in Motion, we're more than just a store; we're a
              destination for builders, gardeners, and dreamers alike. Discover
              the beauty and strength of natural elements with our curated
              selection of stones, sands, and soils. Whether you're crafting a
              tranquil garden oasis or constructing the foundation of your
              dreams, trust Earth in Motion to provide the quality materials you
              need to bring your vision to life. Let's build together.
            </p>
            <button className="font-bold bg-green-500 text-slate-200 px-4 py-2 rounded-md">
              Order Now
            </button>
          </div>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center"'>
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    pricePound={el.pricePound}
                    materials={el.materials}
                    grade={el.grade}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>

      <AllProduct heading="Our Products"></AllProduct>
    </div>
  );
};

export default Home;
