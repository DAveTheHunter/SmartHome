import { useState } from "react";
import "./main.css";
const Main = () => {
  const [leackage, setLeackage] = useState('false')
  const [blockage, setBlockage] = useState('false')
  const [windowClosed, setWindowClosed] = useState('true')
  const [doorClosed, setDoorClosed] = useState('Closed')
  const [bulb1, setBulb1] = useState('Off')
  const url = '127.0.0.1/5000'
  const fetchData = async (url) => {
    const data = await fetch(url)
    const responce = await data.json()
    console.log(responce)
  }
  fetchData(url);
  const handleDisplay = () => {
     
  }
  return (
    <div>
      <div className="container">
        <h1 id="header">Home Control</h1>
        <div className="status">
          <h2>
            Motion: <span id="motion"></span> | Auto-Off in:{" "}
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
