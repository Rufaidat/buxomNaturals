import Image from "next/image";
import React from "react";
function Card({ item }) {
  console.log(item);
  return (
    <div>
      {" "}
      <div className="flex-col flex mt-4 p-6 py-8 items-center w-60 bg-white md:w-60 h-fit rounded shadow-lg font-fancy text-center">
        <div>
          {" "}
          <Image
            src={item.img}
            alt={item.name}
            className="w-[12rem] h-[12rem] rounded"
          />
        </div>
        <div>
          <p className="text-bold text-lg ">{item.name}</p>
          <p className="-mt-8 text-gold text-lg">&#8358; {item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
