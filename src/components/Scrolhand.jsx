import React, { useEffect, useRef } from 'react';
import './scrollanimation.css'

const Scrollhand = () => {
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
        height: '195px',
        display: 'block',
        opacity: 0, // Initially set opacity to 0
        transform: 'translateY(20px)', // Initial translateY for the fade-in effect
        animation: 'none', // Initial animation state
      }}
    >
     <h1 >Our Clients</h1>
    <p>
    WE DON'T BELIEVE IN MONOGAMY. WE KEEP ALL OUR CLIENTS HAPPY AT THE SAME TIME.
    </p>
    </div>
  );
};

export default Scrollhand;
