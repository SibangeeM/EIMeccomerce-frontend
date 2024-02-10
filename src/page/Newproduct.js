import React from "react";
import { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import loginSignupImage from "../assest/feature-background.jpg";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    materials: "",
    image: "",
    grade: "",
    pricePound: "",
    priceTon: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, materials, image, grade, pricePound, priceTon, description } =
      data;

    if (
      name &&
      image &&
      materials &&
      pricePound &&
      grade &&
      priceTon &&
      description
    ) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          materials: "",
          image: "",
          grade: "",
          pricePound: "",
          priceTon: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginSignupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Ensure the container covers the entire viewport height
      }}
    >
      <div className="p-4 ">
        <form
          className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white mt-16"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Seller Name</label>
          <input
            type={"text"}
            name="name"
            className="bg-slate-200 p-1 my-1"
            onChange={handleOnChange}
            value={data.name}
          />

          <label htmlFor="materials">Select type of materials</label>
          <select
            className="bg-slate-200 p-1 my-1"
            id="materials"
            name="materials"
            onChange={handleOnChange}
            value={data.materials}
          >
            <option value={"other"}>select materials</option>
            <option value={"fill Sand"}>Fill Sand</option>
            <option value={"top Soil"}>Top Soil</option>
            <option value={"beach Sand"}>Beach Sand</option>
            <option value={"#57 Gravel"}>#57 Gravel</option>
            <option value={"pea Gravel"}>Pea Gravel</option>
            <option value={"#57 Stone"}>#57 Stone</option>
            <option value={"#8 Stone"}>#8 Stone</option>
            <option value={"21 CrusherRun"}>21 Crusher Run</option>
            <option value={"1/2 Inch Crushed Concrete"}>
              Half Inch Crushed Concrete
            </option>
            <option value={"contruction Entrance"}>Contruction Entrance</option>
          </select>

          <label htmlFor="image">
            Image
            <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
              {data.image ? (
                <>
                  <img src={data.image} className="h-full" />
                </>
              ) : (
                <>
                  <span className="text-5xl">
                    <BsCloudUpload />
                  </span>
                </>
              )}
              <input
                type={"file"}
                accept="image/*"
                id="image"
                className="hidden"
                onChange={uploadImage}
              />
            </div>
          </label>

          <label htmlFor="grade" className="my-1">
            Grade
          </label>
          <input
            type={"text"}
            className="bg-slate-200 p-1 my-1"
            name="grade"
            onChange={handleOnChange}
            value={data.grade}
          />
          <label htmlFor="pricePound" className="my-1">
            Price per pound
          </label>
          <input
            type={"text"}
            className="bg-slate-200 p-1 my-1"
            name="pricePound"
            onChange={handleOnChange}
            value={data.pricePound}
          />
          <label htmlFor="priceTon" className="my-1">
            Price per ton
          </label>
          <input
            type={"text"}
            className="bg-slate-200 p-1 my-1"
            name="priceTon"
            onChange={handleOnChange}
            value={data.priceTon}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows={2}
            className="bg-slate-200 p-1 my-1 resize-none"
            name="description"
            onChange={handleOnChange}
            value={data.description}
          ></textarea>

          <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-medium my-2 drop-shadow">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newproduct;
