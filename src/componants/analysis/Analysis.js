import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
//Here "recharts" is plugin from Npm website
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {
    /**
     * For create chat create a state
     */
    constructor() {
        super();
        this.state = {
            /**
             * for create chat create a json inside this state
             */
            data: [
                {
                    Technology: 'Java',
                    Projects: "100"
                },

                {
                    Technology: 'SQL',
                    Projects: "70"
                },
                {
                    Technology: 'Bootstrap',
                    Projects: "80"
                },
                {
                    Technology: 'JavaScript',
                    Projects: "70"
                },
                {
                    Technology: 'Jquery',
                    Projects: "50"
                },
                {
                    Technology: 'React',
                    Projects: "80"
                },
                {
                    Technology: 'PHP',
                    Projects: "80"
                },
            ]
        }
    }

    render() {
        const blue = "rgba(0,115,230,0.8)";
        return (
            <Fragment>
                <Container className="text-center">
                    {/*/Here {serviceMainTitle} is a css class*/}
                    <h1 className="serviceMainTitle text-primary">Technology Used</h1>
                    <Row>

                        {/*for chart*/}
                        <Col style={{width:'100%',height:'300'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    {/*for hover effect*/}
                                    <Tooltip />
                                    {/*for x axis get data from the state json*/}
                                    <XAxis dataKey="Technology"/>
                                    {/*here {Projects} means current state Projects that actually provide the line height like the preview*/}
                                    <Bar dataKey="Projects" fill={blue}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        {/*for description*/}
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify desc">To build native android apps i use Java as well as kotline
                                mainly. React JS is used for
                                cross platform mobile application. I use MySQL database for relational database system.
                                To build NoSQL application i use MongoDB.
                                Firebase database system is used where it is necessary to provide realtime data flow
                                facilities. I always build dynamic application. Admin panel is the heart of such kinds
                                of application. I always try to provide sufficient features in admin panel to dominate
                                application.
                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel
                                section. Application security is a big deal for commercial application.I always ensure
                                security portion of my application, moreover i build a security alert system, to notify
                                admin when his system at risk.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;