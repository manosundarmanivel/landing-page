import React from "react";
import HomePic from "../src/Assets/img/home.svg";

import Footer from "../src/Components/Footer";

  
  


const Home = () => {

 
  return (
    <div className='font-poppins '>
      <div className="flex justify-between items-center px-20 py-3 ">
        <h1 className="text-[30px] font-extrabold">Profilio<span className="text-[#f6a130]">.in</span></h1>
        <div className="border  border-[#323234] p-3">
          <h1>Try for free</h1>
        </div>
      </div>
      <div className=" justify-between items-center   flex bg-[#fdebcf] px-20 py-20">
        <div className="">
          <h1 className="font-bold text-centre text-[60px] text-[#323234] ">
            Showcase Your Code <br />
            Journey, All in one place !
          </h1>
          <h1 className="font-bold text-[30px] mt-5 text-[#323234]">
            We Unite your Coding Presence.
          </h1>
          <div className="m-5">
          <button onClick={()=>{
           
          }} className="p-3 mt-12 px-12 mt-3 mx-2 rounded-lg bg-[#323234]  text-white text-[20px]">
            Comming Soon
          </button>
          
          </div>
          
        </div>
        <div className="flex justify-center ">
        <img alt="img" src={HomePic} className="w-[400px] " />
        </div>
      </div>
    
      <Footer/>
    </div>
  );
};

export default Home;
