import React, { useEffect, useRef } from 'react';
import './service.css'

const Service = () => {

  const containerRef = useRef();
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
    <div className='main'>
      <div className='main-grid'>
      {/* <div></div>
      <div></div> */}
        <div className='box-serv'>
            <div className='box-serv-pargh'> 
              <p>Services</p>
            </div>

            <div
                    ref={containerRef}
                    style={{
                      whiteSpace: 'pre-line',
                      height: '105px',
                      display: 'block',
                      opacity: 0, 
                      transform: 'translateY(40px)', 
                      animation: 'none',
                    }}
                  >
            <h1>What Can We Do Together?</h1>
            </div>
        </div>
        <div className='box-trd'>
            <p>Trends, Technology and Tactics are</p>
            <p>never stagnant and neither are we</p>
        </div>


        <div className='box-brd'>
            {/* <div className='box-bor'> 
                <div className='brnd'><h1>BRANDS<br/>SOLUTIONS</h1></div>
                   <div>
                    <p>We are your trusted PARTHER IN BRANDING, offering</p>
                    <p>tailored solutions to build a STRONG BRAND IDENTITY</p>
                    <p>that resonates with your audience.</p>
                  </div>               
            </div> */}


            <div className='box-bor2'> 
                <div className='brnd'><h1>BRANDS<br/>SOLUTIONS</h1></div>
                   <div>
                    <p>We are your trusted PARTHER IN BRANDING, offering</p>
                    <p>tailored solutions to build a STRONG BRAND IDENTITY</p>
                    <p>that resonates with your audience.</p>
                    
                  </div>               
            </div>     

 </div>




        <div className='box-digt'>
            <div className='box-dig'>
                <div className='digts'>
                    <h1>DIGITAL
                    <br/>SOLUTIONS</h1>
               </div>
               <div>
                    <p>We are your trusted PARTHER IN BRANDING, offering</p>
                    <p>tailored solutions to build a STRONG BRAND IDENTITY</p>
                    <p>that resonates with your audience.</p>
            </div>
            </div>                
        </div>
      </div>
    </div>
  )
}

export default Service