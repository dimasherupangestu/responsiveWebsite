import React from "react";
import Laptop from "../assets/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full text-black bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className="w-[600px] mx-auto my-4" />
        <div className="flex flex-col justify-center ">
          <p className="uppercase tex-xl md:text-2xl  text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 capitalize font-bold my-2">
            manage data analytics center
          </h1>
          <p className="text-slate-400 text-lg capitalize">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            dolorum sint quis placeat explicabo asperiores consectetur ut harum
            inventore! Vel voluptatem quis quisquam animi, velit dolor fugiat
          </p>
          <button className="px-5 py-3 bg-black text-[#00df9a] rounded-lg w-[170px] text-xl mx-auto  my-5 md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
