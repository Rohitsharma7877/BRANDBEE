import React, { useState, useEffect } from 'react';
import './feature.css';
// import { MdArrowOutward } from 'react-icons/md';

const Feature = () => {
  const [fontSize, setFontSize] = useState(50); 
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {


    
    const handleScroll = () => {

      const elements = document.querySelectorAll('.zoomable-image');
      elements.forEach((element) => {
        const boundingBox = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

       
        if (boundingBox.top < windowHeight && boundingBox.bottom > 0) {
          element.classList.add('zoomed');
        } else {
          element.classList.remove('zoomed');
        }
      });
    

      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

     
      const newSize = 50 + currentPosition * 0.04; 
      setFontSize(newSize);
    };

   
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]); 

  return (
    <div className='future-main1'>
        {/* <div className='large-container' 
            style={{ fontSize: `${fontSize}px`, 
            background: 'lightgray', 
            padding: '350px' ,
            }}>
         <p>FUTURE</p>
          <div className='feature-btn'>
            <button className='feature-btn2'>All Case Studies <span><MdArrowOutward /></span></button>
          </div>
        </div> */}

          <div className='future-main2'>
               <div className='future-box-image1'>
                 <div className='future-image1'>
                  <img src='https://thebrandbee.com/assets/imgs/home/work-1.webp' alt=''/>
                 </div>
                 <div className='future-image2'>
                 <img src='https://thebrandbee.com/assets/imgs/home/work-3.webp' alt=''/>
                 </div>
                 <div className='future-image3'>
                 <img src='https://thebrandbee.com/assets/imgs/home/work-5.webp' alt=''/>
                 </div>
               </div>

              <div className='future-box-image2'>
               <div className='future-side-image1'>
                  <img src='https://thebrandbee.com/assets/imgs/home/work-2.webp' alt=''/>
                 </div>
                 <div className='future-side-image2'>
                 <img src='https://thebrandbee.com/assets/imgs/home/work-4.webp' alt=''/>
                 </div>
                 <div className='future-side-image3'>
                 <img src='https://thebrandbee.com/assets/imgs/home/work-6.webp' alt=''/>
                 </div>
          </div>
      </div>
  </div>
    
  );
};

export default Feature;
