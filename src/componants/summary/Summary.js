import React, {Component, Fragment} from 'react';
//import css source

import {Col, Container, Row, Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                {/*here fluid={true} means left right width 100%*/}
                <Container fluid={true} className="summaryBanner summarySection p-0">
                    {/*    for top banner overlay*/}
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                {/*    for count animation using react countup library*/}


                                                <CountUp start={0} end={100}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}/>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>


                                            </h1>
                                            <p className="countTitle">Total Projects</p>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                {/*for count animation using react-countup-library*/}
                                                <CountUp start={0} end={100}>
                                                    {({countUpRef, start}) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}/>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>
                                            <p className="countTitle">Total Clients</p>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>

                                </Col>
                                {/*Card sectioon*/}
                                <Col lg={4} md={6} sm={12}>

                                    <Card className="workCard">

                                        <Card.Body>
                                            <Card.Title className="cardTitle">How I Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullet"
                                                                                             icon={faCheckCircle}/>Requirement
                                                    Gathering</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullet"
                                                                                             icon={faCheckCircle}/>System
                                                    Analysis</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullet"
                                                                                             icon={faCheckCircle}/>Coding
                                                    Testing</p>
                                                <p className="cardSubTitle"><FontAwesomeIcon className="iconBullet"
                                                                                             icon={faCheckCircle}/>Implementation
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>


                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;