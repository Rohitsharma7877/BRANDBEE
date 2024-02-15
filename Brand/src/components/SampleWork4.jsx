import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'


const SampleWork4 = () => {
  return (

    <Box h='750vh' w='auto'    >
    <Text fontSize= {['4vh', '6vh']} fontWeight='bold' >Sample Work</Text>
      <Box  w='auto'  margin={['2%', '6%']} h='720vh'  >
      <Flex direction={['column', 'row']} gap={4} > 

    <Box  h='auto' w={['100%', '105%']}    >
        <Image  h='auto' w='100%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-1.png'/>
        <Image mt='3%' h='auto'  w='auto' src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-2.jpg'/>
        <Image mt='3%'    h='auto' w='auto' src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-3.jpg'/>
        <Image mt='3%' h='22%' w='100%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-4.jpg'/>
        <Image mt='1%' position='absolute' h='5%' w='87.7%' src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-12.jpg' />
        
        <Image position='absolute' mt='47.5%' h='3.6%' w='30%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-13.jpg'/>
        <Image position='absolute' mt='81%' h='5.6%' w='30.6%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-16.jpg'/>
        <Image position='absolute' mt='132.6%' h='6.6%' w='35%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-20.jpg'/>
        {/* <Image position='absolute' mt='154%' h='2.6%' w='35%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-21.jpg'/> */}
        {/* <Image position='absolute' mt='174%' h='2.7%' w='35%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-22.jpg'/>  */}
     </Box>   

   <Box   w={['100%', '85%']}   >
        <Image h='28%'  w='100%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-5.jpg'/>
        <Image mt='3%' h='19%' w='100%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-6.jpg'/>
        <Image  position='absolute'   mt='1%' h='2.8%'  w='35.5%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-9.jpg'/>
        <Image  position='absolute'   mt='28%' h='4.1%'  w='56.6%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-11.jpg'/>
        <Image position='absolute' mt='112.4%' h='3.6%' w='28%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-14.jpg'/>
        <Image position='absolute' ml='0.7%' mt='146%' h='2.5%' w='35%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-17.jpg'/>
        <Image position='absolute' ml='0.7%' mt='169.6%' h='3%' w='35%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-18.jpg'/>
        <Image position='absolute' ml='4.7%' mt='197.8%' h='3.5%' w='52%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-23.jpg'/>
        <Image position='absolute' ml='4.7%' mt='230.5%' h='3%' w='52%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-24.jpg'/>
        {/* <Image position='absolute' ml='4.7%' mt='228.5%' h='4.1%' w='52%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-25.jpg'/>        */}
   </Box>

    <Box w={['100%', '110%']}    >
        <Image h='23%' w='100%'   src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-7.jpg'/>
        <Image mt='3%' h='23.8%'  w='100%' src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-8.jpg'/>
        <Image ml='35%'   mt='3%'  h='20%' w='65%' src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-10.jpg'/>
        <Image position='absolute' ml='3.5%' mt='86.1%' h='3.6%' w='28%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-15.jpg'/>
        <Image position='absolute' mt='119.6%' ml='11%' h='5.6%' w='20.5%'  src='https://thebrandbee.com/assets/imgs/portfolio/photoshoots-19.jpg'/>     
    </Box>
  </Flex>    
 </Box>
</Box>

  )
}

export default SampleWork4