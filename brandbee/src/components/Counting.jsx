import React, { useEffect, useState, useRef } from "react";
import "./counting.css";
import { HiOutlinePlusSm } from "react-icons/hi";
import CountUp from "react-countup";

const Counting = () => {
  const [startCounting, setStartCounting] = useState(false);
  const countingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  return (
    <div className="hero" ref={countingRef}>
      <div className="row">
        <div className="col">
          <div className="counter-box">
            <h2>
              <CountUp
                start={startCounting ? 0 : null}
                end={5}
                duration={2}
                separator=","
              />
            </h2>
            <span>K</span>
            <span className="pluss">
              <HiOutlinePlusSm />
            </span>
            <h4>
              Projects
              <br />
              Completed
            </h4>
          </div>
        </div>
        <div className="col">
          <div className="counter-box">
            <h2>
              <CountUp
                start={startCounting ? 0 : null}
                end={500}
                duration={2}
                separator=","
              />
            </h2>
            <span>
              <HiOutlinePlusSm />
            </span>
            <h4>
              Retainers
              <br />
              Serviced
            </h4>
          </div>
        </div>
        <div className="col">
          <div className="counter-box">
            <h2>
              <CountUp
                start={startCounting ? 0 : null}
                end={2}
                duration={2}
                separator=","
              />
            </h2>
            <span>K</span>
            <span>
              <HiOutlinePlusSm />
            </span>
            <h4>
              Happy
              <br />
              Customers
            </h4>
          </div>
        </div>
        <div className="col">
          <div className="counter-box">
            <h2>
              <CountUp
                start={startCounting ? 0 : null}
                end={12}
                duration={2}
                separator=","
              />
            </h2>
            <h4>
              Years
              <br />
              Experience
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
