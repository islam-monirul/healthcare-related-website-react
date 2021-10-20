import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUserPlus, FaLock } from 'react-icons/fa';

const Header = () => {
     const {user, logOut} = useAuth();

     let history = useHistory()

     const forwardToLogin = () => {
          history.push("/login");
     }

     const forwardToSignUp = () => {
          history.push("/signUp");
     }
     
     return (
          <Navbar bg="light" expand="lg" className="border-bottom align-middle">
               <Container>
                    <Navbar.Brand href="#" className="fw-bold">MDH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                         <NavLink to="/home" className="me-4">Home</NavLink>
                         <NavLink to="/services" className="me-4">Services</NavLink>
                         {
                              user?.email && <NavLink to="/profile">Profile</NavLink>
                         }
                    </Nav>
                    {
                         user?.email 
                         ? 
                              <div className="d-flex">
                                   <Button variant="dark" onClick={logOut}>Logout</Button>
                              </div>
                         :
                              <div className="d-flex">
                                   <Button variant="outline-dark" onClick={forwardToLogin}> <FaLock /> Login</Button>
                                   <Button variant="outline-primary" className="ms-2" onClick={forwardToSignUp}> <FaUserPlus /> SignUp</Button>
                              </div>
                    }
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default Header;   