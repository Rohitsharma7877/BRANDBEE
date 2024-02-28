import React, { useEffect, useRef } from "react";
import './speaker.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Speaker = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      if (id === "letstalk") {
        console.log(id);
        navigate("/letstalk");
        window.scrollTo(0, 0);
        
      }
    }


    const containerRef = useRef();

    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  
        if (isVisible) {
          container.style.opacity = 1;
          container.style.transform = "translateY(0)";
          container.style.animation = "fadeInUp 3s forwards";
        } else {
          container.style.opacity = 0;
          container.style.transform = "translateY(40px)";
          container.style.animation = "none";
        }
      };
  
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className='speaker-main'>
        <div className='speaker-main2'>
            <div className='speaker-imge'>
                <img src='https://thebrandbee.com/assets/imgs/home/CTA.webp' alt=''/>
            </div>
            <div className='speaker-img2'>
            <div
        ref={containerRef}
        style={{
          whiteSpace: "pre-line",
          height: "150px",
          display: "block",
          opacity: 0,
          transform: "translateY(40px)",
          animation: "none",
        }}
      >
                <h1>Let's make
                    <br/>something great
                   <br/> together</h1>
                   </div>
            </div>
            <div className='speaker-img3'> 
                    <div className='speaker-write'>
                        <h1>Still, waiting for us to make the first
                        <br/>MOVE? Don't BEE shy, get in TOUCH.</h1>
                    </div>
                    <button onClick={()=>handleClick("letstalk")} className='speaker-btn'>Begin Your Transformation Today<span><FaArrowRightLong /></span> </button>
            </div>
        </div>
    </div>
  )
}

export default Speaker