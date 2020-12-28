import React from "react";
import TopBanner from "./componants/topbanner/TopBanner";
import Services from "./componants/services/services";
import TopNavigation from "./componants/topNavigation/TopNavigation";
import Analysis from "./componants/analysis/Analysis";
import Summary from "./componants/summary/Summary"
import RecentProjects from "./componants/recentProjects/RecentProjects"
import Courses from "./componants/courses/courses"
import Video from "./componants/video/video"
import ClientReview from "./componants/clientReview/ClientReview"


function App() {
    return (
        <div>
            <TopNavigation/>
            <TopBanner/>
            <Services/>
            <Analysis/>
            <Summary/>
            <RecentProjects/>
            <Courses/>
            <Video/>
            <ClientReview/>
        </div>
    );
}

export default App;
