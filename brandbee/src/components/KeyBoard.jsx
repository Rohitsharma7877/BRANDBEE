import React from 'react'
import './keyboard.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';


const KeyBoard = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "letstalk") {
      console.log(id);
      navigate("/letstalk");
      window.scrollTo(0, 0);
      
    }
  }
  return (
    <div className='keyboard-main1'>
        <div className='keyboard-main2'>
        {/* <div className='keyboard-box'> */}
        <div className='keyboard-imagee' >
                
                </div> 
                <div className='keyboard-texts'>
                  <div className='keyboard-texts1'>
                      <div className='keyboard-box'> </div>
                    <div className='keyboard-box-texts'>
                        <h1>Scared of committing with us?<br/>Have a look at these stats….</h1>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> 
                  <h1>94%</h1>
                  </div>
                    <div className='keyboard-box-texts2'>
                        <p>94% of customers are likely to show loyalty to a brand that <br/>offers complete transparency.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'>
                  <h1>77%</h1>
                   </div>
                    <div className='keyboard-box-texts2'>
                        <p>77% of B2B marketers say a well-defined brand strategy is <br/>crucial for any brand's growth.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'>
                  <h1>94%</h1>
                   </div>
                    <div className='keyboard-box-texts2'>
                        <p>94% of people said they’d be highly likely to recommend a<br/>brand they were emotionally engaged with.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> 
                  <h1>81%</h1>
                  </div>
                    <div className='keyboard-box-texts2'>
                        <p>81% of consumers across the globe said they need to be able to <br/>trust the brand they buy from.</p>                   
                    </div>
                  </div>
                  <hr/>
                  <div className='keyboard-texts1'>
                  <div className='keyboard-box'> </div>
                    <div className='keyboard-box-texts2'>
                    <button onClick={()=>handleClick("letstalk")} className='keyboard-btn-started'>Ready To Bee Everything<span><FaArrowRightLong /></span> </button>            
                    </div>
                  </div>  
                </div>   
        {/* </div> */}
               
        </div>
    </div>
  )
}

export default KeyBoard