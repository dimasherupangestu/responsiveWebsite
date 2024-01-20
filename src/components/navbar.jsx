import * as React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
export const Navbar = () => {
  const [nav, setnav] = React.useState(false);

  const hendelNav = () => {
    setnav(!nav);
  };
  return (
    <>
      <div className="w-full text-slate-100 flex justify-between items-center px-4 py-1 mx-auto max-w-[1240px]">
        <h1 className="w-full text-4xl text-[#00df9a] font-bold">React.</h1>
        <ul className="hidden uppercase md:flex text-lg">
          <li className="p-4">home</li>
          <li className="p-4">company</li>
          <li className="p-4">about</li>
          <li className="p-4">contact</li>
        </ul>
        <div onClick={hendelNav} className="mt-2 block md:hidden">
          {nav ? <IoClose size={30} /> : <FiAlignJustify size={30} />}
        </div>
        <div
          className={`${
            nav
              ? "fixed top-0 left-0 w-[50%] h-full bg-[#000300] border-r-2 border-slate-700 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }`}
        >
          <h1 className="w-full text-3xl text-[#00df9a] font-bold m-3">
            React.
          </h1>
          <ul className="uppercase p-3">
            <li className="p-4 border-slate-800 border-b">home</li>
            <li className="p-4 border-slate-800 border-b">company</li>
            <li className="p-4 border-slate-800 border-b">about</li>
            <li className="p-4 border-slate-800 border-b">contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
