import React from 'react'
import { Box,Text, Grid, GridItem ,Image} from '@chakra-ui/react'
// import { FaBold } from 'react-icons/fa6'

const SampleWork2 = () => {
  return (
    <Box h='auto' w='100%'   >
    <Text fontSize='6vh' fontWeight='bold' >Sample Work</Text>
      <Box  w='85%'  margin='8%' h='auto'  >
        <Grid templateColumns='repeat(3, 1fr)'  gap={6} >
        <GridItem w='100%'   >
            <Image   borderRadius='2%'  src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-1-min.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-2-min.jpg'/>
            <Image  mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-3-min.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-4-min.jpg'/>
        </GridItem>

        <GridItem w='100%'   >
            <Image   borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-5-min.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-6-min.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-7-min.jpg'/>
        </GridItem>

        <GridItem w='100%'   >
            <Image  borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-9-min.jpg'/>
        </GridItem>
     </Grid>
    </Box>
</Box>
  )
}

export default SampleWork2