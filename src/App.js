import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectDashboard from './project-dashboard.js';
import ViewProject from './view-project';
import { HashRouter, Route } from 'react-router-dom';

function App() {
    return ( 
        <HashRouter>
            <Route exact path='/' component={ProjectDashboard} />
            <Route path='/addproject/:projectId' component={ViewProject} />
        </HashRouter>
    );
}

export default App;
