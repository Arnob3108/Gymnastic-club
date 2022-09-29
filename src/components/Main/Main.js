import React from "react";

const Main = (props) => {
  const { name, img, discription, time, age } = props.list;
  return (
    <div className="w-96 h-full items-center border-amber-500 border-solid border-2 rounded-xl flex flex-col p-3">
      <img className="w-full h-72 rounded-xl mb-2" src={img} alt="" />
      <div>
        <h1 className="text-3xl mb-5 font-bold">{name}</h1>
        <p className="text-lg font-medium mb-5">{discription}</p>
        <p className="text-xl font-semibold">Age: {age}</p>
        <p className="text-xl font-semibold">Duration: {time}M</p>
      </div>
      <button className="btn btn-outline btn-success">Add Activitis</button>
    </div>
  );
};

export default Main;
