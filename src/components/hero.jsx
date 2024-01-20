import React from "react";
import ReactTyped from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="w-full max-w-[800px] h-screen mx-auto text-center flex flex-col mt-[10rem]">
        <h1 className="text-[#00df9a] text-xl capitalize font-bold p-2">
          Growing white data analiste
        </h1>
        <h1 className="md:text-5xl lg:text-6xl text-4xl uppercase font-bold">
          grow wiht data.
        </h1>
        <div className="flex justify-center items-center my-5">
          <p className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl">
            fast, flexible financing for
          </p>
          <ReactTyped
            className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl ml-2"
            strings={["Halloo", "BTC", "BTB", "SASS"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </div>
        <p className="text-slate-500 text-lg sm:text-xl md:text-2xl max-w-lg text-center mx-auto capitalize">
          monitor your data analist to increase revenue for BTB,BTC & SASS
          platfroms
        </p>
        <button className="px-5 py-3 bg-[#00df9a] rounded-lg w-[170px] text-xl mx-auto text-white my-5">
          Get Started
        </button>
      </div>
    </div>
  );
};
