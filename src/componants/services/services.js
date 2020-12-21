import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import androidLogo from '../../asset/image/android.jpg'
import webLogo from '../../asset/image/web.jpg'
import iosLogo from '../../asset/image/ios.png'



/**
 * for first page service portion
 */
class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">i design and develop static and dynamic website as per
                                    your requirements as we believe,"web is world next home".
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={androidLogo}/>
                                <h2 className="serviceName">Android Development</h2>
                                <p className="serviceDescription">I build native Android application for your business
                                    and institution
                                    as per your requirements</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={iosLogo}/>
                                <h2 className="serviceName">Ios Development</h2>
                                <p className="serviceDescription">I build native IOS application for your business and
                                    institution
                                    as per your requirements</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Services;