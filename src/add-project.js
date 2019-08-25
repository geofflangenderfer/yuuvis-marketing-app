import React from 'react';
// import hackathon from './images/hackathon.jpg';
import './view-project.css';

function ViewProject() {
  return (
    <div class="add-project">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/project-dashboard' component={ProjectDashboard}/>
        <Route path='/view-project' component={ViewProject}/>
      </Switch>
      <h1>Yuuvis Austin Hackathon</h1>
      <input class="add-project-text" type="text" placeholder="Project Title"/>
      <h2>Description</h2>
      <input class="add-project-text" type="text" placeholder="Enter a description of your project here!"/>
      <h2>Produced Videos</h2>
      <div class="add-project-whitebg">
        <input class="add-project-button" type="button" value="+"/>
      </div>
      <h2>Press Articles</h2>
      <div class="add-project-whitebg">
        <input class="add-project-button" type="button" value="+"/>
      </div>
      <h2>Organizers</h2>
      <div class="add-project-whitebg">
        <input class="add-project-button" type="button" value="+"/>
      </div>
      <Link to="./project-dashboard.js">
        <input class="submit-button-view" type="submit" />
      </Link>
    </div>
  );
}

export default ViewProject;





