import React from "react";
import Navbar from "../molecules/Navbar";
import bg from "../atoms/img_7654.jpg";
import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
  return (
    <div className="bg-[url('../atoms/img_7654.jpg')] bg-cover  bg-center bg-fixed w-full h-screen top-0  flex  ">
      <div className="top-0 fixed w-full">
        <Navbar />
      </div>
      <div className="w-full h-auto px-10  md:px-20 lg:px-40 mt-60 sm:w-[80%]">
        <h1 className="text-gold">Live</h1>
        <h1 className="text-green flex">
          Organic <span className="text-gold">!</span>
        </h1>
        <p className="bg-white/90 px-4 md:w-[80%] lg:w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero
          amet esse doloremque quaerat sint alias debitis iste sit, qui
          explicabo blanditiis. Corrupti consequatur repellat odit odio natus.
          Ratione, maxime.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Hero;
