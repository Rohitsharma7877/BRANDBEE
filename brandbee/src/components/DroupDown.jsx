import React, { useState } from "react";
import "./droupDown.css";
import { GoArrowRight } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DroupDown = () => {
  const navigate = useNavigate();
  const [removeHover, setRemoveHover] = useState(false);

  const handlechange = (id) => {
    if (id === "brandsolution" || id === "digitalMarket") {
      console.log(id);
      navigate(`/${id}`);
      window.scrollTo(0, 0);
    } else {
      console.log(id);
      navigate(`/service/${id}`);
      window.scrollTo(0, 0);
    }
    // Remove hover effect
    setRemoveHover(true);
  };

  return (
    <div className="droup-main1">
      <div className="droup-main2">
        <div className="droup-box1">
          <div className="droup-box1-tags">
            <p>
              <GoArrowRight />
            </p>
            <button onClick={() => handlechange("brandsolution")}>Brand Solutions</button>
          </div>
          {/* <hr/> */}
          <div className="droup-box1-list">
            <ul>
              {/* <button> */}
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandstrategy")} >
                  <h1>Brand Strategy / Positioning</h1>
                </button>
              </li>
              {/* </button> */}

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandidentity")}>
                  <h1>Brand Identity Development</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("corporatecommunication")} >
                  <h1>Corporate Communications</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandrefresh")} >
                <h1>Brand Refresh / Rebranding</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandcommunication")} >
                <h1>Brand Communication & Design</h1>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="droup-box2">
          <div className="droup-box2-list2">
            {/* <hr/>  */}
            <ul>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("contentdevelopment")} >
                <h1>Content Development Services
</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandexperience")} >
                <h1>Brand Experience Design</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("photoshoots")} >
                <h1>Photoshoots & Video Shoots</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("brandconformance")} >
                <h1>Brand Conformance (IPR)</h1>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="droup-box3">
          <div className="droup-box3-tags3">
            <p>
              <GoArrowRight />
            </p>
            <button onClick={() => handlechange("digitalMarket")}>Digital Market</button>
          </div>
          {/* <hr/> */}
          <div className="droup-box3-list3">
            <ul>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("websitemobile")} >
                <h1>Website & Mobile App Development</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("socialmedia")} >
                <h1>Social Media Marketing</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("searchengine")} >
                <h1>Search Engine Optimisation</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("contentmarketing")} >
                <h1>Content Marketing</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("performancemarketing")} >
                <h1>Performance Marketing</h1>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="droup-box4">
          <div className="droup-box4-list4">
            {/* <hr/>  */}
            <ul>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("communityinfluencer")} >
                <h1>Community / Influencer Marketing</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("videomarketing")} >
                <h1>Video Marketing</h1>
                </button>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("emailmarketing")} >
                <h1>Email Marketing</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("onlinereputation")} >
                <h1>Online Reputation Management</h1>
                </button>
              </li>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <button onClick={()=>handlechange("marketingautomation")} >
                <h1>Marketing Automation</h1>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroupDown;
