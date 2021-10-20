import React from 'react';
import aboutPhoto from '../../images/about.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
     return (
          <div>
               <section className="aboutSection">
                    <Container>
                         <Row className="d-flex align-items-center">
                              <Col md={6}>
                                   <Image src={aboutPhoto} fluid/>
                              </Col>
                              <Col md={6}>
                                   <h1 className=" fw-bold mb-4">About Us</h1>
                                   <p>
                                        <strong>Monir Dental Healthcare</strong> is an imaginary dental care website. This is built with React.js, Firebase, React-bootstrap, React router etc. as an assignment of Complete Web Development with Jhankar Mahbub by Monirul Islam. 

                                        <br /> <br />
                                        In this dental care website, You can get different types of imaginary dental care services such as Oral Surgery, Dental Implantation, Dental Sealants etc. You can get the best possible customer support here. If you are facing any kind of dental problems, contact us soon !  
                                   </p>
                                   <br /> <br />

                                   <h3 className="fw-bold text-primary">Our Vision</h3>

                                   <p> 
                                        We always try to provide best possible health services so that you and your family can stay happy and healthy. Dental health is really important for a healthy life. We will help you to keep the smile one your face.

                                   <br /> <br />
                                        <strong>Lead better life, consult the best dentists.</strong>

                                   </p>
                                   
                              </Col>
                         </Row>
                    </Container>
               </section>
          </div>
     );
};

export default About;