import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import recentProImg from "../../asset/img/event-05-420x420.jpg";
import recentProImg1 from "../../asset/img/events-02-420x420.jpg";
import recentProImg2 from "../../asset/img/event-07-420x420.jpg";
import {Link} from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="  mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card  className="recentProCard">
                                <Card.Img variant="top" src={recentProImg} />
                                <Card.Body>
                                    <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        <p className="recentProCardText"> Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Detels</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card  className="recentProCard">
                                <Card.Img variant="top" src={recentProImg1} />
                                <Card.Body>
                                    <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        <p className="recentProCardText"> Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Detels</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-3">
                            <Card  className="recentProCard">
                                <Card.Img variant="top" src={recentProImg2} />
                                <Card.Body>
                                    <Card.Title className="recentProCardTitle">Card Title</Card.Title>
                                    <Card.Text>
                                        <p className="recentProCardText"> Some quick example text to build on the card title and make up the bulk of
                                            the card's content.</p>
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Detels</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Projects;