import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center sticky w-full">
      
        <div className="logo font-bold text-2xl">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <div className="flex justify-center items-center ml-5">Created with <img className="w-7 m-1" src="/heart.png" alt="" /> by Sartik Sharma </div>
      
    </div>
  );
};

export default Footer;
