import React from "react";
import image from "./my-img.jpg";

const Activities = () => {
  return (
    <div className="bg-base-200 h-screen">
      <div className="avatar h-36 flex items-start pt-5 ml-5">
        <div className="w-14 mr-5 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
          <img src={image} alt="" />
        </div>
        <div className="text-amber-500">
          <h1 className="text-2xl font-bold">Sajedur Rahman Arnob</h1>
          <p className=" text-lg font-medium">Web Developer</p>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center border-solid border-2 border-amber-500 rounded-lg p-5 w-80 mx-auto gap-7">
        <div>
          <h1 className="text-4xl text-amber-500 font-bold">
            75<span className="text-indigo-300 text-lg">kg</span>
          </h1>
          <h4 className="text-lg text-indigo-500 font-semibold">Weight</h4>
        </div>
        <div>
          <h1 className="text-4xl text-amber-500 font-bold">5.8</h1>
          <h4 className="text-lg text-indigo-500 font-semibold">Height</h4>
        </div>
        <div>
          <h1 className="text-4xl text-amber-500 font-bold">
            22<span className="text-indigo-300 text-lg">yrs</span>
          </h1>
          <h4 className="text-lg text-indigo-500 font-semibold">Age</h4>
        </div>
      </div>
      {/* break time section  */}
      <div>
        <h2 className="text-2xl ml-5 mt-10 font-semibold">Add a Break</h2>
      </div>
      <div>
        <div className="text-center border-solid border-2 border-amber-500 rounded-lg p-5 w-80 mx-auto mt-10">
          <button className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white ">
            <p className="lowercase">10m</p>
          </button>
          <button className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white mx-5">
            <p className="lowercase">20m</p>
          </button>
          <button className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white">
            <p className="lowercase">30m</p>
          </button>
          <button className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white ml-5">
            <p className="lowercase">40m</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
