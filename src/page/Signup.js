import React, { useState } from "react";
import loginSignupImage from "../assest/feature-background.jpg";
import loginSignupImagelogo from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zipcode: "",
    isBusinessOwner: false,
    selectedRole: "",
    businessName: "",
    businessType: "",
    licenseNumber: "",
    registeredAddress: "",
    companyName: "",
    servicableRegions: "",
    password: "",
    confirmPassword: "",
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
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();

        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }
  };
  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${loginSignupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white flex flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : loginSignupImagelogo}
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name</label>
          <input
            type={"text"}
            id="name"
            name="name"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.name}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Registered Email</label>
          <input
            type={"text"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="phone">Registered Phone</label>
          <input
            type={"text"}
            id="phone"
            name="phone"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.phone}
            onChange={handleOnChange}
          />
          <label htmlFor="address">Address</label>
          <input
            type={"text"}
            id="address"
            name="address"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.address}
            onChange={handleOnChange}
          />
          <label htmlFor="apt">Unit/Apt No.</label>
          <input
            type={"text"}
            id="apt"
            name="apt"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.apt}
            onChange={handleOnChange}
          />
          <label htmlFor="city">City</label>
          <input
            type={"text"}
            id="city"
            name="city"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.city}
            onChange={handleOnChange}
          />
          <label htmlFor="state">State</label>
          <input
            type={"text"}
            id="state"
            name="state"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.state}
            onChange={handleOnChange}
          />

          <label htmlFor="zipcode">Zipcode</label>
          <input
            type={"text"}
            id="zipcode"
            name="zipcode"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.zipcode}
            onChange={handleOnChange}
          />
          <label htmlFor="isBusinessOwner">
            <strong>Are you a business owner/utility contractor?</strong>
          </label>
          <select
            name="isBusinessOwner"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.isBusinessOwner ? "yes" : "no"}
            onChange={(e) =>
              setData({ ...data, isBusinessOwner: e.target.value === "yes" })
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {data.isBusinessOwner && (
            <>
              <label htmlFor="role">
                <strong>Select your role:</strong>
              </label>
              <select
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                onChange={(e) =>
                  setData({ ...data, selectedRole: e.target.value })
                }
              >
                <option value="">Select Role</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Utility Contractor">Utility Contractor</option>
              </select>
            </>
          )}
          {data.selectedRole === "Utility Contractor" && (
            <>
              <label htmlFor="businessName">Name of the Business</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.businessName}
                onChange={handleOnChange}
              />

              <label htmlFor="licenseNumber">License Number</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.licenseNumber}
                onChange={handleOnChange}
              />
              <label htmlFor="servicableRegions">Servicable regions</label>
              <input
                type="text"
                id="servicableRegions"
                name="servicableRegions"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.servicableRegions}
                onChange={handleOnChange}
              />
            </>
          )}
          {data.selectedRole === "Business Owner" && (
            <>
              <label htmlFor="companyName">Name of the company</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.companyName}
                onChange={handleOnChange}
              />
              <label htmlFor="businessType">Type of Business</label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.businessType}
                onChange={handleOnChange}
              />
              <label htmlFor="licenseNumber">License Number</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.licenseNumber}
                onChange={handleOnChange}
              />
              <label htmlFor="registeredAddress">Registered Address</label>
              <input
                type="text"
                id="registeredAddress"
                name="registeredAddress"
                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.registeredAddress}
                onChange={handleOnChange}
              />
            </>
          )}
          <label htmlFor="password">Generate Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto  bg-green-500 hover:bg-green-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-green-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
