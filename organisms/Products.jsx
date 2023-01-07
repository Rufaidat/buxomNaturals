import React from "react";
import Card from "../molecules/Card";
import product from "../atoms/IMG_7654.jpg";
const data = [
  {
    img: product,
    name: "Body wash",
    price: "11,000",
  },
];
function Products() {
  return (
    <div className="p-6 h-screen lg:px-40">
      <div className="flex w-auto items-baseline sm:space-x-3 mt-[6rem]">
        <h3 className="text-green -mb-2 text-2xl font-fancy font-bold ml-2 ">
          Our trending
        </h3>
        <span className="w-8 h-[2px] sm:w-[5rem] md:w-[7rem] bg-gold"></span>
      </div>
      <h1>
        Products <span className="text-gold -ml-3 p-0">.</span>
      </h1>

      <div className=" w-full flex space-x-5 mt-6  overflow-x-scroll overflow-y-visible p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-green scrollbar-thumb-gold">
        {Array(4)
          .fill(data)
          .flat()
          .map((card, index) => (
            <Card key={index} item={card} />
          ))}
      </div>
    </div>
  );
}

export default Products;
