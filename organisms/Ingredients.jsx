import React from "react";
import Image from "next/image";
import berry from "../atoms/IMG-20230104-WA0020.jpg";
import acid from "../atoms/IMG-20230104-WA0017.jpg";
import soap from "../atoms/IMG-20230104-WA0019.jpg";
import ab from "../atoms/IMG-20230104-WA0018.jpg";
import pod from "../atoms/IMG-20230104-WA0016.jpg";
import { motion } from "framer-motion";
const data = [
  {
    img: berry,
    name: "Mulberry",
    details:
      "Mulberry is rich in Vitamin A, vitamin E, and carotenoids, and these have potential antioxidant properties. It helps in reducing the appearance of scars, keeps the skin smooth and young, and reduces age spots due to these antioxidant properties.",
  },
  {
    img: acid,
    name: "Hyaluronic acid",
    details:
      "Owing its ability to retain up to 1000x its actual weight in water, HA improves skin stretch and flex and reduces skin wrinkles and lines. HA is also proven to help wounds heal faster and can reduce scarring.",
  },
  {
    img: soap,
    name: "African black soap",
    details:
      "With natural antibacterial and exfoliating properties, African black soap acts gently to improve skin texture and tone. It also reduces inflammation and may help treat some signs of aging like dark spots or wrinkles.",
  },
  {
    img: ab,
    name: "Alpha arbutin",

    details:
      "Alpha arbutin effectively lightens and reduces UV induced pigmentation and free radicals, without increasing sun sensitivity. It fades discoloration caused by inflammation and environmental stressors while evening skin tone. It also addresses glycation, sugar-induced skin sallowness and loss of elasticity.",
  },
  {
    img: pod,
    name: "Vigna aconitifolia(moth beans) extract",
    details:
      "This extract penetrates into the skin and is able to jump start collagen production and boost cell renewal. Moth bean also contains phenolic compounds like caffeic acid, cinnamic acid, ferulic acid and kaempferol which all protect your skin against free radicals and UV damage.",
  },
];
function Ingredients() {
  return (
    <div className="min-h-screen  w-full p-6 md:px-10 lg:px-40 flex flex-col ">
      <div className="relative mb-10 w-auto h-auto md:mb-20 mt-[8rem]">
        <div className="absolute top-0 right-0 md:right-0">
          <div className="flex w-auto items-baseline space-x-2">
            <span className="w-16 h-[2px] sm:w-[6rem] md:w-[8rem] lg:w-[9rem] bg-gold"></span>
            <h3 className="text-green -mb-2 text-2xl font-fancy font-bold  ">
              Want to know our
            </h3>
          </div>
          <h1>
            Ingredients <span className="text-gold -ml-3">?</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-[5rem]">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex-col flex mt-4 p-6 py-8 items-center w-80 bg-white  h-fit sm:h-[35rem] rounded shadow-lg font-fancy text-center"
          >
            <div>
              {" "}
              <Image
                src={item.img}
                alt={item.name}
                className="w-[12rem] h-[12rem] rounded"
              />
            </div>
            <div>
              <p className="text-bold  text-gold text-2xl ">{item.name}</p>
              <p className="-mt-8 text-[1rem] text-left">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
