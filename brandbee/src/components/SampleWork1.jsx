import React from "react";
import "./samplework.css";
// import { Parallax } from "react-parallax";

import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import service4 from "./assets/service4.jpg";
import service5 from "./assets/service5.jpg";

const SampleWork1 = () => {
  return (
    <div className="smplwrk-main1">
      <div className="smplwrk-main2">
        <div className="smplwrk-box1">
          <div className="smplwrk-box1-line1">
            <div className="smplwrk-box1-line"></div>
            <div className="smplwrk-box1-word">
              <h1>SAMPLE</h1>
            </div>
          </div>
          <div className="smplwrk-box1-line2">
            <h1>Work</h1>
          </div>
          <div className="smplwrk-box1-line3">
            <div className="smplwrk-box1-linee"></div>
            <div className="smplwrk-box1-pargh">
              <p>
                View some of our recent shortlisted and awesome work that we
                created for our happy clients.
              </p>
            </div>
          </div>
        </div>
        <div className="smplwrk-box2">
          <img src={service1} alt="" />
          <img src={service2} alt="" />
          <img src={service3} alt="" />
          <img src={service4} alt="" />
          <img src={service5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SampleWork1;
