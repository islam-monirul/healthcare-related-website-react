import React from 'react';
import hero from '../../images/carousel-image-1.png';
import hero2 from '../../images/carousel-image-2.png';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HeroPart.css';

const HeroPart = () => {
     let history = useHistory();

     // book appointment
     const handleBookAppointment = () => {
          history.push("/bookAppointment");
     }

     return (
         <section className="heroSection">
               <Carousel variant="dark">
                    <Carousel.Item>
                         <Container>
                              <Row className="d-flex align-items-center">
                                   <Col md={7} className="d-flex justify-content-center">
                                        <Image src={hero} fluid/>
                                   </Col>
                                   <Col md={5}>
                                        <div>
                                        <h1 className="fw-bold">Lead</h1>
                                        <h2>Better Life<span className="text-primary"> Consult</span></h2>
                                        <h1 className="fw-bold">Better <span className="fw-normal">Dentistry</span></h1>
                                        <p>We welcome you to the best dental healthcare website</p>
                                        <Button className="custom-button-color mt-3" onClick={ () => handleBookAppointment()}>Book Appointment</Button>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                         <Container>
                              <Row className="d-flex align-items-center">
                                   <Col md={7} className="d-flex justify-content-center">
                                        <Image src={hero2} fluid/>
                                   </Col>
                                   <Col md={5}>
                                        <div>
                                        <h1 className="fw-bold">Your</h1>
                                        <h2>Smile <span className="text-primary"> means the</span></h2>
                                        <h1 className="fw-bold">World <span className="fw-normal">to us!</span></h1>
                                        <p>We welcome you to the best dental healthcare website</p>
                                        <Button className="custom-button-color mt-3" onClick={ () => handleBookAppointment()}>Book Appointment</Button>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </Carousel.Item>
               </Carousel>
         </section>
          
     );
};

export default HeroPart;