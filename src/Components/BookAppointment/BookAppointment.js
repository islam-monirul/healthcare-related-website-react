import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './BookAppointment.css';

const BookAppointment = () => {
     return (
          <section className="bookingPage">
               <Container>
                    <Row>
                         <h1 className="text-center mb-4">Book Appointment</h1>
                         <Col md={6} className="mx-auto bookingForm">
                              <form>
                                   <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                                        <Form.Control type="text" placeholder="e.g. John Doe" />
                                   </FloatingLabel>

                                   <FloatingLabel controlId="floatingTextarea2" label="Problem Description">
                                        <Form.Control
                                             as="textarea"
                                             placeholder="Leave a comment here"
                                             style={{ height: '100px' }}
                                        />
                                   </FloatingLabel>

                                   <div className="d-grid gap-2 mt-3">
                                        <Button type="submit" className="primary fs-5">
                                             Book Appointment
                                        </Button>
                                   </div>
                              </form>
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default BookAppointment;