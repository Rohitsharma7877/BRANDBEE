import React, { useEffect, useState, useRef } from 'react';
import './serviceListScroll.css'
import { RxDotFilled } from 'react-icons/rx'
import { FaArrowRightLong } from 'react-icons/fa6';
// import {  } from 'react';
import { useNavigate } from 'react-router-dom';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'



const ServiceListScroll = () => {
const [active,setActive]=useState(1)
const navigate = useNavigate();
  const [removeHover, setRemoveHover] = useState(false);

const handleChange = (id) => {
    if (id === "brandsolution" || id === "digitalMarket") {
      console.log(id);
      navigate(`/${id}`);
      window.scrollTo(0, 0);
    } else {
      console.log(id);
      navigate(`/service/${id}`);
      window.scrollTo(0, 0);
    }
    // Remove hover effect
    setRemoveHover(true);
  };

useEffect(()=>{
    console.log(active,"active")
    if(active){
console.log("active")
    }
},[active])
    
const handlechange=(val)=>{
    setActive(val)
}

  return (
    <div className='serviceListScroll-main'>
        <div className='serviceListScroll-box1'>
            <div className='serviceListScroll-write'>
                <div className='serviceListScroll-write1 ' >
                <button onClick={(e)=>handlechange(1)}><h1 style={{color:active===1?"white":"gray"}}>Brand Strategy / Positioning</h1></button>
                </div>
                <div className='serviceListScroll-write1'>
               <button onClick={(e)=>handlechange(2)}><h1 style={{color:active===2?"white":"gray"}}>Brand Identity Development</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(3)}><h1 style={{color:active===3?"white":"gray"}}>Corporate Communications</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(4)}><h1 style={{color:active===4?"white":"gray"}}>Brand Refresh / Rebranding</h1></button>    
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(5)}><h1 style={{color:active===5?"white":"gray"}}>Brand Communication & Design</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(6)}><h1 style={{color:active===6?"white":"gray"}}>Content Development Services</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(7)}><h1 style={{color:active===7?"white":"gray"}}>Brand Experience Design</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(8)}><h1 style={{color:active===8?"white":"gray"}}>Photoshoots & Video Shoots</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(9)}><h1 style={{color:active===9?"white":"gray"}}>Brand Conformance (IPR)</h1></button>
                </div>
            </div>
        </div>


        <div className='serviceListScroll-box2'>
            <div className={`serviceListScroll-box2-image1 ${ active === 1 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image2 ${ active === 2 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image3 ${ active === 3 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image4 ${ active === 4 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image5 ${ active === 5 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image6 ${ active === 6 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image7 ${ active === 7 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image8 ${ active === 8 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image9 ${ active === 9 ? "active" : "" }`}> </div>
        </div>


        <div className='serviceListScroll-box3'>
            <div className={`serviceListScroll-box3-text ${ active === 1 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Strategy/Positioning</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandstrategy")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 2 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Identity Development</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>At The Brand Bee, we're masters of the creative hive, 
                    <br/>expertly weaving threads of imagination to craft brand 
                    <br/>identities that are as unique as a rainbow-coloured 
                    <br/>unicorn. Our team combines unmatched quality and 
                    <br/>unwavering reliability to conjure up a visual feast that 
                    <br/>will make your competitors' jaws drop faster than a 
                    <br/>magician's rabbit disappearing act. Let us sprinkle a 
                    <br/>touch of our brand magic on your business, and watch 
                    <br/>as your brand identity takes flight like a mythical 
                    <br/>creature on a quest for world domination!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Naming</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Story</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Visual Language</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Packaging Design</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Logo</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand stationery</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Imagery</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Identity Usage Guidelines</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandidentity")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 3 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Corporate Communication</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>
                   <br/> We're quirky linguistic wizards, infusing artistry and 
                   <br/>strategy to craft brand communications that captivate. 
                   <br/>Our communication expertise creates authentic and 
                   <br/>effective corporate communication, building stronger 
                   <br/>relationships between your business and your 
                   <br/>audience. Let us uncover the true essence of your 
                   <br/>brand, unleashing its captivating personality and 
                   <br/>leaving a trail of awestruck customers in its wake.

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Internal Communication</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("corporatecommunication")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 4 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Refresh/Rebranding</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandrefresh")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 5 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Communication & Design</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandcommunication")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 6 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Content Development</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("contentdevelopment")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 7 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Experience Design</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandexperience")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 8 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Photoshoots & Video Shoots</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("photoshoots")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 9 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Brand Conformance (IPR)</h1>
                </div>
                <div className='serviceListScroll-box3-heading2'>
                    <p>Unleash the Power of Buzz with The Brand Bee's Brand 
                    <br/>Strategy Service! We're not your average strategy gurus; 
                    <br/>we're more like creative alchemists who sprinkle a dash 
                    <br/>of stardust on your business. With our strategic 
                    <br/>wizardry and a pinch of whimsy, we'll transform your 
                    <br/>brand into a captivating story that'll have your 
                    <br/>competitors buzzing with envy!

</p>
                </div>
                <div className='serviceListScroll-box3-heading3'>
                    <div className='serviceListScroll-box3-list1'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Persona & Audience Consulting</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand DNA</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Vision & Mission Statements</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Audits</h1>
                                </li>

                                
                            </ul>
                    </div>
                    <div className='serviceListScroll-box3-list2'>
                    <ul>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Positioning</h1>
                                </li>
                                    
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Architecture</h1>
                                </li>
                                
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Voice & Personality</h1>
                                </li>
                                <li>
                                <p><RxDotFilled /></p>
                                    <h1>Brand Key</h1>
                                </li>

                                
                            </ul>
                    </div>
                </div>
                <div className='serviceListScroll-box3-heading4'>
                <button onClick={()=>handleChange("brandconformance")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>
            
        </div>

        
    </div>
  )
}

export default ServiceListScroll