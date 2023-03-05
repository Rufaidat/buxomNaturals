import React from "react";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <div className="h-screen lg:h-content w-full p-6 md:px-10 lg:px-40 lg:flex justify-between items-center ">
      <div className="lg:w-[40%] mt-[8rem]">
        <div className="flex w-auto items-baseline space-x-3">
          <h3 className="text-green -mb-2 text-2xl font-fancy font-bold ml-2 ">
            Discover
          </h3>
          <span className="w-20 h-[2px] sm:w-[10rem] md:w-[13rem] bg-gold"></span>
        </div>
        <h1>Our Story.</h1>
        <p>
          It is an endless list of possibilities for the 100+ skincare
          enthusiasts who across Nigeria and her borders have achieved their
          ultimate skin goals by using <strong>BUXOM NATURALS’ </strong>{" "}
          luxuriously expeditious skincare products.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-2 h-auto lg:h-[26.5rem] border-gold border-dashed border-2 p-2 rounded lg:w-[50%] ">
        {" "}
        <div className="col-span-3 bg-[url('../atoms/IMG-20230104-WA0010.jpg')] gallery-img"></div>
        <div className="col-span-3 bg-[url('../atoms/IMG-20230104-WA0007.jpg')] gallery-img"></div>
        <div className="col-start-2 col-end-6 bg-[url('../atoms/IMG-20230104-WA0015.jpg')]  bg-cover gallery-img"></div>
        <div className="col-span-3 bg-[url('../atoms/IMG-20230104-WA0008.jpg')] gallery-img"></div>
        <div className="bg-[url('../atoms/IMG-20230104-WA0009.jpg')] gallery-img col-span-3"></div>
      </div>
    </div>
  );
}

export default OurStory;
