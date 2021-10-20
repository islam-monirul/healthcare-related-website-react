import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUserCircle, FaUserPlus, FaLock } from 'react-icons/fa';

const Header = () => {
     const {user} = useAuth();
     
     return (
          <Navbar bg="light" expand="lg" className="border-bottom align-middle">
               <Container>
                    <Navbar.Brand href="#">MDH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                         <NavLink to="/home" className="me-4">Home</NavLink>
                         <NavLink to="/services">Services</NavLink>
                    </Nav>
                    {
                         user?.email 
                         ? 
                              <div className="d-flex">
                                   <p className="me-2"> <FaUserCircle /> {user.displayName}</p>
                                   <Button variant="dark">Logout</Button>
                              </div>
                         :
                              <div className="d-flex">
                                   <Button variant="outline-dark"> <FaLock /> Login</Button>
                                   <Button variant="outline-primary" className="ms-2"> <FaUserPlus /> SignUp</Button>
                              </div>
                    }
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default Header;   