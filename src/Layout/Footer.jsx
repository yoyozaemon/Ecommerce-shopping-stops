import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../img/Android.png"

function Footer() {
  return (
    <div className="w-full h-44 border bg-black bg-opacity-65 text-white">
      <div className="flex justify-center items-center gap-6 my-4">
        <p className="cursor-pointer">Cookie Setting</p>
        <p>|</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p>|</p>
        <p className="cursor-pointer">Terms And Conditions</p>
        <p>|</p>
        <p className="cursor-pointer">Cookie</p>
      </div>
      <div className="flex justify-center items-center text-xl gap-5">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />{" "}
          {/* Adjust the size as needed */}
          <p>Shoppers Stop</p>
        </div>
        <p>Follow Us on</p>
        <a
          href="https://www.instagram.com/classy_frm__birth?igsh=MmF2NGJ3N2RmNTlr"
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaInstagram className="text-2xl cursor-pointer" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl cursor-pointer" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl cursor-pointer" />
        </a>
      </div>
      <div className="flex justify-center items-center my-4">
        <p>
          &copy; {new Date().getFullYear()} Shoppers Stop. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;