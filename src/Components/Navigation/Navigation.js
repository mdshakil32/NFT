import React from 'react';
import './Navigation.css';
import { Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown,Button,pill  } from 'react-bootstrap';
import searchIcon from "./searchIcon.png";

const Navigation = () => {
    return (
      <div className="navigation-section">
      <div className="container">
       <Navbar bg="light" expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#" className='nav-brand'>NFTERS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto left-nav-wraper"
              navbarScroll
            >
              <Nav.Link href="#action1" className='cus-nav-link'>Marketplace</Nav.Link>
              <Nav.Link href="#action2" className='cus-nav-link'>Resource</Nav.Link>
              <Nav.Link href="#action2" className='cus-nav-link'>About</Nav.Link>
            </Nav>

            
            <Nav
              className="ms-auto gap-20"
              navbarScroll
            >
              <Form className=" nav-search-seaction " pill>
                <div class="input-box"> 
                  <input 
                  placeholder='Search'
                  type="text" 
                  className="form-control rounded-pill" /> 
                  <img src={searchIcon} /> </div>
              </Form>

              <button className=' upload-btn'>Upload</button>
              <button className=' wallet-btn'>Connect Wallet</button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      </div>
    );
};

export default Navigation;