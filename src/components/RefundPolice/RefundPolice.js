import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class RefundPolice extends Component {
    render() {
        return (
            <Fragment>
                <Container className="m-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <ul>
                                <li className="serviceDes">First 30 Days Money Back</li>
                                <li className="serviceDes">This is not a Buy-and-try Product</li>
                                <li className="serviceDes">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface</li>
                                <li className="serviceDes">After 30 Days : There is no Refund offer after 30 days.</li>
                                <li className="serviceDes">design; authoring, including standardised code and proprietary software; user experience design;</li>
                                <li className="serviceDes">search engine optimization. Often many individuals will work in teams covering different aspects of the design process.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundPolice;