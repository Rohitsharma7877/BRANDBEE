import { useState } from "react";
import "./navbar.css";
import DrawerComponent from "../DrawerComponent";
import DroupDown from "../DroupDown";
import DroupDownImage from "../DroupDownImage";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownImageOpen, setDropdownImageOpen] = useState(false);

  const navigate = useNavigate();

  const handleWhoWeAreClick = (id) => {
    if (id === "whoweare") {
      console.log(id);
      navigate("/whoweare");
      window.scrollTo(0, 0);
    } else if (id === "howwework") {
      console.log(id);
      navigate("/howwework");
      window.scrollTo(0, 0);
    } else if (id === "whatwedo") {
      console.log(id);
      navigate("/whatwedo");
      window.scrollTo(0, 0);
    } else if (id === "ourleader") {
      console.log(id);
      navigate("/ourleader");
      window.scrollTo(0, 0);
    } else if (id === "samplework") {
      console.log(id);
      navigate("/samplework");
      window.scrollTo(0, 0);
    } else if (id === "ourClients") {
      console.log(id);
      navigate("/ourClients");
      window.scrollTo(0, 0);
    } else if (id === "wethink") {
      console.log(id);
      navigate("/wethink");
      window.scrollTo(0, 0);
    } else if (id === "letstalk") {
      console.log(id);
      navigate("/letstalk");
      window.scrollTo(0, 0);
    } else if (id === "industriesWeServe") {
      console.log(id);
      navigate("/industriesWeServe");
      window.scrollTo(0, 0);
    }
  };

  // const handleWhoWeAreClick = () => {
  //   navigate('/whoweare');
  // };

  return (
    <>
      <div className="nev">
        <div className="nav_logo">
          <a href="/">
            <img
              src="https://thebrandbee.com/assets/imgs/logo/logo-black.webp"
              alt="logo"
            />
          </a>
        </div>
        <div className="nav_section">
          <ul className="section">
            <li onClick={() => isDropdownOpen?setDropdownOpen(false):setDropdownOpen(true)}>
              <Menu>
                <MenuButton
                  as={Button}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  SERVICES
                </MenuButton>
              </Menu>
               
            </li>
            
            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  ABOUT US
                </MenuButton>
                <MenuList
                  style={{
                    background: "white",
                    color: "black",
                    height: "32vh",
                    lineHeight: "2.3",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  <MenuItem onClick={() => handleWhoWeAreClick("whoweare")}>
                    Who We Are
                  </MenuItem>
                  <MenuItem onClick={() => handleWhoWeAreClick("howwework")}>
                    How We Work
                  </MenuItem>
                  <MenuItem onClick={() => handleWhoWeAreClick("whatwedo")}>
                    What We Do
                  </MenuItem>
                  <MenuItem onClick={() => handleWhoWeAreClick("ourleader")}>
                    Our leadership
                  </MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  onClick={() => handleWhoWeAreClick("samplework")}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  SAMPLE WORK
                </MenuButton>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  onClick={() => handleWhoWeAreClick("ourClients")}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  OUR CLIENTS
                </MenuButton>
              </Menu>
            </li>

            <li
              // onMouseEnter={() => setDropdownImageOpen(true)}
              // onMouseLeave={() => setDropdownImageOpen(false)}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  onClick={() => handleWhoWeAreClick("industriesWeServe")}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  INDUSTRIES WE SERVE
                </MenuButton>
              </Menu>
              {/* <div>{isDropdownImageOpen && <DroupDownImage />}</div> */}
            </li>

            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  onClick={() => handleWhoWeAreClick("wethink")}
                  style={{
                    background: "white",
                    fontSize: "1.4cap",
                    fontWeight:"bold",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  BLOG
                </MenuButton>
              </Menu>
            </li>
            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  onClick={() => handleWhoWeAreClick("letstalk")}
                  style={{
                    background: "black",
                    color: "white",
                    borderRadius: "none",
                    fontSize: "1.3cap",
                    fontFamily: '"Kanit", sans-serif',
                  }}
                >
                  LET'S TALK
                </MenuButton>
              </Menu>
            </li>
          </ul>
          
        </div>
        
        <div className="nav-drawer">
          <DrawerComponent />
        </div>
      </div>
      <div style={{ display: isDropdownOpen ? 'block' : 'none' }}> {<DroupDown />}</div>
    </>
  );
};

export default Navbar;
