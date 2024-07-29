import { Addicon } from "@/icons/add-icon";
import Link from "next/link";
import React from "react";

const Docdiv = () => {
    return (
        <div className="mt-5 ml-4">
         <div className="docdivbg h-[145px] w-[145px] rounded-md font-bold flex flex-col justify-center text-center cursor-pointer hover:shadow-xl hover:shadow-blue-800">
             <div>
             <h1 className="text-white text-3xl ">Doc <br />
             Page</h1>
             </div>
         </div> 
         <div className="taskdivbg h-[145px] w-[145px] rounded-md mt-5 font-bold flex flex-col justify-center  cursor-pointer hover:shadow-xl hover:shadow-cyan-600">
           <div className="flex text-center flex-row justify-center">  <h1 className="text-white text-2xl ">Task  </h1><div className="mt-[6px] ml-1"> <Addicon /></div> </div>
         </div> 
         <div className="h-7 w-[145px] rounded-md bg-gradient-to-r from-purple-900 via to-pink-500 mt-2 cursor-pointer hover:shadow-xl hover:shadow-purple-800">
             <h1 className="text-white text-sm font-bold text-center p-1">Chatbot ready..</h1>
         </div>
         </div>);
}
 
export default Docdiv;