import React from "react";
import motionarteffectimg2 from "../images/motionarteffect-img2.png";
import motionarteffectimg1 from "../images/motionarteffect-img1.png";
import motionarteffectimg3 from "../images/motionarteffect-img3.png";
import stars from "../images/motionarteffect-img4.png";

const Home2 = () => {
  return (
    <div className="m-80px">
      <div className="flex justify-center">
        <p className="text-gray-300 text-3xl font-normal mt-28 font-outfit">
          Trusted by thousands of users around the world
        </p>
      </div>
      <div className="mt-24 grid grid-cols-3">
        <div className="flex flex-col items-start">
          <div className="grid grid-cols-1">
            <img
              className="col-end-1 col-span-1 h-28"
              src={motionarteffectimg2}
            />
            <div className="col-start-1 col-span-1">
              <img className="mt-6 ml-4 h-auto w-48" src={stars} />
              <div className="mt-6 ml-4 font-sora text-lg text-gray-400 font-medium w-full">
                <b>4.5</b> Score, 9 Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 gap-0">
            <img className="col-end-1 h-28" src={motionarteffectimg1} />
            <div className="col-start-1">
              <img className="mt-6 ml-4 h-auto w-48" src={stars} />
              <div className="mt-6 ml-4 font-sora text-lg text-gray-400 font-medium w-full">
                <b>4.5</b> Score, 9 Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="grid grid-cols-1 gap-0">
            <img
              className="col-end-1 col-span-1 h-28"
              src={motionarteffectimg3}
            />
            <div className="col-start-1 col-span-1">
              <img className="mt-6 ml-4 h-auto w-48" src={stars} />
              <div className="mt-6 ml-4 font-sora text-lg text-gray-400 font-medium w-full">
                <b>4.5</b> Score, 9 Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
