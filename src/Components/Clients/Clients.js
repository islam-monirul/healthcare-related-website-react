import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Clients.css';
import c1 from '../../images/client1.png';
import c2 from '../../images/client2.png';
import c3 from '../../images/client3.png';
import c4 from '../../images/client4.png';

const Clients = () => {
     return (
          <section className="clients">
               <Container>
                    <h1 className="text-center fw-bold mb-5">Our Partners</h1>
                    <Row>
                         <Col className="p-5 text-center" lg={3} sm={6}>
                              <img src={c1} alt ="client 1" className="img-fluid"/>
                         </Col>
                         <Col className="p-5 text-center" lg={3} sm={6}>
                              <img src={c2} alt="client 2" className="img-fluid"/>
                         </Col>
                         <Col className="p-5 text-center" lg={3} sm={6}>
                              <img src={c3} alt="client 3" className="img-fluid"/>
                         </Col>
                         <Col className="p-5 text-center" lg={3} sm={6}>
                              <img src={c4} alt="client 4" className="img-fluid"/>
                         </Col> 
                    </Row>
               </Container>
          </section>
     );
};

export default Clients;