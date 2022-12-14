import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { addToLocalStorage, getStoredItem } from "../Utilities/LocalStorage";
import image from "./my-img.jpg";

const Activities = (props) => {
  const { timing } = props;

  const [addbreak, setBreak] = useState(0);

  useEffect(() => {
    const storageTime = getStoredItem();
    setBreak(storageTime);
  }, []);

  const handleWithBreakTime = (value) => {
    setBreak(value);
    addToLocalStorage(value);
  };

  const handleActivity = () => {
    toast("🦄 Wow Your Activity Done!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Swal.fire({
      title: "Congratulations 🎉🎉🎊🎊.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };

  let total = 0;
  for (const time of timing) {
    total = total + time.time;
  }
  return (
    <div className="bg-base-200 h-full ml-16 mt-10 lg:mt-0">
      <div className="avatar h-32 flex items-start pt-5 ml-5">
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
            80<span className="text-indigo-300 text-lg">kg</span>
          </h1>
          <h4 className="text-lg text-indigo-500 font-semibold">Weight</h4>
        </div>
        <div>
          <h1 className="text-4xl text-amber-500 font-bold">5.6</h1>
          <h4 className="text-lg text-indigo-500 font-semibold">Height</h4>
        </div>
        <div>
          <h1 className="text-4xl text-amber-500 font-bold">
            24<span className="text-indigo-300 text-lg">yrs</span>
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
          <button
            onClick={() => handleWithBreakTime(10)}
            className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white "
          >
            <p className="lowercase">10m</p>
          </button>
          <button
            onClick={() => handleWithBreakTime(20)}
            className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white mx-5"
          >
            <p className="lowercase">20m</p>
          </button>
          <button
            onClick={() => handleWithBreakTime(30)}
            className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white"
          >
            <p className="lowercase">30m</p>
          </button>
          <button
            onClick={() => handleWithBreakTime(40)}
            className="btn btn-circle btn-outline btn-warning focus:bg-amber-500 focus:text-white ml-5"
          >
            <p className="lowercase">40m</p>
          </button>
        </div>
      </div>
      {/* time counted section  */}
      <div className="mt-10 ml-5 w-80 mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Gymnastic Details</h2>
        </div>

        <div className="flex justify-between p-4 border-solid border-2 border-amber-500 mt-3 rounded-lg">
          <h2 className="text-xl font-semibold">Gymnastic Time</h2>
          <p>
            <span className="text-amber-500 font-extrabold text-lg">
              {total + " "}
            </span>
            minutes
          </p>
        </div>

        <div className="flex justify-between p-4 border-solid border-2 border-amber-500 mt-3 rounded-lg">
          <h2 className="text-xl font-semibold">Break Time</h2>
          <p>
            <span className="text-amber-500 font-extrabold text-lg">
              {addbreak + " "}
            </span>
            minutes
          </p>
        </div>
      </div>
      {/* activities done section  */}
      <div className="mt-10">
        <button
          onClick={handleActivity}
          className="btn btn-wide btn-success border-amber-500 btn-outline focus:bg-amber-500 block mx-auto"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Activities;
