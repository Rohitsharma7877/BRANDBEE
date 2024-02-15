import React from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'

const SampleWork3 = () => {
  return (

    <Box h='auto' w='100%'   >
    <Text fontSize='6vh' fontWeight='bold' >Sample Work</Text>
      <Box  w='100%'  margin='8%' h='auto'  >
      <Grid h='auto' w='85%'  templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-1.jpg'/>
      </GridItem>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-2.jpg'/>
      </GridItem>
      <GridItem  colSpan={4}  >
        <Image h='30vh' w='100%' src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-3.jpg'/>
      </GridItem>

      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-4.jpg'/>
        <Image mt='4%' src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-5.jpg'/>
      </GridItem>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-6.jpg'/>
      </GridItem>

      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-1.jpg'/>
      </GridItem>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-2.jpg'/>
      </GridItem>
      <GridItem  colSpan={4}  >
        <Image h='30vh' w='100%' src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-3.jpg'/>
      </GridItem>

      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-10.jpg'/>
        <Image mt='4%' src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-11.jpg'/>
      </GridItem>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-12.jpg'/>
      </GridItem>

      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-13.jpg'/>
      </GridItem>
      <GridItem  colSpan={2}  >
        <Image src='https://thebrandbee.com/assets/imgs/sample-work/communication-design-14.jpg'/>
      </GridItem>

      
     </Grid>
    </Box>
</Box>



  )
}

export default SampleWork3