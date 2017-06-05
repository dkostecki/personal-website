import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import '../../BulmaFlatly.css';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-head">
          <div className="container">
            <NavBar pageType="home" />
          </div>
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome!</h1>
            <hr />
            <h2 className="subtitle">Feel free to look around and find out more about me!
             For starting a discussion (recommendation on starting in Computer Science, and anything mentioned on my <u><Link to="/hobbies">Hobbies</Link></u> page), please contact me
              through <u><Link to="/contactme">Contact Me</Link></u> For business related things (my Resume, past jobs and past projects) go to <u><Link to="/business">Business</Link></u> tab.
            </h2>
          </div>
        </div>
      </section>
    );
  }
};
