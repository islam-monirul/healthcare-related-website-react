import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './serviceDetails.css';

const ServiceDetails = () => {
     // destructuring
     const {serviceID} = useParams();

     // state declare
     const [service, setService] = useState({});

     // using useEffect
     useEffect( () => {
          fetch('/data.json')
               .then(res => res.json())
                    .then(data => findService(data))
     },[]);

     // desired product finding function
     const findService = services => {
          const desiredProduct = services.find( service => service.id === parseInt(serviceID));
          setService(desiredProduct);
     }

     const {name, shortDescription, thumbnails, mainImage, details} = service;

     return (
          <section className="py-5">
               <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg={6} className="order-md-0 order-sm-1">
                              <img src={mainImage} alt={service.name} className="img-fluid"/> 
                        </Col>
                        <Col lg={6} className="order-md-1 order-sm-0 p-4">
                              <img src={thumbnails} alt={service.name} className="w-25 img-fluid"/>
                              <h2 className="fw-bold">{name}</h2>
                              <p className="text-secondary">{details}</p>
                              <p>{shortDescription}</p>
                              <Button className="custom-button-color mt-3">
                                   <Link to="/bookAppointment">Book Appointment</Link>
                              </Button>
                        </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default ServiceDetails;