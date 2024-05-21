import React from "react";
import section from "../images/motionarteffect-img11.png";
import page from "../images/motionarteffect-img10.png";
import browsers from "../images/motionarteffect-img8.png";

const Home4 = () => {
  return (
    <div className="m-80px">
    <div className="mt-40">
      <div>
        <p className="text-gray-200 text-5xl flex justify-center font-sora font-medium">
          Apply On Any Section Or Enable For
          <br />
        </p>
        <p className="text-gray-200 text-5xl flex justify-center mt-5 font-sora font-medium">
          Whole Page
        </p>
      </div>

      <div className="flex">
        <div className="bg-[#130c24] p-10 border-[3px] border-[#332c42] rounded-3xl h-[700px] w-[750px] mt-28">
          <p className="text-gray-200 text-4xl font-sora">Apply On Section</p>
          <p className="text-gray-400 text-[22px] font-normal font-outfit mt-10">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <div className="mt-9">
            <img src={section} className="w-[700px]" />
          </div>
        </div>

        <div className="bg-[#130c24] p-10 border-[3px] ml-7 border-[#332c42] rounded-3xl h-[700px] w-[750px] mt-52">
          <p className="text-gray-200 text-4xl font-sora">Apply On Page</p>
          <p className="text-gray-400 text-[22px] font-normal font-outfit mt-10">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <div className="mt-9">
            <img src={page} className="w-[700px] h-[430px]" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#201930] via-[#150e26] to-[#100922] inline-block p-14 border-[3px] border-[#332c42] rounded-3xl h-[370px] w-full mt-40">
        <p className="text-gray-200 text-3xl flex justify-center font-sora font-medium">
          Supported by All Popular Browsers
        </p>
        <p className="text-gray-400 text-[22px] font-normal font-outfit mt-10 flex justify-center">
          Rest assured, Motion Art is designed to be compatible
        </p>
        <p className="text-gray-400 text-[22px] font-normal font-outfit mt-2 flex justify-center">
          with all major web browsers.{" "}
        </p>
        <div className="flex justify-center">
          <img src={browsers} className="mt-9 h-[60px]" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home4;
