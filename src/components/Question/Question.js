import React from "react";

const Question = () => {
  return (
    <div>
      <h1 className="text-center text-6xl font-bold mb-10 text-amber-500">
        React
      </h1>
      <div className="flex flex-col text-center mb-10">
        {/* 1st ques */}
        <label
          htmlFor="my-modal"
          className="pb-14 lg:pb-0 my-10 btn modal-button text-lg text-amber-500"
        >
          How does React Work?
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">How does React Work?</h3>
            <p className="py-4">
              React uses a declarative paradigm that makes it easier to reason
              about your application and aims to be both efficient and flexible.
              It designs simple views for each state in your application, and
              React will efficiently update and render just the right component
              when your data changes.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
        {/* 2ns ques */}
        <label
          htmlFor="my-modal2"
          className="pb-14 lg:pb-0 my-10 btn modal-button text-lg text-amber-500"
        >
          Differnce between Props and Stats?
        </label>

        <input type="checkbox" id="my-modal2" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Differnce between Props and Stats?
            </h3>
            <p className="py-4">
              Props: Props are known as properties it can be used to pass data
              from one component to another. Props cannot be modified,
              read-only, and Immutable. <br></br> State: The state represents
              parts of an Application that can change. Each component can have
              its State. The state is Mutable and It is local to the component
              only.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal2" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
        {/* 3ns ques */}
        <label
          htmlFor="my-modal3"
          className="pb-14 lg:pb-0 my-10 btn modal-button text-lg text-amber-500"
        >
          Where we can Use useEffect function?
        </label>

        <input type="checkbox" id="my-modal3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Where we can Use useEffect function?
            </h3>
            <p className="py-4">
              useEffect () is a react hook which you will use most besides
              useState (). You’ll often use this hook whenever you need to run
              some side effects (like sending http requests) in your component.
              So, there comes a lot of questions: what are these side effects,
              when to use the useEffect () hook and how to write the syntax.
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal3" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
