import React, { useEffect, useRef } from 'react';
import './serviceDetails.css'
import { MdArrowOutward } from 'react-icons/md'
import './keyboard.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {

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
        <div>
        <div className='serviceDetails-heading'>
                <div className='serviceDetails-heading1'>
                <div
                  ref={containerRef}
                  style={{
                    whiteSpace: 'pre-line',
                    height: '150px',
                    display: 'block',
                    opacity: 0, 
                    transform: 'translateY(20px)', 
                    animation: 'none',
                  }}
                >
                    <h1>
                    We help you take the right
                   <br/> direction, each step carefully laid
                   <br/>with PRECISE PLANNING AND
                   <br/> EXECUTION.
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
                    <img src='https://thebrandbee.com/assets/imgs/Brand-solution/Brand-strategy/950X500.jpg' alt=''/>
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
        <div className='keyboard-main2'>
        {/* <div className='keyboard-box'> */}
        <div className='keyboard-imagee' >
                
                </div> 
                <div className='keyboard-texts'>
                  <div className='keyboard-texts1'>
                      <div className='keyboard-box'> </div>
                    <div className='keyboard-box-texts'>
                        <h1>Scared of committing with us?<br/>Have a look at these stats….</h1>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> 
                  <h1>94%</h1>
                  </div>
                    <div className='keyboard-box-texts2'>
                        <p>94% of customers are likely to show loyalty to a brand that <br/>offers complete transparency.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'>
                  <h1>77%</h1>
                   </div>
                    <div className='keyboard-box-texts2'>
                        <p>77% of B2B marketers say a well-defined brand strategy is <br/>crucial for any brand's growth.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'>
                  <h1>94%</h1>
                   </div>
                    <div className='keyboard-box-texts2'>
                        <p>94% of people said they’d be highly likely to recommend a<br/>brand they were emotionally engaged with.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> 
                  <h1>81%</h1>
                  </div>
                    <div className='keyboard-box-texts2'>
                        <p>81% of consumers across the globe said they need to be able to <br/>trust the brand they buy from.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> </div>
                    <div className='keyboard-box-texts2'>
                    <button  className='keyboard-btn-started'>Ready To Bee Everything<span><FaArrowRightLong /></span> </button>            
                    </div>
                  </div>  
                </div>   
        {/* </div> */}
               
        </div>
            
        </div>
        
    </div>
  )
}

export default ServiceDetails