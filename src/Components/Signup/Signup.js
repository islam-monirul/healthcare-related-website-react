import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FaUserPlus, FaGooglePlusG } from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import './Signup.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
     const { auth, setUser, signInWithGoogle } = useAuth(); 

     let history = useHistory();

     // states declare 
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');


     const handleName = (e) => {
          setName(e.target.value);
     }

     const handleEmailAddress = (e) => {
          setEmail(e.target.value);
     }

     const handlePassword = (e) => {
          setPassword(e.target.value);
     }

     const handleSignUp = (e) => {
          e.preventDefault();

          // console.log(name, email, password);
          createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
               console.log(res.user);
               setUser(res.user);

               updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                         setError('');
                         history.push("/profile");
                  }).catch((err) => {
                    setError(err.message);
                  });

          }).catch( err => {
               setError(err.message);
          })
     }


     return (
          <section className="signUpPage">
               <Container>
                    <Row>
                         <h1 className="text-center mb-4">Sign Up</h1>
                         <Col md={6} className="mx-auto signUpForm">
                              <form onSubmit={handleSignUp}>
                                   <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                                        <Form.Control type="text" placeholder="e.g. John Doe" onBlur={handleName} />
                                   </FloatingLabel>

                                   <FloatingLabel controlId="floatingInput" label="Your Email address" className="mb-3">
                                        <Form.Control type="email" placeholder="name@example.com" onBlur={handleEmailAddress}/>
                                   </FloatingLabel>

                                   <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                        <Form.Control type="password" placeholder="Password" onBlur={handlePassword}/>
                                   </FloatingLabel>

                                   <div className="text-danger">
                                        <p>N.B. Password length must be atleast 6</p>
                                   </div>

                                   <div className="d-grid gap-2">
                                        <Button type="submit" className="primary fs-5">
                                             <FaUserPlus /> Sign up
                                        </Button>
                                   </div>

                                   <div className="d-grid gap-2 mt-2">
                                        <Button type="submit" variant="dark" className="fs-5" onClick={signInWithGoogle}>
                                             <FaGooglePlusG /> Continue with google
                                        </Button>
                                   </div>
                   
                              </form>

                              <div className="mt-5 text-center fw-bold">
                                   Already Registered ? <NavLink to="/login">Click here</NavLink>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default Signup;