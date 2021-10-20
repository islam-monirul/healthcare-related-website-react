import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
     // destructure
     const {id, name, shortDescription, thumbnails} = props.info;

     // crea url for dynamic routing
     const url = `/service/${id}`

     return (
          <Col>
               <Card className="h-100 bg-transparent serviceCard">
                    <Card.Img src={thumbnails} className="img-fluid"/>
                    <Card.Body>
                         <h5 className="fw-bold">{name}</h5>
                         <p className="text-secondary">{shortDescription}</p>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-0">
                         <Button className="custom-button-color">
                              <NavLink to={url}>Learn More</NavLink>
                         </Button>
                    </Card.Footer>
               </Card>
          </Col>
     );
};

export default Service;