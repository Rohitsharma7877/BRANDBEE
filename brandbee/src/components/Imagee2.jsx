import React from 'react'
import { Box, Grid, GridItem, Image } from '@chakra-ui/react'

const Imagee2 = () => {
  return (
    <Box h='auto' w='100%' >
        <Box h='auto' w='85%'  margin='6%'>
         <Grid templateColumns='repeat(3, 1fr)' gap={6}  >
            <GridItem w='100%' h='auto'  >
                <Image w='100%' borderRadius='2%' h='100%' src='https://thebrandbee.com/assets/imgs/How-We-Work/300X450-1.jpg'/>
            </GridItem>
            <GridItem w='100%' h='auto'  >
                <Image w='100%' borderRadius='2%' h='100%' src='https://thebrandbee.com/assets/imgs/How-We-Work/300X450-2.jpg'/>
            </GridItem>
            <GridItem w='100%' h='45vh'   >
                 <Image w='100%' h='100%'  borderRadius='2%' src='https://thebrandbee.com/assets/imgs/How-We-Work/230X140.jpg'/>
                 <Image w='100%' h='100%' marginTop='4%' borderRadius='2%' src='https://thebrandbee.com/assets/imgs/How-We-Work/410X330.jpg'/>
            </GridItem>
            
        </Grid>
        </Box>
    </Box>
  )
}

export default Imagee2