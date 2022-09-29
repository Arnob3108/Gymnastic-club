import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import "./Home.css";

const Home = () => {
  const [lists, setList] = useState([]);
  useEffect(() => {
    fetch("gymnastics.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <div className="activities-container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ml-28">
        {lists.map((list) => (
          <Main key={list.id} list={list}></Main>
        ))}
      </div>
      <div>
        <h1>cart</h1>
      </div>
    </div>
  );
};

export default Home;
