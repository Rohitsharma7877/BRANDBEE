import React from 'react'
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

  return (
    <div className='speaker-main'>
        <div className='speaker-main2'>
            <div className='speaker-imge'>
                <img src='https://thebrandbee.com/assets/imgs/home/CTA.webp' alt=''/>
            </div>
            <div className='speaker-img2'>
                <h1>Let's make
                    <br/>something great
                   <br/> together</h1>
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