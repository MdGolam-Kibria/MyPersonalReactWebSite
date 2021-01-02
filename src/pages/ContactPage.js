import React, { Component, Fragment } from 'react'
import TopNavigation from '../componants/topNavigation/TopNavigation'
import PageTop from '../componants/pageTop/PageTop'
import ContactSection from '../componants/contactSection/ContactSection'
import Footer from '../componants/footer/Footer'


class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Contact"/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;
