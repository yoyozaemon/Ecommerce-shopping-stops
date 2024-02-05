import React from "react";
import { FaHome, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../img/Android.png";

function NavBar() {
  return (
    <div className="w-full h-14 bg-black bg-opacity-70 text-white flex items-center justify-between px-6">
      <div className="flex items-center ">
        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />{" "}
        {/* Replace with your logo */}
        <h1 className="text-xl font-extrabold italic">Shoppers Stop</h1>
      </div>
      <div className="flex  text-base gap-5 text-xl flex-row justify-between items-center  ">
        <Link to="/" className="flex items-center">
          <FaHome className="cursor-pointer" />
        </Link>
        <div className="flex   items-center">
          <Link to={"/contact"}>
            <FaUserCircle className="cursor-pointer" />
          </Link>
        </div>
        <div className=" items-center  flex  ">
          <Link to={"/cart"}>
            <FaShoppingCart className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;