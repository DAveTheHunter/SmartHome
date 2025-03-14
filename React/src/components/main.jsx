import React, { useEffect, useState } from "react";
import "./main.css";

const Main = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [leakage, setLeakage] = useState("false");
  const [blockage, setBlockage] = useState("false");
  const [motion, setMotion] = useState("false");
  const [doorClosed, setDoorClosed] = useState("Closed");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/alerts');
        if (!response.ok) {
          throw new Error("Connection problem");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data) {
      handleDisplay();
    }
  }, [data]);

  console.log(data);

  const handleDisplay = () => {
    if (data.event === "blockage_alert") {
      setBlockage(data.message === "Blockage detected in the system!" ? "true" : "false");
    }
    if (data.event === "leakage_alert") {
      setLeakage(data.message === "Water leakage detected!" ? "true" : "false");
    }
    if (data.event === "motion_detected") {
      if (data.message === "Motion detected near the door!") {
        setMotion("true");
        setDoorClosed("Open");
      } else {
        setMotion("false");
        setDoorClosed("Closed");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <h1 id="header">Home Control</h1>
        <div className="status">
          <h2>
            Motion: <span id="motion">{motion}</span> | Auto-Off in:{" "}
            <span id="time"></span>
          </h2>
        </div>
        <div className="actions">
          <div className="out" id="out-1">
            Leakage: <span id="leakage">{leakage}</span>
          </div>
          <div className="out" id="out-2">
            Blockage: <span id="blockage">{blockage}</span>
          </div>
          <div className="out" id="out-4">
            Door: <span id="door">{doorClosed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
