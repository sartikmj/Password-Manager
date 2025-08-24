import React from "react";
import { useRef } from "react";

// Making an UI Component

const Manager = () => {

  const ref = useRef()

  const showPassword = () => {
    alert("show the password!!")
    if(ref.current.src.includes("eyecross.png") ){
      ref.current.src = "/eye.png"
    }
    else{
      ref.current.src = "/eyecross.png"
    }
  }

  const savePassword = () => {

  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div  Name=" mx-auto mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> /&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center " >Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center ">
          <input placeholder="Enter Website URL" type="text" name="" id="" className=" rounded-full border-2 border-green-500 w-full px-4 py-0.2 " />
          <div className="flex w-full jusitfy-between gap-8" >
            <input placeholder="Enter Username" type="text" name="" id="" className=" rounded-full border-2 border-green-500 w-full px-4 py-0.2 " />
            
            <div className="relative">
                <input placeholder="Enter your Password" type="text" name="" id="" className=" rounded-full border-2 border-green-500 w-20px px-4 py-0.2 " />
                <span className="absolute right-1 bottom-0.1 cursor-pointer" onClick={showPassword} >
                  <img ref={ref} className="p-1" width={26} src="/eye.png" alt="eye" />
                </span>
            </div>
          
          </div>

          <button onClick={savePassword} className="flex justify-center items-center bg-green-400 rounded-full px-4 py-2 w-fit hover:bg-green-300 gap-4 border-1 border-green-900 " >
            <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover"
            >
            </lord-icon>
            Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
