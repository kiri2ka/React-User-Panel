import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row,Card,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryFixedBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="">
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                    <Row>
                                        <Col className="text-center countSection">
                                            <h1 className="countNumber">
                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            </h1>
                                            <h4 className="countText">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col className="text-center countSection">
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countText">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="cardSummary">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How i work</Card.Title>
                                            <Card.Text className="cardText">
                                                <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p> <FontAwesomeIcon className="iconFont" icon={faCheckCircle} />System Analysis</p>
                                                <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} />Coding Testing</p>
                                                <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} />Implementation</p>
                                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;