import React from "react";

const Main = (props) => {
  const { name, img, discription, time, age } = props.list;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Main;
