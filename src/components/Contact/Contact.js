import React, {Component} from 'react';
import {Button,Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick contact</h1>
                        <Form>
                            <Form.Group>
                                <Form.Label className="serviceDes">Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="serviceDes">Email address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="serviceDes">Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Disciss Now</h1>
                        <p className="serviceDes"><FontAwesomeIcon  className="" icon={faLocationArrow} /> 10/14 Mirpur-10 Kazipara tmss road bosundora lan Dhaka</p>
                        <p className="serviceDes"><FontAwesomeIcon  className="" icon={faEnvelope} /> info@info.com</p>
                        <p className="serviceDes"><FontAwesomeIcon  className="" icon={faPhone} /> +8801534-564321</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;