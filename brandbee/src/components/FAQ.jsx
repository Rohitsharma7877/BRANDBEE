import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons';

const FAQ = () => {
  return (
    <Box  h='auto' width='100%' border='1px solid black' backgroundColor='black' >
        <Box  h='auto' width='80%'  margin='8%'>
            <Box>
                <Text fontSize='7vh' fontWeight='bold' color='white'>FAQs</Text>
            </Box>

     {/* first */}
            <Box  marginTop='2%' marginLeft='12%' border='1px solid white' width='80%' alignItems='center'>
<Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            <Box height='7vh'   as="span" flex='1' textAlign='left' color='white' fontSize='3.4vh' fontWeight='bold' alignItems='center' justifyContent='center' >
              What is a brand strategy and why is it essential for bussiness?
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='20px' color='white'/>
            ) : (
              <AddIcon fontSize='20px' color='white' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='white'>
        Brand strategy refers to the long-term plan and approach taken by a business to develop a strong and <br/>distinct brand identity. It is essential for businesses as it helps establish a clear direction, differentiate <br/>from competitors, build brand loyalty and create meaningful connections with customers.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>
            {/* second */}
            <Box  marginTop='2%' marginLeft='12%' border='1px solid white' width='80%' alignItems='center'>
<Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            <Box height='7vh'   as="span" flex='1' textAlign='left' color='white' fontSize='3.4vh' fontWeight='bold' alignItems='center' justifyContent='center' >
              What is a brand strategy and why is it essential for bussiness?
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='20px' color='white'/>
            ) : (
              <AddIcon fontSize='20px' color='white' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='white'>
        Brand strategy refers to the long-term plan and approach taken by a business to develop a strong and <br/>distinct brand identity. It is essential for businesses as it helps establish a clear direction, differentiate <br/>from competitors, build brand loyalty and create meaningful connections with customers.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>
            {/* third */}
            <Box  marginTop='2%' marginLeft='12%' border='1px solid white' width='80%' alignItems='center'>
<Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            <Box height='7vh'   as="span" flex='1' textAlign='left' color='white' fontSize='3.4vh' fontWeight='bold' alignItems='center' justifyContent='center' >
              What is a brand strategy and why is it essential for bussiness?
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='20px' color='white'/>
            ) : (
              <AddIcon fontSize='20px' color='white' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='white'>
        Brand strategy refers to the long-term plan and approach taken by a business to develop a strong and <br/>distinct brand identity. It is essential for businesses as it helps establish a clear direction, differentiate <br/>from competitors, build brand loyalty and create meaningful connections with customers.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>
            {/* fourth */}
            <Box  marginTop='2%' marginLeft='12%' border='1px solid white' width='80%' alignItems='center'>
<Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            <Box height='7vh'   as="span" flex='1' textAlign='left' color='white' fontSize='3.4vh' fontWeight='bold' alignItems='center' justifyContent='center' >
              What is a brand strategy and why is it essential for bussiness?
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='20px' color='white'/>
            ) : (
              <AddIcon fontSize='20px' color='white' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='white'>
        Brand strategy refers to the long-term plan and approach taken by a business to develop a strong and <br/>distinct brand identity. It is essential for businesses as it helps establish a clear direction, differentiate <br/>from competitors, build brand loyalty and create meaningful connections with customers.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>
            {/* fifth */}
            <Box  marginTop='2%' marginLeft='12%' border='1px solid white' width='80%' alignItems='center'>
<Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            <Box height='7vh'   as="span" flex='1' textAlign='left' color='white' fontSize='3.4vh' fontWeight='bold' alignItems='center' justifyContent='center' >
              What is a brand strategy and why is it essential for bussiness?
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='20px' color='white'/>
            ) : (
              <AddIcon fontSize='20px' color='white' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='white'>
        Brand strategy refers to the long-term plan and approach taken by a business to develop a strong and <br/>distinct brand identity. It is essential for businesses as it helps establish a clear direction, differentiate <br/>from competitors, build brand loyalty and create meaningful connections with customers.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>

    </Box>
</Box>
  )
}

export default FAQ