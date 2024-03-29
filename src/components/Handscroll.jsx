import React, { useEffect, useRef } from 'react';
import './handscroll.css'
import './scrollanimation.css'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




const Handscroll = () => {

  const containerRef = useRef();
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "whoweare") {
      console.log(id);
      navigate("/whoweare");
      window.scrollTo(0, 0);
      
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        container.style.animation = 'fadeInUp 1s forwards';
      } else {
        container.style.animation = 'none';
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
    <div className='banner'>
        <div className='banner2'>
            
            <div className='banner-imge'>
            {/* <img src='https://thebrandbee.com/assets/imgs/home/section-2.webp' alt=''/> */}
            </div>
             <div className='banner-heading'>
                <div className='banner-phra'>
                <div
                    ref={containerRef}
                    style={{
                      whiteSpace: 'pre-line',
                      height: '195px',
                      display: 'block',
                      opacity: 0, 
                      transform: 'translateY(40px)', 
                      animation: 'none',
                    }}
                  >
                    <p>EVERYTHING IS NOT
                       <br/> ABOUT MARKETING.
                       <br/> SOMETIMES YOU JUST
                       <br/> HAVE TO BEE YOU.</p>
                       </div>
                </div>
                <div className='banner-phra2'>
                
                    <p>We are a team of crazy marketers, designers,
developers, writers, strategists, in short Bees
who love challenges. We do everything to make
sure that you bee your best version. We align
and transform your business goals into a
focused brand voice, communicate them
through engaging digital marketing strategies
and integrate the exclusive brand experience.

<br/>
<br/>
People think of us as an ad agency, a creative
agency, a marketing agency, a digital marketing
company, a branding company, the business
model of the future and a bunch of crazy
dreamers. The truth is that, we are all of these.
In this multi-channel dynamic world,
businesses need innovative ways to connect
with their audience; that's where we can help
you address issues in almost all these domains
and Bee Everything.
</p>
                       
                </div>
                <div className='handscroll-btn'>
                  <button onClick={()=>handleClick("whoweare")}  className='handscroll-btn2'>Explore Us <span><MdArrowOutward /></span></button>
                </div>
                {/* <div className='banner-btn'>
                    <button className='banner-btn2'>Explore Us <span><MdArrowOutward /></span></button>
                </div> */}
             </div>           
        </div>
    </div>

  )
}

export default Handscroll