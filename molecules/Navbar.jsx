import React, { useEffect } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../atoms/logo.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideNav from "./SideNav";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [textcolor, setTextColor] = useState("#cd8e33");
  const [color, setColor] = useState(false);

  const handleMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      className={
        !color
          ? " py-6  w-full px-4 md:px-20 lg:px-40 relative z-50"
          : " py-6  w-full px-4 md:px-20 lg:px-40 bg-white relative z-50 shadow-gold shadow"
      }
    >
      <div className="lg:hidden flex justify-between w-full">
        <div>
          <RiMenuUnfoldFill
            className="w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? (
            <div
              className="w-full h-content absolute  bg-green/90 mt-6 left-0"
              onClick={handleMenu}
            >
              {" "}
              <SideNav
                isMenuOpen={isOpen}
                logo={logo}
                handleMenu={handleMenu}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <Image src={logo} alt="logo" className="w-20 " />
        <div className="flex space-x-2 mt-2 ">
          <Link href="https://wa.me/message/WRJB62LQQZ3WP1" target="_blank">
            <BsWhatsapp className="s-icons" />
          </Link>
          <Link href="g">
            {" "}
            <BsInstagram className=" s-icons" />
          </Link>
          <Link href="https://wa.me/c/2347014272586" target="_blank">
            <FiShoppingBag className=" s-icons" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex justify-between w-full items-center text-green">
        <Image src={logo} alt="logo" className="w-20 " />
        <ul className="flex justify-between space-x-4 text-lg font-fancy items-center ">
          <Link href="#/">
            <li className="md-li">Home</li>
          </Link>

          <Link href="#story">
            <li className="md-li">Our Story </li>
          </Link>
          <Link href="#Founder" className=" ">
            <li className="md-li">Founder</li>
          </Link>
          <Link href="#products">
            <li className="md-li">Products</li>
          </Link>
          <Link href="#ingredients">
            <li className="md-li ">Ingredients</li>
          </Link>

          <Link href="#contact">
            <li className="md-li ">Contact</li>
          </Link>
        </ul>
        <div className="flex space-x-2 mt-2 ">
          <Link href="https://wa.me/message/WRJB62LQQZ3WP1">
            <BsWhatsapp className="s-icons" />
          </Link>
          <Link href="g">
            {" "}
            <BsInstagram className=" s-icons" />
          </Link>
          <Link href="https://wa.me/c/2347014272586">
            <FiShoppingBag className=" s-icons" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
