import React from 'react'
import { Box,Text, Grid, GridItem ,Image} from '@chakra-ui/react'
// import { FaBold } from 'react-icons/fa6'

const SampleWork = () => {
  return (
    <Box h='auto' w='100%'  >
    <Text fontSize='6vh' fontWeight='bold' mt='5%'>Sample Work</Text>
      <Box h='auto' w='85%'  margin='8%'>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-1.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-2.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-3.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-4.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-5.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-6.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-7.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-8.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-9.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-10.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-11.jpg'/>
        </GridItem>
        <GridItem w='100%' h='auto'  >
            <Image  borderRadius='3%' src='https://thebrandbee.com/assets/imgs/sample-work/development-work-12.jpg'/>
        </GridItem>
        
        </Grid>
    </Box>
</Box>
  )
}

export default SampleWork