import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="m-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className="serviceName">Who i am</h1>
                            <hr/>
                            <p className="serviceDes">I am a full stack web Designer and Developer .Web Developer specializing in backend development.
                                Experienced with all stages of the development cycle for
                                dynamic web projects. Well-versed in numerous
                                programming languages including HTML5,CSS, PHP OOP,
                                JavaScript, MySQL, Laravel. Strong background in project
                                management and customer relations</p>
                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDes">I am a full stack web Designer and Developer .Web Developer specializing in backend development.
                                Experienced with all stages of the development cycle for
                                dynamic web projects. Well-versed in numerous
                                programming languages including HTML5,CSS, PHP OOP,
                                JavaScript, MySQL, Laravel. Strong background in project
                                management and customer relations</p>
                            <h1 className="serviceName">My Vision</h1>
                            <hr/>
                            <p className="serviceDes">I am a full stack web Designer and Developer .Web Developer specializing in backend development.
                                Experienced with all stages of the development cycle for
                                dynamic web projects. Well-versed in numerous
                                programming languages including HTML5,CSS, PHP OOP,
                                JavaScript, MySQL, Laravel. Strong background in project
                                management and customer relations</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;