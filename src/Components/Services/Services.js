import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
     // state declare
     const [services, setServices] = useState([]);

     useEffect( () => {
          fetch("/data.json")
               .then(res => res.json())
                    .then(data => setServices(data));
     },[])

     return (
          <Container className="allservices">
               <h1 className="text-center fw-bold mb-5">Our Services</h1>
               <Row xs={1} md={3} className="g-4 pt-4" style={{marginRight: "0", marginLeft: "0"}}>
               {    
                    services.map( service => <Service key={service.id} info={service}></Service>)
               }
               </Row>
          </Container>
     );
};

export default Services;