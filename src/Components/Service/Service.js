import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
     // destructure
     const {id, name, shortDescription} = props.info;

     // crea url for dynamic routing
     const url = `/service/${id}`

     return (
          <Col>
               <Card className="h-100">
                    {/* <Card.Img variant="top" src={img} fluid/> */}
                    <Card.Body>
                         <h5 className="fw-bold">{name}</h5>
                         <p className="text-secondary">{shortDescription}</p>
                    </Card.Body>
                    <Card.Footer className="bg-white py-3">
                         <Button variant="light">
                              <NavLink to={url}>Learn More</NavLink>
                         </Button>
                    </Card.Footer>
               </Card>
          </Col>
     );
};

export default Service;