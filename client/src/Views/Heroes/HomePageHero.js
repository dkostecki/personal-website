import React, { Component } from 'react';
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
            <br />
            <h2 className="subtitle">Feel free to look around and find out more about me!
             For general queries (recommendation on starting in Computer Science, video games and TV shows), please contact me
              through <code>Contact Me</code> For business related things (my Resume, past jobs and past projects) go to <code>Business</code> tab.
            </h2>
          </div>
        </div>
      </section>
    );
  }
};
