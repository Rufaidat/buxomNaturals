import React from "react";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-[url('../atoms/IMG_7654.jpg')] bg-cover  bg-center bg-fixed w-full h-screen top-0  flex justify-center items-center">
      <div className="top-0 fixed w-full z-[3]">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-white/70 z-[2]" />
      <div className="w-full h-auto px-10  md:px-20 lg:px-40 lg:pl-80 sm:w-[80%] ml[-10rem] md:ml-0 z-[2] ">
        <h1 className="text-gold">Live</h1>
        <h1 className="text-green flex">
          Organic <span className="text-gold">!</span>
        </h1>
        <p className=" px-4 md:w-full lg:w-[80%] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero
          amet esse doloremque quaerat sint alias debitis iste sit, qui
          explicabo blanditiis. Corrupti consequatur repellat odit odio natus.
          Ratione, maxime.
        </p>
        <Link href="https://wa.me/c/2347014272586" target="_blank">
          {" "}
          <Button />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
