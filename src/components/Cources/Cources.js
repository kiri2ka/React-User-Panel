import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import news1 from "../../asset/img/news-01-370x240.jpg";
import news2 from "../../asset/img/news-02-370x240.jpg";
import news3 from "../../asset/img/news-03-370x240.jpg";
import news4 from "../../asset/img/news-04-370x240.jpg";
import {Link} from "react-router-dom";

class Cources extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 text-center">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={news1} className="courceImg" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courceTitle text-justify">Department Head</h4>
                                    <p className="text-justify courceText">Web design encompasses in the production and maintenance of websites. The different areas of </p>
                                    <Link className="courceMore float-left" to="/CourcesDetails">More</Link>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={news2} className="courceImg" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courceTitle text-justify">Department Head</h4>
                                    <p className="text-justify courceText">Web design encompasses in the production and maintenance of websites. The different areas of </p>
                                    <Link className="courceMore float-left" to="/CourcesDetails">More</Link>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={news3} className="courceImg" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courceTitle text-justify">Department Head</h4>
                                    <p className="text-justify courceText">Web design encompasses in the production and maintenance of websites. The different areas of </p>
                                    <Link className="courceMore float-left" to="/CourcesDetails">More</Link>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={news4} className="courceImg" alt=""/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courceTitle text-justify">Department Head</h4>
                                    <p className="text-justify courceText">Web design encompasses in the production and maintenance of websites. The different areas of </p>
                                    <Link className="courceMore float-left" to="/CourcesDetails">More</Link>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Cources;