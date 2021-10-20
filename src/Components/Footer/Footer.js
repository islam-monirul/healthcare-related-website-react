import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
     // icon style function
     const iconColor = {
          color : "#fff",
          margin : "0 10px"
     }

     return (
          <div className="footer">
               <Container>
                    <Row style={{paddingBottom: "25px"}}>
                         <Col md={6}>
                              <h5 className="text-primary">Monir Dental Health Care</h5>
                              <p>
                                   <strong>Monir Dental Healthcare</strong> is an imaginary dental care website. This is built with React.js, Firebase, React-bootstrap, React router etc. as an assignment of Complete Web Development with Jhankar Mahbub by Monirul Islam. 
                              </p>
                              <div>
                                   <FaFacebook style={iconColor}/>
                                   <FaLinkedin style={iconColor}/>
                                   <FaGithub style={iconColor}/>
                              </div>
                         </Col>
                         <Col md={6} className="subscribeBtn">
                              <InputGroup>
                                   <FormControl
                                        placeholder="Enter Your Email Address"
                                        aria-label="email-address"
                                        aria-describedby="basic-addon2"
                                   />
                                   <Button variant="primary" id="basic-addon2">Subscribe</Button>
                              </InputGroup>
                         </Col>
                    </Row>

                    <Row className="copyright">
                         <p>Copyright © 2021 |  <span style={{color: "#0d6efd"}}>Monirul Islam</span></p>
                    </Row>
               </Container>
          </div>
     );
};

export default Footer;