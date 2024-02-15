import React from 'react'
import { Box,Text, Grid, GridItem ,Image} from '@chakra-ui/react'
// import { FaBold } from 'react-icons/fa6'

const SampleWork8 = () => {
  return (
    <Box h='auto' w='100%'   >
    <Text fontSize='6vh' fontWeight='bold' >Sample Work</Text>
      <Box  w='85%'  margin='8%' h='auto'  >
        <Grid templateColumns='repeat(3, 1fr)'  gap={6} >
        <GridItem w='100%'   >
            <Image   borderRadius='2%'  src='https://thebrandbee.com/assets/imgs/sample-work/email-1.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-2.jpg'/>
            <Image  mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-3.jpg'/>
            {/* <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/corporate-communications-4-min.jpg'/> */}
        </GridItem>

        <GridItem w='100%'   >
            <Image   borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-4.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-5.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-6.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-7.jpg'/>
            <Image mt='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-8.jpg'/>
        </GridItem>

        <GridItem w='100%'   >
            <Image  borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-9.jpg'/>
            <Image  borderRadius='2%' src='https://thebrandbee.com/assets/imgs/sample-work/email-10.jpg'/>
        </GridItem>
     </Grid>
    </Box>
</Box>
  )
}

export default SampleWork8