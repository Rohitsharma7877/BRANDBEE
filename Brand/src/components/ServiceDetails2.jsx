import React, { useEffect, useRef } from 'react';
import './serviceDetails.css'
import { MdArrowOutward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const ServiceDetails2 = () => {

    const containerRef = useRef();
    const navigate = useNavigate();

    const handleClick = (id) => {
      if (id === "letstalk") {
        console.log(id);
        navigate("/letstalk");
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
    <div className='serviceDetails-main1'>
        <div className='serviceDetails-main2'>
            <div className='serviceDetails-heading'>
                <div className='serviceDetails-heading1'>
                <div
      ref={containerRef}
      style={{
        whiteSpace: 'pre-line',
        height: '195px',
        display: 'block',
        opacity: 0, 
        transform: 'translateY(20px)', 
        animation: 'none',
      }}
    >
                    <h1>
                    Your brand identity speaks for
                   <br/> you. We build your identity with
                   <br/>PROMISE OF QUALITY AND
                   <br/>RELIABILITY
                    </h1>
                    </div>
                </div>
                <div className='serviceDetails-heading1'>
                    <div className='serviceDetails-banner-btn'>
                        <button onClick={()=>handleClick("letstalk")} className='serviceDetails-banner-btn2'>Ready To Bee Everything? <span><MdArrowOutward /></span></button>
                    </div>
                </div>
            </div>
            <div className='serviceDetails-imagee'>
                <div className='serviceDetails-circle'>
                    <div className='serviceDetails-circle1'>

                    </div>
                </div>
                <div className='serviceDetails-image'>
                    <img src='https://thebrandbee.com/assets/imgs/Brand-solution/Brand-identity/950X500.jpg' alt=''/>
                </div>
            </div>
            <div className='serviceDetails-paragh'>
                <div className='serviceDetails-paragh1'>
                    <p>Our brand strategy service is like a thrilling <br/>rollercoaster ride that takes your business on a <br/>journey of self-discovery and market domination.<br/> Our team of quirky strategists provides persona and <br/>audience consulting to ensure your brand <br/>speaks the language of your target customers. <br/>We'll craft a compelling brand positioning that <br/>sets you apart from the crowd, infuse your brand <br/>with a unique DNA, and design a solid brand <br/>architecture that supports your growth</p>
                </div>
                <div className='serviceDetails-paragh1'>
                <p>With our visionary approach, we'll help define <br/>your mission and vision statements, shape your <br/>brand's voice and personality, and conduct market <br/>research to uncover hidden opportunities. Get <br/>ready to buckle up and watch your brand soar to <br/>new heights with our exhilarating brand strategy<br/> service.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ServiceDetails2
