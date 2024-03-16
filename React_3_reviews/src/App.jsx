import React, { useState } from "react";
import './App.css';
import users from "./MOCK_DATA (1).json";

const App = () => {
  const [index, setIndex] = useState(0);

  const full_name = users[index].full_name;
  const job = users[index].job_title;
  const descr =  users[index].description;
  const image = users[index].image;

  const prevFunc = () => {
    if (index <= 0) 
      setIndex(() => users.length-1);
    else
      setIndex(() => index - 1);
  };


  const nextFunc = () => {
    if (index >= users.length - 1) 
      setIndex(0);
    else
      setIndex(index + 1);
  };

  const surpriseFunc = () => {
    let random = Math.floor(Math.random() * 5);
    setIndex(random);
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="image">
          
          <div className="back-img">
            <img src={image} alt="image" height={150} width={150}  />
          </div>
        </div>
        <div className="full_name">
          <h2>{full_name}</h2>
        </div>
        <div className="job_title">
          <h3>{job}</h3>
        </div>
        <div className="describe">
          <p>{descr}</p>
        </div>
        <div className="navigators">
          <button onClick={prevFunc}>prev</button>
          <button onClick={nextFunc}>next</button>
        </div>
        <div className="surprise">
          <button onClick={surpriseFunc}>Surprise</button>
        </div>
      </div>
    </div>
  );
};

export default App;
