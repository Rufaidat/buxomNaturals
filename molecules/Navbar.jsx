import React from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../atoms/logo.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between py-2 shadow-md shadow-green/60  w-full px-4 lg:px-40 bg-white/90 relative z-50">
      <div>
        <RiMenuUnfoldFill
          className="w-6 h-6 text-gold"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen ? (
          <div
            className="w-full h-content absolute  bg-green/90 mt-6 left-0"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            <ul className="flex flex-col shadow-lg w-[90%]  py-4  px-4 rounded z-10 h-[30rem]">
              <li>Home</li>
              <li>Our Story</li>
              <li>Our CEO</li>
              <li>Products</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <Image src={logo} alt="logo" className="w-20" />
      <div className="flex space-x-2 mt-2 text-gold">
        <Link href="https://wa.me/message/WRJB62LQQZ3WP1">
          <BsWhatsapp className="w-4 h-4" />
        </Link>
        <Link href="g">
          {" "}
          <BsInstagram className=" w-4 h-4" />
        </Link>
        <Link href="https://wa.me/c/2347014272586">
          <FiShoppingBag className=" w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
