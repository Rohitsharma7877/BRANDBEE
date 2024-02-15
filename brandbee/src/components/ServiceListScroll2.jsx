import React, { useEffect, useRef } from 'react';
import './serviceListScroll.css'
import { RxDotFilled } from 'react-icons/rx'
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'



const ServiceListScroll2 = () => {
const [active,setActive]=useState(11)

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
                <button onClick={(e)=>handlechange(11)}><h1 style={{color:active===11?"white":"gray"}}> Website & Mobile App Development</h1></button>
                </div>
                <div className='serviceListScroll-write1'>
               <button onClick={(e)=>handlechange(12)}><h1 style={{color:active===12?"white":"gray"}}>Social Media  Marketing</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(13)}><h1 style={{color:active===13?"white":"gray"}}>Search Engine Optimisation (SEO)</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(14)}><h1 style={{color:active===14?"white":"gray"}}>Content Marketing</h1></button>    
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(15)}><h1 style={{color:active===15?"white":"gray"}}>Performance Marketing</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(16)}><h1 style={{color:active===16?"white":"gray"}}>Community / Influencer Marketing</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(17)}><h1 style={{color:active===17?"white":"gray"}}>Video Marketing</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(18)}><h1 style={{color:active===18?"white":"gray"}}>Email Marketing</h1></button> 
                </div>
                <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(19)}><h1 style={{color:active===19?"white":"gray"}}>Online Reputation Management</h1></button>
                </div>
                {/* <div className='serviceListScroll-write1'>
                <button onClick={(e)=>handlechange(10)}><h1 style={{color:active===10?"white":"gray"}}>Marketing Automation</h1></button>
                </div> */}
            </div>
        </div>


        <div className='serviceListScroll-box2'>
            <div className={`serviceListScroll-box2-image11 ${ active === 11 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image12 ${ active === 12 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image13 ${ active === 13 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image14 ${ active === 14 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image15 ${ active === 15 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image16 ${ active === 16 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image17 ${ active === 17 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image18 ${ active === 18 ? "active" : "" }`}> </div>
            <div className={`serviceListScroll-box2-image19 ${ active === 19 ? "active" : "" }`}> </div>
            {/* <div className={`serviceListScroll-box2-image10 ${ active === 10 ? "active" : "" }`}> </div> */}
        </div>


        <div className='serviceListScroll-box3'>
            <div className={`serviceListScroll-box3-text ${ active === 11 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Website & Mobile App Development</h1>
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
                <button onClick={()=>handleChange("websitemobile")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 12 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Social Media <br/>Marketing</h1>
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
                <button onClick={()=>handleChange("socialmedia")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 13 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Search Engine Optimisation (SEO)</h1>
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
                <button onClick={()=>handleChange("searchengine")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 14 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Content Marketing</h1>
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
                <button onClick={()=>handleChange("contentmarketing")}  className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 15 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Performance Marketing</h1>
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
                <button onClick={()=>handleChange("performancemarketing")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 16 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Community / Influencer Marketing</h1>
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
                <button onClick={()=>handleChange("communityinfluencer")}  className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 17 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Video Marketing</h1>
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
                <button onClick={()=>handleChange("videomarketing")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 18 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Email Marketing</h1>
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
                <button onClick={()=>handleChange("emailmarketing")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

            <div className={`serviceListScroll-box3-text ${ active === 19 ? "active" : "" }`}>
                <div className='serviceListScroll-box3-heading1'>
                    <h1>Online Reputation  Management</h1>
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
                <button onClick={()=>handleChange("onlinereputation")} className='btn-startedd'>Get Quote Today<span><FaArrowRightLong /></span> </button>
                </div>
            </div>

           
            
        </div>

        
    </div>
  )
}

export default ServiceListScroll2