import React from 'react';
// import hackathon from './images/hackathon.jpg';
import './css/ViewProject.css';

function ViewProject() {
  return (
    <div class="view-project">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/project-dashboard' component={ProjectDashboard}/>
        <Route path='/view-project' component={ViewProject}/>
      </Switch>
      <div class="heading-area">
        <h1>Yuuvis Austin Hackathon</h1>
        <Link to="./add-project.js">
          <input type="button" value="Edit" class="edit-button"/>
        </Link>
        <Link to="./project-dashboard.js">
          <input type="button" value="Dashboard" class="edit-button"/>
        </Link>
      </div>
      <div class="whitebg">
        <h2>
          Description
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="whitebg">
        <h2>
          Produced Videos
        </h2>
        <div class="videos-group">
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="videos-group videos-two">
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/9RTkZaX1cH0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="whitebg">
        <h2>
          Press Articles
        </h2>
        <div class="press-card-holder">
          <div class="press-card">
            <h3>[CNN] - Austin Hackathon</h3>
            <p>Here will be a snippet from the CNN article that featured how amazing this hackathon was.</p>
          </div>
          <div class="press-card">
            <h3>[CNN] - Austin Hackathon</h3>
            <p>Here will be a snippet from the CNN article that featured how amazing this hackathon was.</p>
          </div>
          <div class="press-card">
            <h3>[CNN] - Austin Hackathon</h3>
            <p>Here will be a snippet from the CNN article that featured how amazing this hackathon was.</p>
          </div>
        </div>
      </div>
      <div class="whitebg">
        <h2>
          Organizers
        </h2>
        <div class="organizer-holder">
          <div class="organizer">
            <div></div>
            <p>Shemona Singh</p>
          </div>
          <div class="organizer">
            <div></div>
            <p>CJ Middleton</p>
          </div>
          <div class="organizer">
            <div></div>
            <p>Geoff Langenderfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProject;





