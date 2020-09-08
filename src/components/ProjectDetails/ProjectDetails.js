import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import recentProImg from "../../asset/img/event-05-420x420.jpg";
class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="m-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img src={recentProImg} alt=""/>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h2 className="serviceName">Fall Bazar</h2>
                            <p className="serviceDes font-weight-bold">I am a full stack web Designer and Developer .Web Developer specializing in backend development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5,CSS, PHP OOP, JavaScript, MySQL, Laravel. Strong background in project management and</p>
                            <ul>
                                <li className="serviceDes">Pell grants function like vouchers for students to pay for higher</li>
                                <li className="serviceDes">Awards are based on financial need to students who have not earned a bachelor's degree</li>
                                <li className="serviceDes">More than two-thirds of Pell grants go to families making less than $50,000</li>
                                <li className="serviceDes">These awards are also contingent on the student's household size.</li>
                                <li className="serviceDes">Most community college students qualify for need-based aid, experts say.</li>
                                <li className="serviceDes">in the meantime, has managed to keep her debt under $2,000</li>
                            </ul>
                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;