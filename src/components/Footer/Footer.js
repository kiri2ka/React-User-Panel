import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  className="" icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon  className="" icon={faYoutube} /> youTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDes"><FontAwesomeIcon  className="" icon={faLocationArrow} /> 10/14 Mirpur-10 Kazipara tmss road bosundora lan Dhaka</p>
                            <p className="serviceDes"><FontAwesomeIcon  className="" icon={faEnvelope} /> info@info.com</p>
                            <p className="serviceDes"><FontAwesomeIcon  className="" icon={faPhone} /> +8801534-564321</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/about">about me</Link><br/>
                            <Link className="footerLink" to="/contact">Contract</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/Refund">Refund Police</Link><br/>
                            <Link className="footerLink" to="/TermsOfUse">Trams and Conditions</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="#">info.com &copy; 2020</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;