import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

export default class HomeBodyComp extends Component {
  render() {
    return (
        <div className="container">
          <br/>
          <Breadcrumb currentPath={this.props.location.pathname} />

              <h1 className="title has-text-centered">
                WELCOME
              </h1>
              <h2 className="subtitle has-text-centered">
                Please choose a topic to move forward
              </h2>

              <div className="columns">
                <div className="container">
                  <div className="column">
                    <h1 className="subtitle">
                      PERSONAL
                    </h1>
                    <hr/>
                    <aside className="menu">
                      <ul className="menu-list">
                        <li><Link to="personal/blog">Blog</Link></li>
                        <li><Link to="personal/sites">Interesting sites</Link></li>
                        <li><Link to="personal/hobbies">Hobbies</Link></li>
                        <li>
                          <ul>
                            <li><Link to="personal/hobbies/books">Books</Link></li>
                            <li><Link to="personal/hobbies/books">Video Games</Link></li>
                          </ul>
                        </li>
                        <li><Link to="connect">Connect with me</Link></li>
                        <li>
                          <ul>
                            <li><Link to="connect/social">Through social media</Link></li>
                            <li><Link to="connect/web">Through this website</Link></li>
                            <li><a href="mailto:deepankarmalhan@gmail.com">Through email</a></li>
                          </ul>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>

                <div className="container">
                  <div className="column">
                  <h1 className="subtitle">
                    PROFFESIONAL
                  </h1>
                  <hr/>
                  <aside className="menu">
                    <ul className="menu-list">
                      <li><Link to="resume">Resume</Link></li>
                      <li><Link to="projects">Projects</Link></li>
                      <li>
                        <ul>
                          <li><Link to="projects/thiswebsite">This site</Link></li>
                          <li><Link to="projects/fooddiary">Food diary</Link></li>
                          <li><Link to="projects/gifgenerator">gifGenerator</Link></li>
                        </ul>
                      </li>
                      <li><Link to="skills">Skills</Link></li>
                      <li>
                        <ul>
                          <li><Link to="skills/web">Web development</Link></li>
                          <li><Link to="skills/oop">OOP development</Link></li>
                          <li><Link to="skills/db">Databases</Link></li>
                          <li><Link to="skills/tools">Tools (Git, Heroku, etc.)</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </aside>
                  </div>
                </div>
              </div>
            </div>
    );
  }
};
