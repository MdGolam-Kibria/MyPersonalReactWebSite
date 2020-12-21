import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogowhite.svg'
import blueLogo from '../../asset/image/navlogoscroll.svg'

import "../../asset/css/custom.css"
import "../../asset/css/bootstrap.min.css"

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: 'navTitle',//initialize css class as a state object
            navBarLogo: [whiteLogo],//for nav logo
            nabBarBackground: 'navBackground',
            navItemColor: 'navItem'
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {//means if i scroll down means above of 100% of screen then...
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                nabBarBackground: 'navBackgroundScroll',
                navItemColor: 'navItemScroll'
            })
        } else if (window.scrollY < 100) {//means if i scroll up means less of 100% of screen then...
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                nabBarBackground: 'navBackground',
                navItemColor: 'navItem'/**here {navItem is a css class like above} */
            })
        }
    }

    componentDidMount() {//this method from react lifeCycle.....if i want to change something after load page runtime/or event call this method more help for me
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.nabBarBackground/**for set navBar background from state*/} fixed="top"
                        collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle/** call from state*/} href="#home">
                        <img src={this.state.navBarLogo}/>
                        <span> </span>Golam Kibria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navItemColor} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navItemColor} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navItemColor} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navItemColor} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navItemColor} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navItemColor} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;