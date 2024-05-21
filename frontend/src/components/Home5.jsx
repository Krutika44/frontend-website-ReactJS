import React from "react";
import img1 from "../images/motionarteffect-img9.png";
import img2 from "../images/motionarteffect-img6.png";
import img3 from "../images/motionarteffect-img7.png";

const Home5 = () => {
  return (
    <div className="m-80px">
    <div className="mt-36">
      <div>
        <p className="text-gray-200 text-5xl flex justify-center font-sora font-medium">
          An All-Round Plugin With Powerful
        </p>
        <p className="text-gray-200 mt-6 text-5xl flex justify-center font-sora font-medium">
          Features
        </p>
        <p className="text-gray-400 text-[22px] font-normal font-outfit mt-10 flex justify-center">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for
        </p>
        <p className="text-gray-400 text-[22px] font-normal font-outfit mt-1 flex justify-center">
          Elementor seamlessly integrates with the Elementor platform, providing
          you{" "}
        </p>
        <p className="text-gray-400 text-[22px] font-normal font-outfit mt-1 flex justify-center">
          with a seamless and intuitive experience.{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="w-full bg-gradient-to-t from-[#201930] via-[#150e26] to-[#100922] inline-block p-4 border-[3px] border-[#332c42] rounded-3xl h-[480px] mt-24">
          <div className="-ml-[25px]">
            <img src={img1} className="h-[250px]" />
          </div>
          <p className="text-gray-200 text-3xl ml-6 mt-8 font-sora font-medium">
            Light Weight
          </p>
          <p className="text-gray-400 text-[23px] font-normal font-outfit mt-6 ml-6 flex justify-center">
            Motion Art for Elementor is designed to be lightweight.{" "}
          </p>
        </div>

        <div className="col-start-2 col-span-1">
          <div className="w-full bg-gradient-to-t from-[#201930] via-[#150e26] to-[#100922] inline-block p-4 border-[3px] border-[#332c42] rounded-3xl h-[480px] mt-24">
            <div className="-ml-[25px]">
              <img src={img2} className="h-[250px]" />
            </div>
            <p className="text-gray-200 text-3xl ml-6 mt-8 font-sora font-medium">
              100% Responsive
            </p>
            <p className="text-gray-400 text-[23px] font-normal font-outfit mt-6 ml-6 flex justify-center">
              Create a consistent visual experience across all devices.
            </p>
          </div>
        </div>

        <div className="col-start-3 col-span-1">
          <div className="w-full bg-gradient-to-t from-[#201930] via-[#150e26] to-[#100922] inline-block p-4 border-[3px] border-[#332c42] rounded-3xl h-[480px] mt-24">
            <div className="-ml-[25px]">
              <img src={img3} className="h-[250px]" />
            </div>
            <p className="text-gray-200 text-3xl ml-6 mt-8 font-sora font-medium">
              User Friendly Interface
            </p>
            <p className="text-gray-400 text-[23px] font-normal font-outfit mt-6 ml-6 flex justify-center">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home5;
