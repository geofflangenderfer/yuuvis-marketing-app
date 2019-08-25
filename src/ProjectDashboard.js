import React from 'react';
import hackathon from './images/hackathon.jpg';
import location from './images/location.png';
import search from './images/search.png';
import './css/ProjectDashboard.css';
import { Link } from "react-router-dom";
import ViewProject from './ViewProject';
//import ProjectDashboard from './project-dashboard';

function ProjectDashboard() {
  return (
    <div className="project-dashboard">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/project-dashboard' component={ProjectDashboard}/>
        <Route path='/view-project' component={ViewProject}/>
      </Switch>
      <div class="input-bar">
        <div>
          <img className="category-icon" src={search} />
          <input className="category" type="text" name="firstname" placeholder="Category or Keyword" />
        </div>
        <div>
          <img className="location-icon" src={location} />
          <input className="location" type="text" name="firstname" placeholder="Choose Location" />
        </div>
        <input className="submit-button" type="submit" />
        <Link to="./add-project.js">
          <input class="add-button" type="button" value="+"/>
        </Link>
      </div>

      <div className="main-content">
        <div className="filter">
          <h4>Team</h4>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Engineering</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Marketing</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Management</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Human Resources</label>
          </div>

          <h4>Types of Files</h4>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Youtube</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Brochures</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Copyright</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Images</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Flyers</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Press Articles</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Research Papers</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Presentations</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">PDF Documents</label>
          </div>

          <h4>Relevancy</h4>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Past 3 weeks</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Past 3 months</label>
          </div>
          <div>
            <input type="checkbox" name="scales" />
            <label for="scales">Past year</label>
          </div>
        </div>

          <div className="project-card-container">
            <div className="project-card-holder">
                <div className="project-card">
                  <Link to="/project1">
                    <img src={hackathon} />
                  </Link>
                  <h3>Project Title</h3>
                  <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                  <p>
                    <span>Austin, TX</span>
                    <span>Galvanize</span>
                  </p>
                </div>

              <Link to="./view-project.js">
                <div className="project-card">
                  <img src={hackathon} />
                  <h3>Project Title</h3>
                  <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                  <p>
                    <span>Austin, TX</span>
                    <span>Galvanize</span>
                  </p>
                </div>
              </Link>

              <Link to="./view-project.js">
                <div className="project-card">
                  <img src={hackathon} />
                  <h3>Project Title</h3>
                  <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                  <p>
                    <span>Austin, TX</span>
                    <span>Galvanize</span>
                  </p>
                </div>
              </Link>

              <Link to="./view-project.js">
                <div className="project-card-holder">
                  <div className="project-card">
                    <img src={hackathon} />
                    <h3>Project Title</h3>
                    <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                    <p>
                      <span>Austin, TX</span>
                      <span>Galvanize</span>
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="./view-project.js">
                <div className="project-card">
                  <img src={hackathon} />
                  <h3>Project Title</h3>
                  <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                  <p>
                    <span>Austin, TX</span>
                    <span>Galvanize</span>
                  </p>
                </div>
              </Link>

              <Link to="./view-project.js">
                <div className="project-card">
                  <img src={hackathon} />
                  <h3>Project Title</h3>
                  <p>This is the project description. Here we can show a preview of what the text will look like, and what kind of files users can expect.</p>
                  <p>
                    <span>Austin, TX</span>
                    <span>Galvanize</span>
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectDashboard;





