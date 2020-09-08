import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Modal,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css'
import {Player,BigPlayButton} from 'video-react/'
class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="contentH1">How i Do</h1>
                    <Row>
                        <Col className="videoText">
                            <p className="text-justify">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all. The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating markup then they are also expected to be up to date with web accessibility guidelines.</p>
                            <p><FontAwesomeIcon onClick={this.modalOpen} className="iconPlay" icon={faPlayCircle} /></p>
                        </Col>
                    </Row>
                    <Modal size={"lg"} show={this.state.show} onHide={this.modalClose}>

                        <Modal.Body>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>


            </Fragment>
        );
    }
}

export default Video;