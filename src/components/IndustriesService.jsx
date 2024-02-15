import React, { useEffect, useRef } from 'react';
import './industriesService.css'
import { BsDot } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'

const IndustriesService = () => {
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
    <div className='industriesService-main1'>
        <div className='industriesService-main2'>
            <div className='industriesService1'>

                <div className='industriesService1-box1'>
                    <div className='industriesService1-image1'>
                        <img src='https://thebrandbee.com/assets/imgs/industries-we-serve/img1-435x472.jpg' alt=''/>
                    </div>
                    <div className='industriesService1-image2'>
                    <img src='https://thebrandbee.com/assets/imgs/industries-we-serve/img2-220x344.jpg' alt=''/>
                    </div>
                </div>
                <div className='industriesService1-box2'>
                    <div className='industriesService1-title'>
                        <h1>Industries <br/> We Serve</h1>
                    </div>
                    <div className='industriesService1-write'>
                        <div className='industriesService1-line'></div>
                        <div className='industriesService1-paragh'>
                            <p>Buzz into Success with the Brand & Business <br/>Alignment Experts at The Brand Bee
                            <br/>Connect with us to Strategize, Design and 
                            <br/>Create a Buzz-Worthy Brand</p>
                        </div>
                    </div>
                </div>
                <div className='industriesService1-box3'>
                    <div className='industriesService1-box3-image'>
                        <img src='https://thebrandbee.com/assets/imgs/industries-we-serve/img3-459x414.jpg' alt=''/>
                    </div>

                    <div className='industriesService1-box3-word'>
                        <div className='industriesService1-box3-word1'>
                            <div className='industriesService1-box3-dot'>
                        <p><BsDot /></p> 
                            </div>
                            <div className='industriesService1-box3-dot2'>
                                <h2>Planning</h2>
                            </div>
                        </div>
                        <div className='industriesService1-box3-word2'>
                        <div className='industriesService1-box3-dot'>
                        <p><BsDot /></p> 
                            </div>
                            <div className='industriesService1-box3-dot2'>
                                <h2>Implementation</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='industriesService2'>
                <div className='industriesService2-box1'>
                    <div className='industriesService2-box1-title'>
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
                        <h1>Our Hive's Expertise
                        Knows No Limits:
                        Issues That We Address</h1>
                        </div>
                    </div>
                    <div className='industriesService2-box1-image-box'>
                        <div className='industriesService2-box1-image'>
                            <img src='https://thebrandbee.com/assets/imgs/industries-we-serve/img4-530x650.jpg' alt=''/>

                        </div>
                    </div>
                </div>
                <div className='industriesService2-box2'>
                    <div className='industriesService2-pragh'>
                        <p>Within the buzzing hive of our expertise, we gracefully navigate through the fields of countless industries and brand issues, large and small, adeptly untangling the thorny brand issues that hinder the path to competitive advantage and prosperous growth. As busy bees in the realm of business, we specialize in resolving the challenges that often swarm organizations, building a solid foundation upon which success thrives.</p>
                    </div>
                    <div className='industriesService2-pragh-list'>
                    <div className='industriesService2-list-name' >
                            <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Reaching new customers and capturing new markets</h4>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Making sure that the communication to all the stakeholders is done with the right message and medium </h4>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Innovating to create fresh and engaging highly valued products and services</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Getting to the next level, gaining a new competitive position and driving growth</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Make sure that the brand image is growing in line with the business growth</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Ensuring that your brand is consistently understood by all stakeholders while ensuring adherence by the internal team</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Making sure that all brand assets are correctly registered</h4>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Creating a new website for the business and crafting a compelling digital experience for the brand</h4>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Creating a better way to organise brands and a systematic way to make decisions</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Refreshing your brand and better communicating what you stand for</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Building a customer-focused organization and delivering highly valued customer experiences</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Activating your brand and bringing it to life at key touchpoints</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Tapping market insights and making fact-based decisions to quickly resolve an issue</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Bridging the gap between internal and external perceptions of the business</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Ensuring the employees understand your brand and actually deliver on it</h4>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h4>Getting leaders on the same page and building a game plan for the future</h4>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default IndustriesService