import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogowhite.svg'
import blueLogo from '../../asset/image/navlogoscroll.svg'

import "../../asset/css/custom.css"
import "../../asset/css/bootstrap.min.css"
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state = {
            navBarTitle: 'navTitle',//initialize css class as a state object
            navBarLogo: [whiteLogo],//for nav logo
            navVariant: 'dark',
            nabBarBackground: 'navBackground',
            navItemColor: 'navItem',
            pageTitle: props.title //received props from others component
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {//means if i scroll down means above of 100% of screen then...
            this.setState({
                navVariant: 'light',
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                nabBarBackground: 'navBackgroundScroll',
                navItemColor: 'navItemScroll'
            })
        } else if (window.scrollY < 100) {//means if i scroll up means less of 100% of screen then...
            this.setState({
                navVariant: 'dark',
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
                {/*// for set page title get an attribute called page title*/}
                <title>{this.props.pageTitle}</title>

                <Navbar variant={this.state.navVariant}
                        className={this.state.nabBarBackground/**for set navBar background from state*/} fixed="top"
                        collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle/** call from state*/} href="#home">
                        <img src={this.state.navBarLogo}/>
                        <span> </span>Golam Kibria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>

                            <Nav.Link>
                                {/*Here  exact activeStyle={{color: '#00a8ee'}}  means

                                 after click a navlink exact navlink change color*/}
                                 <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/">HOME</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/service">SERVICES</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/course">COURSES</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/protfolio">PORTFOLIO</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/contact">CONTACT</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navItemColor}
                                         to="/about">ABOUT</NavLink>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;