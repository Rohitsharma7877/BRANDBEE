import React, { useState } from 'react';
import './droupDownImage.css'
import "./droupDown.css";
import { RxDotFilled } from 'react-icons/rx'
import { useNavigate } from "react-router-dom";

const DroupDownImage = () => {

      const navigate = useNavigate();
      // const [url, setUrl] = useState('');

  const handlechange = (id) => {
    if (id === "health") {
      console.log(id);
      navigate("/health");
    }  else {
      console.log(id)
      navigate(`/industriesMenu/${id}`);
      console.log("data");
    }
      
  };


  return (
    <div className='droup-main-image'>
        <div className='droup-main-image2'>
            <div className='droup-image1'>
                <div className='droup-image-photo'>
                    <img src='https://thebrandbee.com/assets/imgs/menu-left.webp' alt=''/>
                </div>
            </div>
            <div className='droup-image2'>
            <div className='droup-box2-list2'>
                  <ul>
                     <li>
                     <p><RxDotFilled /></p>
                     <a href='https://medicality.health/' target='_blank'>
                    <h1>Healthcare </h1>
                    </a>
                     
                     
                     </li>
                         
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("beautycare")}>
                     <h1>Beauty Care </h1></button>
                     </li>
                     
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("fnb")}>
                     <h1>F&B </h1></button>
                     </li>
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("eCommerce")}><h1>E-Commerce</h1> </button>
                     </li>

                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("realestate")}><h1>Real Estate </h1></button>
                     </li>
                     
                  </ul>
                  {/* {url && <iframe src={url} title="Healthcare Website" />} */}
               </div>
            </div>
            <div className='droup-image3'>
            <div className='droup-box2-list2'>
                  <ul>
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("hospitality")}><h1>Hospitality </h1></button>
                     </li>
                         
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("fmcg")}><h1>FMCG</h1></button>
                     </li>
                     
                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("consumerelEctronic")}><h1>Consumer Electronic</h1></button>
                     </li>

                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("wellness")}><h1>Wellness</h1></button>
                     </li>

                     <li>
                     <p><RxDotFilled /></p>
                     <button onClick={() => handlechange("automobile")}><h1>Automobile</h1></button>
                     </li>
                     
                  </ul>
                 
               </div>
            </div>
            <div className='droup-image4'>
            <div className='droup-box2-list2'>
                  <ul>
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>BFSI </h1>
                     </li>
                         
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Aviation</h1>
                     </li>
                     
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>IT </h1>
                     </li>
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Manufacturing</h1>
                     </li>

                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Entertainment</h1>
                     </li>
                     
                  </ul>
               </div>
            </div>
            <div className='droup-image5'>
            <div className='droup-box2-list2'>
                  <ul>
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Fashion</h1>
                     </li>
                         
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Business Services</h1>
                     </li>
                     
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Education</h1>
                     </li>
                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Furniture & Decor</h1>
                     </li>

                     <li>
                     <p><RxDotFilled /></p>
                           <h1>Logistics</h1>
                     </li>
                     
                  </ul>
               </div>
            </div>
        </div>
    </div>
  )
}

export default DroupDownImage