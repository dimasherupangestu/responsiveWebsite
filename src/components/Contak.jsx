import React from "react";

export const Contak = () => {
  return (
    <div className="w-full bg-[#000300] py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col sm:flex-row justify-between items-center ">
            <input
              type="text"
              className="w-full bg-white py-3 px-5 rounded-lg text-black me-2 lg:h-[50px]"
            />
            <button className=" w-[200px] rounded-lg bg-[#00df9a] text-slate-300 font-boldml-4 my-6 px-6 py-3">
              {" "}
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
