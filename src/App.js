import React from 'react';
import ProjectDashboard from './ProjectDashboard';
import ViewProject from './ViewProject';
import { HashRouter, Route } from 'react-router-dom';

function App() {
    return ( 
        <HashRouter>
            <Route exact path='/' component={ProjectDashboard} />
            <Route path='/:projectId' component={ViewProject} />
        </HashRouter>
    );
}

export default App;
