import React, { Component, Fragment } from 'react'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import CoursesPage from './CoursesPage'
import HomePage from './HomePage'
import ProtfolioPage from './ProtfolioPage'
import ServicePage from './ServicePage'

import {Route,Switch} from 'react-router-dom'
class ApplicationRoute extends Component {
    render() {
        return (
           <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/service" component={ServicePage}/>
                <Route exact path="/course" component={CoursesPage}/>
                <Route exact path="/protfolio" component={ProtfolioPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/about" component={AboutPage}/>

            </Switch>
        </Fragment>
        );
    }
}

export default ApplicationRoute;