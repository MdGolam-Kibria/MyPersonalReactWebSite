import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">FOLLOW ME</h1>
                            <a className="socialLink" href="#">
                                <FontAwesomeIcon className="mr-1" icon={faFacebook}/>
                                Fcaebook</a><br/>
                            <a className="socialLink" href="#">
                                <FontAwesomeIcon className="mr-1" icon={faGithub}/>
                                Github</a><br/>
                            <a className="socialLink" href="#">
                                <FontAwesomeIcon className="mr-1" icon={faLinkedin}/>
                                Linkdin</a><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">ADDRESS</h1>
                            <p className="serviceDescription">Sharif Complex (11th floor, 31/1 Purana Paltan.</p>
                            <p className="serviceDescription">
                                <FontAwesomeIcon className="mr-1" icon={faEnvelope}/>
                                golamkibria.java@gmail.com</p>
                            <p className="serviceDescription">
                                <FontAwesomeIcon className="mr-1" icon={faPhone}/>
                                +8801531921892</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">INFORMATION</h1>
                            <a className="footerLink" href="#">About Me</a><br/>
                            <a className="footerLink" href="#">My Resume</a><br/>
                            <a className="footerLink" href="#">Contact Me</a><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">LEGAL</h1>
                            <a className="footerLink" href="#">Refund Policy</a><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a><br/>
                        </Col>
                    </Row>
                </Container>


                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="#">golamkibria.com $copy; 2020-2021</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;