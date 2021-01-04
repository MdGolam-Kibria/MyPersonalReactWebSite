import React from "react";
import {BrowserRouter} from 'react-router-dom'
import ApplicationRoute from './pages/ApplicationRoute'

function App() {
    return (

        <BrowserRouter>
            <ApplicationRoute/>
        </BrowserRouter>

    );
}

export default App;
