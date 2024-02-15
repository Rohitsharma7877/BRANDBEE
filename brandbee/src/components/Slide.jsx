import React from 'react'
import './slide.css'
import ScrollAnimation from './ScrollAnimation'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Slide = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "ourClients") {
      console.log(id);
      navigate("/ourClients");
      window.scrollTo(0, 0);
      
    }
  }

  return (
    
    <div className='logos'>
    <ScrollAnimation/>   
        <div className='logos_slide'>     
            <img src='https://thebrandbee.com/assets/imgs/home/logo/mania-color.webp' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/odd-coffee-roasters-color.webp'  alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/baby-brand-saffron-color.webp' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/grofers-color.webp' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/leaseplan-color.webp' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/new-holland-color.webp' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/sonalika-color.webp' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/coca-cola-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/cornitos-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/punjab-national-bank-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/government-of-india-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/jubilant-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/air-india-sats-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/baby-brand-saffron-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/emaar-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/cushman-and-wakefield-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/tulips-color.jpg'  alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/okaya-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/bd-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/the-dental-roots-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/stryker-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/liva-nova-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/manya-group-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/joonify-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/magahi-color.jpg'  alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/zeeba-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/abacus-buildtech-color.jpg' alt='logo' />
            <img src='https://thebrandbee.com/assets/imgs/home/logo/indian-city-properties-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/amaryllis-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/hi-life-color.jpg' alt='logo'/>
            <img src='https://thebrandbee.com/assets/imgs/home/logo/ms-butter-fingers-color.jpg' alt='logo'/>
    </div>
    {/* <div className='btn'>
    <button  className='btn-started'>View More<span><FaArrowRightLong /></span></button>
    </div> */}
    <div className='slide-btn'>
      <button onClick={()=>handleClick("ourClients")} className='slide-butt'>View More<span><FaArrowRightLong /></span></button>
    </div>
    

    </div>
  )
}

export default Slide