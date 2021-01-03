import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import TopNavigation from '../componants/topNavigation/TopNavigation'
import PageTop from '../componants/pageTop/PageTop'
import AboutDescription from '../componants/aboutDescription/AboutDescription'
import Footer from '../componants/footer/Footer'

//formation about portion via merge needed componant

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;