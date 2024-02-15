import React from 'react'
import WhoWeAre from '../WhoWeAre'
import BeeEverything from '../BeeEverything'
import Imagee from '../Imagee'
import Counting from '../Counting'
import { Slide } from '@chakra-ui/react'
import Form from '../Form'
import Articles from '../Articles'

const WhoWeArePage = () => {
  return (
    <div>
         <WhoWeAre/>
        <BeeEverything/>
        <Imagee/>
        <Counting/>
        <Slide/>
        <Form/> 
        <Articles/> 
    </div>
  )
}

export default WhoWeArePage