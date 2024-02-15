import { Box,Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,Image, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {CgMenuGridO} from "react-icons/cg"
import { FaPlus } from "react-icons/fa";
import './drawerComponent.css'

const DrawerComponent= ()=>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

  const size='full'
    return (
      <>
      <Box >
      <Button colorScheme=' m="auto" '  onClick={onOpen}>
        <div  style={{color:"black" }} ><CgMenuGridO fontSize={"40px"} p="20px"/></div>
          
        </Button>
        <Drawer
          
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          size={size}
        >
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerCloseButton placement='left'   fontSize={"35px"} mt="1%" ml="30px" zIndex='100000' />
            <DrawerHeader borderBottomWidth='1px' textAlign={"center"} fontSize={"14px"} color={"#777777"} >
            <DrawerBody>
              <Stack    marginRight='70px' height='95vh' width='100%'>
                <Box  height='95vh' backgroundColor='black' width='100%'  display='flex' >

                      <Box className="drawer-box1" borderRight='none' borderLeft='none' height='95vh' width='45%'  >
                        <Box  height='20vh' borderRight='none' borderLeft='none'>
                          <Box  height='18vh' borderLeft='none' >
                          <Image  height='18vh' ml='4vh' src="https://thebrandbee.com/assets/imgs/logo/site-logo-white-2.webp" alt="Image Alt Text" />
                          </Box>
                        </Box>
                        <Box border='0.1px solid Gray' borderRight='none' borderLeft='none' height='55vh'>
                          <Box  height='50vh'  ml='4vh' mt='5vh'>
                              <Text fontSize='4vh' fontWeight='bold' textAlign='left'>Follow Us</Text>
                              <Box mt='5vh' lineHeight='1.5'>
                                <Text fontSize='3.3vh' fontWeight='bold' textAlign='left'>Facebook</Text>
                                <Text fontSize='3.3vh' fontWeight='bold' textAlign='left'>Instagram</Text>
                                <Text fontSize='3.3vh' fontWeight='bold' textAlign='left'>Linkedin</Text>
                                <Text fontSize='3.3vh' fontWeight='bold' textAlign='left'>Youtube</Text>
                              </Box>
                          </Box>
                        </Box>
                        <Box border='0.1px solid gray' height='20vh' borderRight='none' borderLeft='none' borderTop='none'></Box>
                      </Box>


                      <Box className="drawer-box2" border=' 0.1px solid gray' borderRight='none' height='95vh' width='105%'>
                          <Box  height='8vh'></Box>
                          
                          <Box border='0.1px solid gray' borderRight='none' borderLeft='none' height='12vh'>
                            <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>SERVICES</Text>
                              </Box>
                                <Box border='0.1px solid gray'  borderTop='none' borderBottom='none' borderRight='none' fontSize='4vh' fontWeight='bold' width='20%' height='12vh' >
                                 <Box  textAlign='center' mt='3vh' pl='60px' width='5%'  justifyContent='center' ><FaPlus/>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='0.1px solid gray' borderTop='none' borderBottom='none' borderRight='none' borderLeft='none' height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>ABOUT US</Text>
                              </Box>
                                <Box border='0.1px solid gray' borderRight='none'   borderTop='none' borderBottom='none' fontSize='4vh' fontWeight='bold' width='20%' height='12vh' >
                                 <Box  textAlign='center' mt='3vh' pl='60px' width='5%'  justifyContent='center' ><FaPlus/>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='1px solid gray' borderRight='none' borderLeft='none' height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80% ' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>SAMPLE WORK</Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='1px solid gray' borderRight='none' borderLeft='none' borderTop='none' borderBottom='none'  height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>OUR CLIENTS</Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='1px solid gray' borderRight='none' borderLeft='none'  borderBottom='none'  height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>INDUSTRIES WE SERVE</Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='1px solid gray' borderRight='none' borderLeft='none' height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>BLOG</Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box border='1px solid gray' borderRight='none' borderLeft='none' borderTop='none' borderBottom='none'  height='12vh'>
                          <Box  height='12vh' display='flex'>
                              <Box  width='80%' height='12vh'>
                                <Text fontSize='6vh' fontWeight='bold' pl='20px' textAlign='left' justifyContent='center'>LET'S TALK</Text>
                              </Box>
                            </Box>

                          </Box>
                          <Box  height='3vh'></Box>
                      </Box>


                      <Box className="drawer-box3" border='0.1px solid gray' height='95vh' width='50%'>
                         <Box  height='55vh'>
                           <Box  height='52vh'>
                             <Box border='1px solid gray' height='26vh'  borderRight='none' borderLeft='none'>
                                 <Text fontSize='3vh' fontWeight='2vh' mt='20vh' width='60%'>Get in touch</Text>
                             </Box>
                               <Box  height='26vh'  width='80%' ml='5vh' textAlign='left' lineHeight='2' marginTop='9%'>
                                <Text fontSize='3vh' fontWeight='2vh' >+91-62051-14811</Text>
                                <Text fontSize='3vh' fontWeight='2vh' >rohit@gmail.com</Text>
                                  <Text fontSize='2.8vh' fontWeight='2vh' >
                                  Brand Bee Management Pvt. Ltd., 
                                  V-32/20, Basement, GF & 2nd Floor, DLF Phase 3, 
                                  Gurgaon - 122002,Haryana,India
                                </Text>
                                  
                               </Box>                            
                           </Box>
                         </Box>
                       
                         
                      </Box>

                </Box>                              
             </Stack>
          </DrawerBody>
      </DrawerHeader>
  
            
           
          </DrawerContent>
        </Drawer>
      </Box>
        
      </>
    )
  }
  export default DrawerComponent