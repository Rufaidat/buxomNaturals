import React from "react";

function Products() {
  return (
    <div>
      <div className="flex w-auto items-baseline space-x-3">
        <h3 className="text-green -mb-2 text-2xl font-fancy font-bold ml-2 ">
          Our Products
        </h3>
        <span className="w-20 h-[2px] sm:w-[10rem] md:w-[13rem] bg-gold"></span>
      </div>
      <h1>
        Trending <span className="text-gold -ml-3 p-0">.</span>
      </h1>
    </div>
  );
}

export default Products;
