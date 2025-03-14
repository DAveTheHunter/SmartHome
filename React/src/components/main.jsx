import { useState } from "react";
import "./main.css";
const Main = () => {
<<<<<<< HEAD
  const [leackage, setLeackage] = useState('false')
  const [blockage, setBlockage] = useState('false')
  const [windowClosed, setWindowClosed] = useState('true')
  const [doorClosed, setDoorClosed] = useState('Closed')
  const [bulb1, setBulb1] = useState('Off')
  const url = '127.0.0.1/5000'
=======
  const [leackage, setLeackage] = useState("false");
  const [blockage, setBlockage] = useState("false");
  const [windowClosed, setWindowClosed] = useState("true");
  const [motion, setMotion] = useState("false");
  const [doorClosed, setDoorClosed] = useState("Closed");
  const [bulb1, setBulb1] = useState("Off");
  const url = "127.0.0.1:5000/api/alerts";
>>>>>>> 43f6e5c227c83759d26e72e60317bb386d053f81
  const fetchData = async (url) => {
    const data = await fetch(url);
    const responce = await data.json();
    console.log(responce);
  };
  fetchData(url);
  const handleDisplay = () => {
    if (responce.event === "blockage_alert") {
      if (responce.message === "true") setBlockage("true");
      else setBlockage("false");
    }
    if (responce.event === "leackage_alert") {
      if (responce.message === "true") setLeackage("true");
      else setLeackage("false");
    }
    if (responce.event === "motion_detected") {
      if (responce.message === "true") setMotion("true");
      else setMotion("false");
    }
    if (responce.event === "window_closed") {
      if (responce.message === "true") setWindowClosed("true");
      else setWindowClosed("false");
    }
    if (responce.event === "door_closed") {
      if (responce.message === "true") setDoorClosed("Closed");
      else setDoorClosed("Open");
    }
  };
  handleDisplay();
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
            Leackage: <span id="leackage"></span>
          </div>
          <div className="out" id="out-2">
            Blockage: <span id="blockage"></span>
          </div>
          <div className="out" id="out-3">
            Window: <span id="window"></span>
          </div>
          <div className="out" id="out-4">
            Door: <span id="door"></span>
          </div>
          <div className="out" id="out-6">
            Bulb1: <span id="bulb1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
