import React from 'react'
import './caseStudies.css'
import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudies2 = () => {
  return (
    <div className='case-main1'>
        <div className='case-main2'>
        <div className='casestudies-box1'>
                <div className='casestudies-heading'>
                    <div className='casestudies-title'>
                        <h1>Driving Digital Dominance With Search Engine 
                        <br/>
                        Optimization Services</h1>
                    </div>
                    <div className='casestudies-paragh'>
                        <p1>Brand Bee's SEO service propelled Mallcom to unparalleled 
                        <br/>achievements. Our comprehensive approach included a strong On-page 
                        <br/>SEO strategy, revamping website content and targeting specific 
                        <br/>countries for optimal keyword rankings. Additionally, our Off-page SEO 
                        <br/>efforts generated over 300 backlinks per month, boosting Mallcom's 
                        <br/>visibility and rankings in targeted regions. The results were remarkable, 
                        <br/>with MoM traffic experiencing a phenomenal 200% increase driven by 
                        <br/>organic activities and strategic ad campaigns</p1>
                        <br/>
                        <br/>
                        <h1>Capabilities Enabled</h1>
                        <br/>
                        <h4>On-page Search Engine Optimization|
                        <br/> Off-page Search Engine Optimization|
                            Email Marketing|
                            <br/> Social Media Marketing|
                            Website Development & Management|
                            <br/> Ad Campaigns Strategy|
                            Lead Generation</h4>
                    </div>
                    <div className='casestudies-btn'>
                    <button  className='btn-started'>Know More<span><FaArrowRightLong /></span> </button>
                    </div>
                </div>
                <div className='casestudies-video'>
                    <div className='casestudies-video1'>
                        <img autoPlay loop muted src='https://thebrandbee.com/assets/imgs/work/Mallcom-SEO-2.gif' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies2