import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Button, Modal} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ClientReview extends Component {

    /**
     * here infinite:true means carusal always running
     */
    var
    settings = {
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle text-center">CLIENT SAYS</h1>
                    <Row>
                        <Slider {...this.settings}>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImage"
                                             src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/125865310_3427710827336321_4379794445442604911_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH0bMfhmHEYVqq5HRN0U7OTdy_IrvNBzbt3L8iu80HNu-D6zby7_Tc_cyRdc-ehidF6Rb_VPLtBvQVN51PNp8SP&_nc_ohc=lwJoVJmmbSsAX-vQU0X&_nc_ht=scontent.fdac9-1.fna&oh=03db9641f96775afdff9dbf0c7704445&oe=600E9A05"/>
                                        <h1 className="serviceName">Web Develepment</h1>
                                        <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i
                                            make a proper technical analysis,
                                            then i build a software architecture.
                                            According to the planning i start coding. Testing is also going on with
                                            coding. </p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImage"
                                             src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/125865310_3427710827336321_4379794445442604911_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH0bMfhmHEYVqq5HRN0U7OTdy_IrvNBzbt3L8iu80HNu-D6zby7_Tc_cyRdc-ehidF6Rb_VPLtBvQVN51PNp8SP&_nc_ohc=lwJoVJmmbSsAX-vQU0X&_nc_ht=scontent.fdac9-1.fna&oh=03db9641f96775afdff9dbf0c7704445&oe=600E9A05"/>
                                        <h1 className="serviceName">Android Develepment</h1>
                                        <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i
                                            make a proper technical analysis,
                                            then i build a software architecture.
                                            According to the planning i start coding. Testing is also going on with
                                            coding. </p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="circleImage"
                                             src="https://scontent.fdac9-1.fna.fbcdn.net/v/t1.0-9/125865310_3427710827336321_4379794445442604911_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH0bMfhmHEYVqq5HRN0U7OTdy_IrvNBzbt3L8iu80HNu-D6zby7_Tc_cyRdc-ehidF6Rb_VPLtBvQVN51PNp8SP&_nc_ohc=lwJoVJmmbSsAX-vQU0X&_nc_ht=scontent.fdac9-1.fna&oh=03db9641f96775afdff9dbf0c7704445&oe=600E9A05"/>
                                        <h1 className="serviceName">Ios Develepment</h1>
                                        <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i
                                            make a proper technical analysis,
                                            then i build a software architecture.
                                            According to the planning i start coding. Testing is also going on with
                                            coding. </p>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;