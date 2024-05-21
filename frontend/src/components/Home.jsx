import React from "react";
import MotionArtEffect from "../images/MotionArtEffect-logo.png";
import Home2 from "./Home2";

const Home = () => {
  return (
    <div className="m-80px">
      <div className="grid grid-cols-3 gap-[30.75rem]">
        <img className="col-start-1 col-span-2 h-14" src={MotionArtEffect} />
        <button className="bg-white w-56 h-16 text-xl font-outfit p-2 border rounded-md col-start-3 col-span-1 hover:bg-[#100c1c] hover:text-white">
          Purchase Now
        </button>
      </div>
      <div className="mt-32 grid grid-cols-4">
        <div className="col-start-1 col-span-1">
          <p className="bg-gradient-to-r from-[#c65c2c] via-[#5720e0] to-[#5405ff] inline-block text-transparent bg-clip-text text-2xl font-bold font-sora">
            Transform <br />
            Your Website
          </p>
          <p className="text-gray-200 text-xl mt-4 font-sora">
            With Motion <br /> Art Effect
          </p>
        </div>
        <div className="col-start-2 col-span-3">
          <p className="text-gray-200 text-7xl font-semibold">
            Attract Your Visitors <br />
          </p>
          <p className="text-gray-200 font-semibold text-7xl mt-6">
            Attention With Colorful <br />
          </p>
          <div className="flex items-center">
            <p className="mt-6 text-[#f87516] text-7xl font-medium font-sora">
              Mo
            </p>
            <p className="mt-6 bg-gradient-to-r from-[#f87516] via-[#a43f93] to-[#5405ff] inline-block text-transparent bg-clip-text text-7xl font-medium font-sora">
              tion
            </p>
            <p className="mt-6 text-7xl font-medium font-sora text-[#5405ff] ml-4">
              Art Effect
            </p>
          </div>
          <p className="text-gray-400 text-2xl font-normal font-outfit mt-10">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution <br />
            for seamlessly integrating captivating animations into your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
