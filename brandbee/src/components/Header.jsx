import React from 'react'
import './header.css'
// import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='main-header'>
        <div className='main-header2'>
            <div className='header-box'>
                <div className='header-bee'>
                    <h1>BEE</h1>
                </div>
                <div className='header-line'></div>
            </div>
            <div className='header-ever'>
                <div className='header-write'>
                    <h1>EVERY</h1>
                </div>
                <div className='header-video'>
                 <button className='header-video2'>
                    <video autoPlay loop muted>
                        <source src='https://thebrandbee.com/assets/video/home-video.mp4' type='video/mp4' />  
                    </video>
                 </button>
                </div>
            </div>
            <div className='header-though'>
                <div className='header-though1'>
                    <h1>Digital Marketing Agency in Gurgaon</h1>
                   
                   <br/><br/> <p>Our innovation brand and digital
                    <br/>solution Define the blueprint| Ignite 
                    <br/>the New| Refresh the old|Tell your
                    <br/>Story| Create the right Buzz| and Gets
                    <br/>you the right ROI| So that you can Bee 
                    <br/>Relevant. We are The Brand Bee and We
                    <br/>buzz together to get everyone talking
                    <br/>so you can Bee Everything. 
                    </p>
                </div>
                <div className='header-though2'>
                    <h1>THING</h1>
                </div>
            </div>
            <div className='header-imge'>
                <div className='header-imge1'>
                    <div className='header-arrow'><strong><FaArrowDownLong /></strong></div>
                </div>
                <div className='header-imge2'>
                    <img src='https://thebrandbee.com/assets/imgs/home/section-1.webp' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header


