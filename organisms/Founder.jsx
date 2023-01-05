import Image from "next/image";
import React from "react";
import img from "../atoms/founder.jpg";
function Founder() {
  return (
    <div className="h-screen lg:h-content w-full p-6 md:px-10 lg:px-40 md:flex justify-between items-center relative ">
      <div className="absolute top-0 z-10 right-6 md:right-40">
        <div className="flex w-auto items-baseline space-x-2">
          <span className="w-16 h-[2px] sm:w-[6rem] md:w-[8rem] lg:w-[9rem] bg-gold"></span>
          <h3 className="text-green -mb-2 text-2xl font-fancy font-bold  ">
            Meet Our
          </h3>
        </div>
        <h1>
          Founder <span className="text-gold -ml-3">.</span>
        </h1>
      </div>
      <div className=" mt-[5rem] mb-4 w-full rounded-full flex items-center md:w-[60%] md:mr-10 ">
        <Image
          src={img}
          alt="founder picture"
          className="w-80 h-80 rounded-full sm:w-96 sm:h-96 md:w-[20rem] md:h-[25rem] lg:w-[25rem] md:rounded-none md:rounded-tr-[2rem] md:rounded-bl-[2rem] md:mx-0  mx-auto"
        />
      </div>
      <div className="lg:w-[60%] sm:w-[90%]  md:mt-12">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          atque quos odit deleniti quae aliquid velit officiis, fugit laboriosam
          magnam quaerat quibusdam voluptatum totam pariatur minus iste quia
          adipisci beatae.
        </p>
        <p className="-mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          atque quos odit deleniti quae aliquid velit officiis, fugit laboriosam
          magnam quaerat quibusdam voluptatum totam pariatur minus iste quia
          adipisci beatae.
        </p>
      </div>
    </div>
  );
}

export default Founder;
