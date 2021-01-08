import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mainPicture from './image/victor-avatar.jpg'



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={mainPicture}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Junior Full Stack Web Developer</h1>

            <hr/>

          <ul>{/*I must the skills as  drop-down select menu*/}
            <li><a href="#">Introduction to information technology</a></li>
            <li><a href="#">Technical Infrastructure</a></li>
            <li><a href="#">Software Basics-Design Patterns</a></li>
            <li><a href="#">Business Programming-SDLC</a></li>
            <li><a href="#">Basic UX/UI Design Structure</a></li>
            <li><a href="#"> Web Development-HTML and CSS and JavaScript</a></li>
            <li><a href="#">Software Development-Python Programming and Flask</a></li>
            <li><a href="#"> Database-SQL-MySQL Database Server-Apache HTTP Server-NginX Server</a></li>
            <li><a href="#"> Soft Skills-Personal Development and Professional Development</a></li>





            
          </ul>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/victor-nkuna-24526911a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY9Xzgke4S7GheTGFZlsNbw%3D%3D" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/developerVictorNkuna" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/fcc276718ef-256c-4c3e-a4c3-d8bfe61859cc" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* twitter*/}
          <a href="https://twitter.com/Victor__Nkuna" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
