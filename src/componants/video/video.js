import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';

//above video react a library for play video
class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    modalClose = () => this.setState({show: false})
    modalOpen = () => this.setState({show: true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="cardVideo">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDescription">First i analysis the requirement of project. According
                                    to the requirement i make a
                                    proper technical analysis,
                                    then i build a software architecture. According to the planning i start coding.
                                    Testing is also going on with coding.
                                    Final testing take place after finishing coding part.
                                    After successful implementation i provide 6 month free bug fixing service for
                                    corresponding project.</p>
                                <p>
                                    <FontAwesomeIcon onClick={this.modalOpen} className="playBtn"
                                                     icon={faPlayCircle}/>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/*    for show video modal after click the video play icon using react bootstrap*/}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    {/*   <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>*/}
                    <Modal.Body>

                        <Player>
                            {/*<source src="https://youtu.be/2Tvy_Pbe5NA" />*/}
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                            <BigPlayButton position="center"/>
                        </Player>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.modalClose} variant="primary">
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Video;