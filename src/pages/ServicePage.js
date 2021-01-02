import React, { Component, Fragment } from 'react';
import TopNavigation from '../componants/topNavigation/TopNavigation'
import PageTop from '../componants/pageTop/PageTop'
import Footer from '../componants/footer/Footer'
import Services from '../componants/services/services';
import ContactSection from '../componants/contactSection/ContactSection';

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Service"/>
                <Services/>
                <ContactSection/>
                <Footer/>
</Fragment>
        );
    }
}

export default ServicePage;