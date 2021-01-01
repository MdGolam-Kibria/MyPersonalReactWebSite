import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                     <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Web Develepment</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <h5 className="text-justify courseTitle">Android Develepment</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*..........................................................................*/}
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">React</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Spring boot</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>


                        {/*    */}


                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">PHP</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>


                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImages"
                                         src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/116795153_971643263256982_2321855891114966127_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFiOrnZTHaee5kTECO33SBbCS7FaqAYUTwJLsVqoBhRPFG8Itf1LmN0TVK7eVKpCil-38jkqP3r-2vCMnkexMS0&_nc_ohc=GzV70gpSKewAX-y4pNW&_nc_ht=scontent.fdac9-1.fna&oh=042978ed6f3dfd7b04a30373c992ebe0&oe=60105080"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify courseTitle">Python</h5>
                                    <p className="text-justify courseDescription">he challenge is finding the best
                                        plugins for JavaScript
                                        development on Intellij
                                        IDEs. ... and it will continue to rule the
                                        web stack in 2020 and beyond</p>
                                    <a href="#" className="text-justify courseDetails float-left">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;