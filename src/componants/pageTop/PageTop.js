import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";


class PageTop extends Component {
    render() {
        return (
            <Fragment>
                {/*here fluid={true} means left right width 100%*/}
                <Container fluid={true} className="topFixedPage p-0">
                    {/*    for top page overlay*/}
                    <div className="topPageOverLay">
                        <Container fluid={true} className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                     {/*here page title come via props when call this componant*/}
                                     <h4 className="pageTitle">{this.props.pagetitle}</h4>
                                 </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;