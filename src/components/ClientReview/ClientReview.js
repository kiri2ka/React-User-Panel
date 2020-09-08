import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client1 from '../../asset/img/client-1.jpg';
import client2 from '../../asset/img/client-2.jpg';
import client3 from '../../asset/img/client-3.jpg';

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="contentH1">Client Review</h1>
                    <Slider {...settings}>
                        <div>
                            <Row>
                                <Col className="text-center">
                                    <img className="circleImg" src={client1} alt=""/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDes">Web design encompasses many different skills and disciplines in the production
                                        and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col className="text-center">
                                    <img className="circleImg" src={client2} alt=""/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDes">Web design encompasses many different skills and disciplines in the production
                                        and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col className="text-center">
                                    <img className="circleImg" src={client3} alt=""/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDes">Web design encompasses many different skills and disciplines in the production
                                        and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;