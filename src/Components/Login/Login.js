import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Login.css';
import { FaUserLock, FaGooglePlusG } from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
     // states declare 
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     // get auth
     const { auth, setUser, user, signInWithGoogle } = useAuth();

     console.log(user);

     let history = useHistory();

     const handleEmailAddress = (e) => {
          setEmail(e.target.value);
     }

     const handlePassword = (e) => {
          setPassword(e.target.value);
     }

     const handleLogin = (e) => {
          e.preventDefault();

          signInWithEmailAndPassword(auth, email, password)
               .then((res) => {
                    console.log(res.user);
                    setUser(res.user);
                    setError('');
                    history.push("/profile");
               })
               .catch((err) => {
                    setError(err.message);
               });
     }

     return (
          <section className="loginPage">
               <Container>
                    <Row>
                         <h1 className="text-center mb-4">Please Login</h1>
                         <Col md={6} className="mx-auto loginForm">
                              <form onSubmit={handleLogin}>
                                   <FloatingLabel controlId="floatingInput" label="Your Email address" className="mb-3">
                                        <Form.Control type="email" placeholder="name@example.com" onBlur={handleEmailAddress}/>
                                   </FloatingLabel>

                                   <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                        <Form.Control type="password" placeholder="Password" onBlur={handlePassword}/>
                                   </FloatingLabel>

                                   <div className="d-grid gap-2">
                                        <Button type="submit" className="primary fs-5">
                                             <FaUserLock /> Login
                                        </Button>
                                   </div>

                                   <div className="d-grid gap-2 mt-2">
                                        <Button type="submit" variant="dark" className="fs-5" onClick={signInWithGoogle}>
                                             <FaGooglePlusG /> Continue with google
                                        </Button>
                                   </div>
                              </form>

                              <div className="mt-5 text-center fw-bold">
                                   Are you a new user ? <NavLink to="/signup">Click here</NavLink>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default Login;