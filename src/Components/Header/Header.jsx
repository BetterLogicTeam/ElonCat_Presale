import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Assets/logo.png"
import "./Header.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'
export default function Header() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    return (
        <div className='Main_header'>
            <Navbar collapseOnSelect expand="lg" className="bg-transparent">
                <Container>
                <div  className='d-flex justify-content-between align-items-center'>

               
                    <Navbar.Brand href="#home" className='main_logo'>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    

                 
                    <button className='Buy_now_btn d-flex mt-0 d-md-none'> Buy Now</button>

                    <span className='d-block d-lg-none' onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span> 
        
        </div>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav" className={show ? "show":""}>
                        <Nav className="m-auto">
                            <Nav.Link onClick={handleClose} href="#About">About</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#Presale">Presale</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#Tiers">Tiers</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#game">Game</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#NFT">NFT</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#TOKENOMICS">TOKENOMICS</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#RoadMap">RoadMap</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#Team">Team</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#Buy">Buy</Nav.Link>
                            <Nav.Link onClick={handleClose} href="#FAQ">FAQ</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                        </Nav>
                        <Nav className='d-flex gap-2 d-none d-md-flex align-items-center' >
                            <div className='d-flex gap-2 align-items-center '>
                                <a href="https://t.me/+AAaHFETkvpE3Y2Fl" target='_blank' className='social_icons fs-4'><FaTelegramPlane />
                                </a>
                                <a href="https://x.com/elonxcat" target='_blank'   className='social_icons fs-4'><FaXTwitter />
                                </a>
                            </div>
                            <button className='Buy_now_btn d-none d-md-flex'> Buy Now</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
