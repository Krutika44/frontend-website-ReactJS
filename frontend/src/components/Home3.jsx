import React from "react";
import stick from "../images/motionarteffect-img5.png";

const Home3 = () => {
  return (
    <div className="m-80px">
    <div className="flex justify-normal">
    <div className="justify-start">
      <div className="text-gray-200 font-sora text-5xl mt-[150px] font-medium">
        <p>Turn Your Cursor Into A Colorful Magic </p>
        <p className="mt-6"> Wand & Charm Your Visitors</p>
      </div>
      <div>
        <p className="text-gray-400 text-2xl font-normal font-outfit mt-10">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse <br /> your website with visually stunning
          motion art elements.
        </p>
      </div>
      <div className="mt-9">
        <button className="p-6 flex justify-center text-gray-200 font-light bg-gradient-to-r from-[#5405ff] via-[#5720e0] to-[#f87234] text-2xl font-sora h-20 w-[430px] rounded-3xl">
          Purchase From Envato
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 ml-6 -mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      </div>
      <div className="justify-end mt-40 ml-72">
        <img src={stick} />
      </div>
    </div>
    </div>
  );
};

export default Home3;
