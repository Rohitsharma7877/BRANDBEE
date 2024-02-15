import React from 'react'
import { Box,Text, Grid, GridItem ,Image} from '@chakra-ui/react'
// import { FaBold } from 'react-icons/fa6'

const SampleWork7 = () => {
  return (
    <Box h='auto' w='100%'  >
    <Text fontSize='6vh' fontWeight='bold' mt='5%'>Sample Work</Text>
      <Box h='auto' w='85%'  margin='8%'>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-1.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-2.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-3.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-4.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-5.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-6.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-7.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-8.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/social-media-marketing-9.jpg'/>
        </GridItem>
        
        
        </Grid>
    </Box>
</Box>
  )
}

export default SampleWork7