import React, {Component, Fragment} from 'react';
//import css source

import {Col, Container, Row, Button} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                {/*here fluid={true} means left right width 100%*/}
                <Container fluid={true} className="topFixedBanner p-0">
                    {/*    for top banner overlay*/}
                    <div className="topBannerOverLay">
                        <Container fluid={true} className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                                    <h4 className="topSubTitle">Android And Web Developer</h4>
                                    <Button variant="primary" className="mt-4">More Info</Button>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;