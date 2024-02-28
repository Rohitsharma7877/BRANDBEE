import React, { useEffect, useRef } from 'react';
import './articles.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

const Articles = () => {
    const containerRef = useRef();
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "wethink") {
      console.log(id);
      navigate("/wethink");
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
    <div className='article-main'>
        <div className='article-main2'>
            <div className='article-blog'>
                <div className='blog1'>
                    <div className='recent-blog'>
                        <h1>Recent Blog</h1>
                    </div>
                </div>
                <div className='blog2'>
                <div className='recent-blog2'>
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
                <h1>Whats New?
                    <br/>News and Blogs</h1>
                    </div>
                </div>
                    
                </div>
                <div className='blog3'>
                    <div className='recent-blog3'>
                        <p>
                        We don't mind sharing the secret.
                        Read our blogs and stay updated
                        about the latest trends of the
                        digital world.</p>
                    </div>
                    {/* </div> */}
                </div>
                <div className='blog4'>
                    <div className='recent-blog4'>
                    <button onClick={()=>handleClick("wethink")} className='recent-btn'>All Articles<span><FaArrowRightLong /></span> </button>
                    </div>
                </div>
            </div>
            <div className='article-blog2'>
                <div className='article-role1'>
                    <div className='article-imge'>
                        <img src='https://thebrandbee.com/admin/images/posts/corporate_communications_agency.webp' alt=''/>
                    </div>
                </div>
                <div className='article-role2'>
                    <div className='article-date'>
                        <h1>23/12/2023</h1>
                    </div>
                </div>
                <div className='article-role3'>
                    <div className='article-write'>
                        <h1>The Role Of A Corporate 
                        <br/>Communications Agency In 
                        <br/>The Age Of Social Media</h1>
                    </div>
                </div>
            </div>
            <div className='article-blog2'>
                <div className='article-role1'>
                    <div className='article-imge'>
                        <img src='https://thebrandbee.com/admin/images/posts/brand_identity_agency.webp' alt=''/>
                    </div>
                </div>
                <div className='article-role2'>
                    <div className='article-date'>
                        <h1>10/12/2023</h1>
                    </div>
                </div>
                <div className='article-role3'>
                    <div className='article-write'>
                        <h1>Innovative Approaches 
                        <br/>Acquired By A Brand 
                        <br/>Agency In The Digital Age</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles