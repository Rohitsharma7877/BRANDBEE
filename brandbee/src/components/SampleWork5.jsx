import React from 'react'
import { Box,Text, Grid, GridItem ,Image} from '@chakra-ui/react'
// import { FaBold } from 'react-icons/fa6'

const SampleWork5 = () => {
  return (
    <Box h='auto' w='100%'  >
    <Text fontSize='6vh' fontWeight='bold' mt='5%'>Sample Work</Text>
      <Box h='auto' w='85%'  margin='8%'>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} >
        <GridItem w='100%' h='62vh'   >
            <Image w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-1.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'   >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-2.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-3.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-4.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-5.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-6.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-7.jpg'/>
        </GridItem>
        <GridItem w='100%' h='62vh'  >
            <Image  w='100%' h='100%' borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/brand-refresh-rebranding-8.jpg'/>
        </GridItem>
      
        
        </Grid>
    </Box>
</Box>
  )
}

export default SampleWork5