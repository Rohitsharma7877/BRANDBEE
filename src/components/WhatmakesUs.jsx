import React from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Image, Text } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons';

const WhatmakesUs = () => {
  return (
    <Box  h='auto' width='100%'  display='flex' background='lightgrey' >

    <Box  h='auto' width='80%'  margin='1%'>

    <Box>
                <Text fontSize='6vh' fontWeight='bold' paddingEnd='20%' marginTop='3%' color='black'>WHAT MAKES US STICK</Text>
            </Box>
 {/* first */}
        <Box   marginLeft='12%'  border='1px solid black' borderLeft='none' borderRight='none' width='60%' alignItems='center'   marginTop='3%'>
<Accordion allowToggle>
<AccordionItem>
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton   >
        <Box height='9vh'   as="span" flex='1' textAlign='left' color='black' fontSize='3vh' fontWeight='bold'  >
          We are Boutique Giants
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize='15px' color='black'/>
        ) : (
          <AddIcon fontSize='15px' color='black' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='gray'>
    Our capabilities might be boutique, but the ideas we brew are 
    <br/>giant.
    </AccordionPanel>
  </>
)}
</AccordionItem>
</Accordion>
        </Box>
        {/* second */}
        <Box   marginLeft='12%' border='1px solid black' borderLeft='none' borderTop='none' borderRight='none' width='60%' alignItems='center'>
<Accordion allowToggle>
<AccordionItem>
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton >
      <Box height='9vh'   as="span" flex='1' textAlign='left' color='black' fontSize='3vh' fontWeight='bold' alignItems='center' justifyContent='center' >
      We maintain High level of Professional Etiquette
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize='15px' color='black'/>
        ) : (
          <AddIcon fontSize='15px' color='black' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='gray'>
    We make sure that all our associates leave their egos at the door, and maintain a high level of professionalism, honesty and humility at all times with all our clients.
    </AccordionPanel>
  </>
)}
</AccordionItem>
</Accordion>
        </Box>
        {/* third */}
        <Box   marginLeft='12%' border='1px solid black' borderLeft='none' borderRight='none'  borderTop='none' width='60%' alignItems='center'>
<Accordion allowToggle>
<AccordionItem>
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton >
      <Box height='9vh'   as="span" flex='1' textAlign='left' color='black' fontSize='3vh' fontWeight='bold' alignItems='center' justifyContent='center' >
      We focus on Nurturing Releationships. Delighting Everyday.
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize='15px' color='black'/>
        ) : (
          <AddIcon fontSize='15px' color='black' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='gray'>
    We consider ourselves as partners to our clients, and work together to create brilliance for their brands.
    </AccordionPanel>
  </>
)}
</AccordionItem>
</Accordion>
        </Box>
        {/* fourth */}
        <Box   marginLeft='12%' border='1px solid black' borderLeft='none'  borderTop='none' borderRight='none' width='60%' alignItems='center'>
<Accordion allowToggle>
<AccordionItem>
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton >
      <Box height='9vh'   as="span" flex='1' textAlign='left' color='black' fontSize='3vh' fontWeight='bold' alignItems='center' justifyContent='center' >
      We believe Change is Constant
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize='15px' color='black'/>
        ) : (
          <AddIcon fontSize='15px' color='black' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='gray'>
    We seek change and new ideas everyday. We strive for excellence in whatever we produce.
    </AccordionPanel>
  </>
)}
</AccordionItem>
</Accordion>
        </Box>
        {/* fifth */}
        <Box   marginLeft='12%' border='1px solid black' borderLeft='none' borderRight='none'  borderTop='none' width='60%' alignItems='center'>
<Accordion allowToggle>
<AccordionItem>
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton >
      <Box height='9vh'   as="span" flex='1' textAlign='left' color='black' fontSize='3vh' fontWeight='bold' alignItems='center' justifyContent='center' >
      We believe in Diversity and Steadfast Decision Making
        </Box>
        {isExpanded ? (
          <MinusIcon fontSize='15px' color='black'/>
        ) : (
          <AddIcon fontSize='15px' color='black' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign='left' fontSize='2.4vh' fontWeight='bold' color='gray'>
    Our diverse team makes it easier for us to think differently, and arrive at decisions faster.
    </AccordionPanel>
  </>
)}
</AccordionItem>
</Accordion>
        </Box>

  </Box>
  <Box  h='60vh'  width='40%'  margin='4%' marginLeft='-10%'>
            <Image height='100%' w='100%' src='https://thebrandbee.com/assets/imgs/What-makes-us-stick.jpg'/>
  </Box>
</Box>
  )
}

export default WhatmakesUs