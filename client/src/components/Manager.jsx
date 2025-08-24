import React from "react";
import { useState, useRef, useEffect } from "react";

// Making an UI Component

const Manager = () => {
  
  const [form, setForm] = useState({site:"", username:"", password:""});
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords") // fetching password from local storage
    let passwordArray;
    if(passwords){ // if passwords are present in local storage
      passwordArray = JSON.parse(passwords) // JSON.parse() is a JavaScript function that takes a JSON string and converts it into a JavaScript object (or array, or value).
    }
    else{
      passwordArray = [] //empty array
    }    
  }, [])
  

  const ref = useRef() //used ref to directly access the src propeties of img.

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
    // console.log(form)
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form])) // Converts that array into a JSON string (because localStorage can only store strings).
    console.log(passwordArray)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div  className=" mx-auto mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> /&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center " >Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center ">
          <input value={form.site} name="site" onChange={handleChange} placeholder="Enter Website URL" type="text" id="" className=" rounded-full border-2 border-green-500 w-full px-4 py-0.2 " />
          <div className="flex w-full jusitfy-between gap-8" >
            <input value={form.username} name="username" onChange={handleChange} placeholder="Enter Username" type="text" id="" className=" rounded-full border-2 border-green-500 w-full px-4 py-0.2 " />
            
            <div className="relative">
                <input value={form.password} name="password" onChange={handleChange} placeholder="Enter your Password" type="text" id="" className=" rounded-full border-2 border-green-500 w-20px px-4 py-0.2 " />
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

// value = the actual content inside the input (comes from state).

// name = identifier to know which input is being updated (used in forms with multiple inputs).
