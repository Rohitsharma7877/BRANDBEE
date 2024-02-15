import React, { useState } from 'react';
import './letTalks.css'
import {
    Box,
    Button,
    FormControl,
    Input,
    Select,
    Textarea,
   
    
   } from '@chakra-ui/react'

import ReCAPTCHA from "react-google-recaptcha";
import { MdArrowOutward } from "react-icons/md";

const LetTalks = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        selectedService: '',
        estimatedBudget: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        // Clear the error when user starts typing in a required field
        setErrors({
          ...errors,
          [name]: '',
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check for empty required fields
        const requiredFields = ['name', 'email', 'phone', 'selectedService', 'estimatedBudget'];
        // const newErrors = {};
    
        requiredFields.forEach((field) => {
        //   if (!formData[field]) {
        //     newErrors[field] = 'This field is required';
        //   }
        });  
        // setErrors(newErrors);  
        // if (Object.keys(newErrors).length === 0) {         
        // }
      };
  return (
    <div className='letTalk-main1'>
        <div className='letTalk-main2'>
             <div className='letTalk-box1'>
                <div className='letTalk-title'>
                    <h1>Its time to Bee <br/>Everything!</h1>
                </div>
                <div className='letTalk-paragh'>
                    <p1>Great! We're excited to hear from you and let's start something special togerter. call us for any inquery.</p1>
                </div>
             </div>
             <div className='letTalk-box2'>
                     <div className='letTalk-office-address'>
                        <h1>Corporate­Office:</h1>
                        <br/>
                        <p>Brand Bee Management Pvt. Ltd.
                          <br/>  V Block, Basement, GF & 2nd Floor
                           <br/> DLF Phase III, Gurgaon - 122002</p>
                           <br/>
                           <h1>Chat­ over­Coffee:</h1>
                           <br/>
                           <p>Brand Bee Management Pvt. Ltd.
                            <br/>5F, Tower C, DLF Cyber Greens
                           <br/> DLF Cybercity, Gurgaon - 122002, Haryana, India</p>
                           <br/>
                           <h2> <span>Ph.</span> +91-958255-5556</h2>
                           <br/>
                           <h1>Registered­Office:</h1>
                           <br/>
                           <p>Brand Bee Management Pvt. Ltd.
                              <br/>  B-24, Basement, Panchsheel Enclave
                              <br/>  New Delhi - 110017, Delhi, India</p>
                              <br/>
                              <h1>USA Office:</h1>
                              <br/>
                              <p>The Brand Bee LLC
                            <br/>1700 Park Street #111
                            <br/>Naperville, IL 60563</p>
                            <br/>
                            <h1>Matches­ are­ made­ in­ heaven.­ Lets­ give­ 
                            <br/>it­ a­shot!</h1>
                            <br/>
                            <p>We are always on the look out for talented people and we 
                            <br/>respond well to beautifully crafted portfolios.</p>
                            <br/>
                            <h2><span>Email:</span> careers@thebrandbee.com</h2>


                     </div>  


                     <div className='letTalk-yours-Details'>
                        <div className='letTalk-yours-title'>
                            <h1>Leave us a brief about your requirements</h1>
                        </div>

                        <div className='form-fillup'>
                            <FormControl isRequired  onClick={handleSubmit} >
                                <Box display='flex' gap='2%' marginTop='2%'>
                                 <Input
                                    name="name"
                                    height='10vh'
                                    borderTop='none'
                                    borderRight='none'
                                    borderLeft='none'
                                    borderBottom='1px solid gray'
                                    w='50%'
                                    placeholder='Your Name *'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    isInvalid={errors.name}
                                />
                                {errors.name && (
        <Box color="red" marginTop="2">
          {errors.name}
        </Box>
      )}
                                    
                                <Input
                                    name="email"
                                    height='10vh'
                                    borderTop='none'
                                    borderRight='none'
                                    borderLeft='none'
                                    borderBottom='1px solid gray'
                                    w='50%'
                                    placeholder='Email Id *'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    isInvalid={errors.email}
                                />
                                {errors.email && (
        <Box color="red" marginTop="2">
          {errors.email}
        </Box>
      )}
                                </Box>

                                <br/>

                                <Box display='flex' gap='2%'  marginTop='2%' >
                                <Input
                                    name="phone"
                                    height='10vh'
                                    borderTop='none'
                                    borderRight='none'
                                    borderLeft='none'
                                    borderBottom='1px solid gray'
                                    w='50%'
                                    placeholder='Phone Number *'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    isInvalid={errors.phone}
                                />
                                {errors.phone && (
        <Box color="red" marginTop="2">
          {errors.phone}
        </Box>
      )}
                                    
      <Input
   name="companyName"
   height='10vh'
   borderTop='none'
   borderRight='none'
   borderLeft='none'
   borderBottom='1px solid gray'
   w='50%'
   placeholder='Company Name *'
   value={formData.companyName}
   onChange={handleInputChange}
   isInvalid={errors.companyName}
/>
                                {errors.companyName && (
        <Box color="red" marginTop="2">
          {errors.companyName}
        </Box>
      )}
                                
                                </Box>
                                <br/>
                                
                                                               
                                <Select  
                                marginTop='2%' 
                                cursor={'pointer'} 
                                textColor='gray' 
                                height='10vh' 
                                borderTop='none' 
                                borderRight='none' 
                                borderLeft='none' 
                                borderBottom='1px solid gray' 
                                value={formData.selectedService}
                                onChange={(e) => handleInputChange({ target: { name: 'selectedService', value: e.target.value } })}
                                isInvalid={errors.selectedService} 
                                placeholder='Choose Service *'
                                >
                                
                                    <option >Branding Solutions</option>
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
                                {errors.selectedService && (
        <Box color="red" marginTop="2">
          {errors.selectedService}
        </Box>
      )}


                                <br/>
                                <Select 
                                marginTop='2%' 
                                cursor={'pointer'}  
                                textColor='gray' 
                                height='10vh' 
                                borderTop='none' 
                                borderRight='none' 
                                borderLeft='none' 
                                borderBottom='1px solid gray' 
                                value={formData.estimatedBudget}
                                onChange={(e) => handleInputChange({ target: { name: 'estimatedBudget', value: e.target.value } })}
                                isInvalid={errors.estimatedBudget} 
                                placeholder='Estimated Budget *'>

                                    <option>Less than INR 75k</option>
                                    <option>INR 75k - INR 1.5 lacs</option>
                                    <option>INR 1.5 lacs - INR 5 lacs</option>
                                    <option>INR 5 lacs - INR 25 lacs</option>
                                    <option>INR 25 lacs and above</option>
                                </Select>
                                {errors.estimatedBudget && (
        <Box color="red" marginTop="2">
          {errors.estimatedBudget}
        </Box>
      )}
                                <br/>
                                <br/>
                                <Textarea 
                                name="message"
                                marginTop='2%' 
                                height='15vh' 
                                borderTop='none'
                                borderRight='none'
                                borderLeft='none' 
                                borderBottom='1px solid gray'
                                value={formData.message}
                                onChange={handleInputChange}
                                isInvalid={errors.message}
                                placeholder='Here is a sample placeholder *' />
                            {errors.message && (
                                <Box color="red" marginTop="2">
                                    {errors.message}
                                </Box>
                            )}

                                <br/>
                                <br/>
                                <Box marginTop='2%' textAlign={'left'}>               
                                <ReCAPTCHA   sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
                                </Box>
                                {/* <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button> */}
                            </FormControl>                          
                        </div>

                            <div className='banner-btn1'>
                               <button className='banner-btn2'>Send <br/>Message <span><MdArrowOutward /></span></button>
                            </div>
                            
                     </div>
                  </div>
             </div>
        </div>
  )
}

export default LetTalks