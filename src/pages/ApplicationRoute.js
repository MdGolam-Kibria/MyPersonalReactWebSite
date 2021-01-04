import React, {Component, Fragment} from 'react'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import CoursesPage from './CoursesPage'
import HomePage from './HomePage'
import ProtfolioPage from './ProtfolioPage'
import ServicePage from './ServicePage'

import {Route, Switch} from 'react-router-dom'
import {AnimatedSwitch} from "react-router-transition";//////


class ApplicationRoute extends Component {
    render() {
        return (
            <Fragment>
                {/*<Switch>*/}
                {/*here AnimatedSwitch use only for route time animation using react NPM library */}
                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0.9}}
                    atActive={{opacity: 1}}
                    className="switch-wrapper"
                >

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/protfolio" component={ProtfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </AnimatedSwitch>


                {/*</Switch>*/}
            </Fragment>
        );
    }
}

export default ApplicationRoute;