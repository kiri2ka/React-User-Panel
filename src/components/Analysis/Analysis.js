import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from "recharts";


class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[
                {Technology:'Java',Projects:100},
                {Technology:'Python',Projects:50},
                {Technology:'PHP',Projects:60},
                {Technology:'C++',Projects:30},
                {Technology:'React',Projects:50},
                {Technology:'Bootstrap',Projects:100},
                {Technology:'Angular',Projects:40}
            ]

        }
    }




    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="contentH1">Technology Used</h1>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart style={{width:'100%', height:'300px'}} width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue}>

                                </Bar>

                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className="text-justify analysisText">Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                            The different areas of web design include web graphic design;
                            interface design; authoring, including standardised code and proprietary software;
                            user experience design; and search engine optimization.
                            Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.
                            The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup.
                            Web design partially overlaps web engineering in the broader scope of web development.
                            Web designers are expected to have an awareness of usability and if their role involves creating markup then they are also expected to be up to date with web accessibility guidelines.</p>
                    </Col>
                  </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;