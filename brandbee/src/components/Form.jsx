import React from 'react'
import './form.css'
import {
    Box,
    Button,
    FormControl,
    Input,
    Select,
    Textarea,
   
    
   } from '@chakra-ui/react'

// import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import ReCAPTCHA from "react-google-recaptcha";
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === "letstalk") {
      console.log(id);
      navigate("/letstalk");
      window.scrollTo(0, 0);
      
    }
  }
  return (
    <div className='form-main1'>
        <div className='form-main2'>
            <div className='form-text'>
                <div className='form-heading'>
                    <h1>STILL, WAITING FOR
                 <br/>   US TO MAKE THE
                 <br/>   FIRST MOVE?</h1>
                </div>
                <div className='form-pargh'>
                    <p>Don't be shy, get in touch.</p>
                </div>
            </div>
            {/* <hr transform=''/> */}
            <div className='form-fillup'>

            <FormControl isRequired>
                {/* <FormLabel>First name</FormLabel> */}
                <Input  height='10vh' border='none'  placeholder='Your Name' />
                <hr/>
                <br/>
                <Input  height='10vh' border='none' placeholder='Email Id' />
                <hr/>
                <br/>
                <Input  height='10vh' border='none' placeholder='Phone Number' />
                <hr color='black'/>
                <br/>
                <Input  height='10vh' border='none' placeholder='Company Name' />
                <hr color='black'/>
                <br/>
                {/* <FormLabel>Choose Service</FormLabel> */}
                <Select  cursor={'pointer'} textColor='gray' height='10vh' border='none' placeholder='Choose Service'>
                    <option>Branding Solutions</option>
                    <option>Corporate Rebranding</option>
                    <option>Photoshoot & Video Shoot</option>
                    <option>Social Media marketing</option>
                    <option>E-commerce Solutions</option>
                    <option>website Development & Management</option>
                    <option>Ads/Performance Marketing</option>
                    <option>SEO (Search Engine Optimization)</option>
                    <option>Content Marketing Solutions</option>
                    <option>Email Marketing & Automation</option>
                </Select>
                <hr/>

                <br/>
                {/* <FormLabel>Choose Service</FormLabel> */}
                <Select cursor={'pointer'}  textColor='gray' height='10vh' border='none' placeholder='Estimated Budget'>
                    <option>Less than INR 75k</option>
                    <option>INR 75k - INR 1.5 lacs</option>
                    <option>INR 1.5 lacs - INR 5 lacs</option>
                    <option>INR 5 lacs - INR 25 lacs</option>
                    <option>INR 25 lacs and above</option>
         
                </Select>
                <hr/>
                <br/>
                <br/>
                <Textarea height='15vh' border='none' placeholder='Here is a sample placeholder' />


                <hr/>
                <br/>
                <br/>


                <Box textAlign={'left'}>
               
               <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
         
        />
                </Box>

            <br/>
                
                <Box textAlign={'left'}>
                    <Button onClick={()=>handleClick("letstalk")}  height='60px' width='65%' marginTop='10px' background={'black'} 
                    gap={'15px'} color={'white'} fontSize={'20px'} fontWeight={'500'} >
                    Begin Your Transformation Today<span><FaArrowRightLong /></span> 
                    </Button>
                </Box>
                
            </FormControl>
            </div>
        </div>
    </div>
  )
}

export default Form