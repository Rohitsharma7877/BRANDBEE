import React, { useEffect, useRef } from 'react';
import './scrollanimation.css'

const ScrollAnimation = () => {
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
    <div
      ref={containerRef}
      style={{
        whiteSpace: 'pre-line',
        height: '155px',
        display: 'block',
        opacity: 0, 
        
        transform: 'translateY(20px)', 
        animation: 'none',
      }}
    >
     <h1 >Our Clients</h1>
    <p>
    WE DON'T BELIEVE IN MONOGAMY. WE KEEP ALL OUR CLIENTS HAPPY AT THE SAME TIME.
    </p>
    </div>
  );
};

export default ScrollAnimation;
