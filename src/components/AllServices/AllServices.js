import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from "../../asset/img/web.d45e6fbf.svg";
import mobile from "../../asset/img/mobile.b3cc87c3.svg";
import graphics from "../../asset/img/graphics.c111184b.svg";

class AllServices extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={web} alt=""/>
                            <h2 className="serviceName">web developer</h2>
                            <p className="serviceDes">It is based on Procopius, whose very words are to some extent copied, and indeed it adds nothing to what the latter tells us</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={mobile} alt=""/>
                            <h2 className="serviceName">Mobile App </h2>
                            <p className="serviceDes">It is based on Procopius, whose very words are to some extent copied, and indeed it adds nothing to what the latter tells us</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={graphics} alt=""/>
                            <h2 className="serviceName">Graphics</h2>
                            <p className="serviceDes">It is based on Procopius, whose very words are to some extent copied, and indeed it adds nothing to what the latter tells us</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AllServices;