import React from 'react'
import './ourLeader.css'
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const OurLeader = () => {
  return (
    <div className='ourleader-main1'>
        <div className='ourleader-main2'>
            <div className='ourleader-box1'>
                <div className='ourleader-heading'>
                    <h1>Our
                    <br/>Leadership</h1>
                </div>
            </div>
            <div className='ourleader-box2'>
              <div className='ourleader-image'>
                {/* <img src='https://thebrandbee.com/assets/imgs/team/detail.jpg' alt=''/> */}
              </div>
              <div className='ourleader-paragh'>
                <div className='ourleader-paragh1'>
                  <h1>Deeptanshu Bansal</h1>
                </div>
                <div className='ourleader-paragh2'>
                  <h2>Founder & CEO</h2>
                </div>
                <div className='ourleader-paragh3'>
                  <p>
                   Introducing Deeptanshu Bansal, the visionary founder and CEO of 
                  <br/>The Brand Bee. Like a diligent bee, Deeptanshu established the hive 
                  <br/>in 2012, driven by a deep passion for business and brand alignment. 
                  <br/>With 15+ buzzing years of combined experience in brand 
                  <br/>management, marketing analytics, business consulting, and 
                  <br/>investment banking, Deeptanshu brings a unique blend of expertise 
                  <br/>to the table. With an MBA in Marketing & Finance from the 
                  <br/>prestigious Simon School of Business at the University of Rochester,
                  <br/>Deeptanshu guides our hive's strategic growth and creates a sweet 
                  <br/>symphony of success for our clients.
                  </p>
                </div>
                <div className='ourleader-paragh4'>
                  <h1>Follow :</h1>
                </div>
                <div className='ourleader-paragh5'>
                  
                    <div className='ourleader-social'>
                      <h1><GrFacebookOption /></h1>
                    </div>
                    <div className='ourleader-social'>
                    <h1><IoLogoInstagram /></h1>
                    </div>
                    <div className='ourleader-social'>
                    <h1><BiLogoLinkedinSquare /></h1>
                    </div>
                 
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurLeader