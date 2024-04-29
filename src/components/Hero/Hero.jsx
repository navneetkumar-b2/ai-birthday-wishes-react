import React from "react";
import img1 from './img1.jpeg'
function Hero() {
    return (
        <div style={{ backgroundColor: 'rgba(222, 255, 251, 1)' }} className="flex flex-wrap flex-col md:justify-around items-center w-full  min-h-64 md:flex-row ">
          <div className="flex items-center justify-center md:w-[40%] p-2 m-2 mt-6 ">
            <p className="text-3xl font-bold leading-[2.5rem] text-left ">Unique & Personalized <br></br><span className=" bg-orange-300 decoration-solid">   Birthday Wishes </span> for your 
            <br></br>
            loved ones.</p>
            </div>
          <div className="flex  w-[90vw] md:w-[50%] m-2 ">
            <div className="w-full ">
            <img src={img1} className="w-[100%] rounded-xl border-solid	 border-gray-500	"/>
            </div>
            
            </div>
        </div>
  );
}

export default Hero;
