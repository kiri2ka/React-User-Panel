import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css'
import {Player,BigPlayButton} from 'video-react/'
class CourcesDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topCourcesContent">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="topCourcesTitle">Full Dynamic Web app with Admin Panel</h3>
                                    <h6 className="topCourcesSubTitle">Total Lecture = 30 </h6>
                                    <h6 className="topCourcesSubTitle">Total Student = 30 </h6>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="topCourcesDes">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h3>Skill You Get</h3>
                            <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} /> Requirement Gathering</p>
                            <p> <FontAwesomeIcon className="iconFont" icon={faCheckCircle} />System Analysis</p>
                            <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} />Coding Testing</p>
                            <p><FontAwesomeIcon className="iconFont" icon={faCheckCircle} />Implementation</p>

                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourcesDetails;