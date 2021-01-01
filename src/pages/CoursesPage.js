import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import TopNavigation from '../componants/topNavigation/TopNavigation'
import PageTop from '../componants/pageTop/PageTop'
import AllCourses from '../componants/allCourses/AllCourses'
import Footer from '../componants/footer/Footer'

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                {/*send page title by props called ''pagetitle'*/}
                <PageTop pagetitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;