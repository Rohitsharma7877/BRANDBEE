import React, { useEffect, useRef } from 'react';
import './imageslide.css'


const Imageslide = () => {

  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 10;

      if (isVisible) {
        container.style.animation = 'fadeInUp 1s forwards';
      } else {
        container.style.animation = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className='image-word'>
            <div
                ref={containerRef}
                style={{
                  whiteSpace: 'pre-line',
                  height: '150px',
                  display: 'block',
                  opacity: 0, 
                  transform: 'translateY(40px)', 
                  animation: 'none',
                }}
              >
              <h2>We are passionate to create connected brands and campaigns to enable stable
              <br/>and successful relationships between businesses and customers.</h2>
            </div>

   <div className='image-main'>  
      <div className='image-main2'>       
                <div className='img'>
                    {/* <img src='https://thebrandbee.com/assets/imgs/home/DJB.webp' alt='' /> */}
                </div>
                <div className='image-grid2'>
                    <div className='grid1'>
                        <p>
                        Our award-winning team uses strategy, design, SEO,
paid ads, and social media to connect with current
and potential customers, generate more leads, and
prepare your business for future growth.
<br/>
<br/>
We can help you with the latest high tech solutions;
thanks to our company culture, which is built on
everyday learning and self-improvement from each
and every single task that we do
                        </p>
                        
                    </div>
                    <div className='grid2'>
                      
                        <h1>Deeptanshu Bansal - Director, The Brand Bee</h1>
                      
                    </div>
                    <div className='grid3'>
                      <img src='https://thebrandbee.com/assets/imgs/sin.webp' alt=''/>
                    </div>  
                </div>
                <div className='image-grid3'>
                  <img src='https://thebrandbee.com/assets/imgs/home/DJB-side.webp' alt=''/>
                </div>     
         </div>
      </div>
 </div>
   
  )
}

export default Imageslide