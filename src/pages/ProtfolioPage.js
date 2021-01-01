import React, {Component, Fragment} from 'react';
import TopNavigation from '../componants/topNavigation/TopNavigation'
import PageTop from '../componants/pageTop/PageTop'
import Footer from '../componants/footer/Footer'
import AllProjects from '../componants/AllProjects/AllProjects'

class ProtfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProtfolioPage;