import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/data/services.json')
            .then(res => res.json())
            .then(data => setService(data[id]));
    }, [id])

    // console.log(service);

    const { name, info, description, img } = service;


    return (
        <div className="mt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} md={8} lg={6}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <h6 className="text-secondary">{info}</h6>
                                    <br />
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <h5 className="text-warning">Book an Appointment</h5>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Your Preferred Date 1</Form.Label>
                                            <Form.Control type="text" placeholder="Write your date in any format" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Preferred Date 2</Form.Label>
                                            <Form.Control type="text" placeholder="Write your date in any format" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Describe your issue briefly (optional)</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Row>

                                    <Link to="/confirm">
                                        <button className=" btn btn-white bg-warning  text-dark font-weight-bold rounded-pill">Book an Appointment</button>
                                    </Link>
                                </Form>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ServiceDetails;