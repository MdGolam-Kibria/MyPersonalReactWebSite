import React from "react";
import TopBanner from "./componants/topbanner/TopBanner";
import Services from "./componants/services/services";
import TopNavigation from "./componants/topNavigation/TopNavigation";
import Analysis from "./componants/analysis/Analysis";


function App() {
    return (
        <div>
            <TopNavigation/>
            <TopBanner/>
            <Services/>
            <Analysis/>
        </div>
    );
}

export default App;
