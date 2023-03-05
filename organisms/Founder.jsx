import Image from "next/image";
import React from "react";
import img from "../atoms/founder.jpg";
import { motion } from "framer-motion";
function Founder() {
  return (
    <div className="min-h-screen  w-full p-6 md:px-10 lg:px-40 flex flex-col ">
      <div className="relative mb-10 w-auto h-auto md:mb-20 mt-20">
        <div className="absolute top-0 z-10 right-0 md:right-0">
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
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="md:flex justify-around items-center">
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className=" mt-[5rem] mb-4 w-full rounded-full flex items-center md:w-[60%] ">
              <Image
                src={img}
                alt="founder picture"
                className="w-80 h-80 rounded-full sm:w-96 sm:h-96 md:w-[40rem] md:h-[25rem] lg:w-[45rem] md:rounded-none md:rounded-tr-[2rem] md:rounded-bl-[2rem] md:mx-0  mx-auto"
              />
            </div>
          </motion.div>
          <div className="lg:w-[60%] sm:w-[90%]  md:mt-12">
            <p>
              She has an impeccably outstanding, open-minded and engaging
              personality of which many have benefitted as she remains
              undeterred in her mission to assist both males and females regain
              confidence in their appearances.
            </p>
            <p className="-mt-2">
              She has practiced and mastered certified courses in skincare
              products formulation, tailoring & fashion, customer relationship
              management, digital marketing and entrepreneurship but to mention
              a few.
              <p>
                {" "}
                She is also the founder and owner of Buxom Group, Buxom Naturals
                and Buxom Flair.
              </p>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Founder;
