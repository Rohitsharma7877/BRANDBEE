import React from 'react'
import DigitalSolution from '../DigitalSolution'
// import ServiceDetails2 from '../ServiceDetails2'
import WhatmakesUs from '../WhatmakesUs'
// import { Form } from 'react-router-dom'
import Articles from '../Articles'
import Form from '../Form'
import ServiceListScroll2 from '../ServiceListScroll2'

const DigitalMarketingSolutionPage = () => {
  return (
    <div>
        <DigitalSolution/>
        <ServiceListScroll2/>
        <WhatmakesUs/>
        <Form/>
        <Articles/>
    </div>
  )
}

export default DigitalMarketingSolutionPage