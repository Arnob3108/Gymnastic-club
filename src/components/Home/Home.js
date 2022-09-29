import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import Main from "../Main/Main";
import Question from "../Question/Question";
import "./Home.css";

const Home = () => {
  const [lists, setList] = useState([]);
  const [timing, setTiming] = useState([]);

  useEffect(() => {
    fetch("gymnastics.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const handleActivities = (lists) => {
    const newTiming = [...timing, lists];
    setTiming(newTiming);
  };
  return (
    <div>
      <div className="activities-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ml-28 mt-10">
          {lists.map((list) => (
            <Main
              key={list.id}
              list={list}
              handleActivities={handleActivities}
            ></Main>
          ))}
          <div>
            <Question></Question>
          </div>
        </div>
        <div>
          <Activities timing={timing}></Activities>
        </div>
      </div>
    </div>
  );
};

export default Home;
