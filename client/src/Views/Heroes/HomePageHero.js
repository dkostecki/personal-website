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
            <h1 className="title">Welcome to my corner of the Internet</h1>
            <br />
            <h2 className="subtitle">Feel free to look around and find out more about me!
             For general queries (such as asking for my help on a particular topic I discussed somewhere on the Internet), please contact me
              through the navigation bar's label <code>Contact Me</code> For hiring me as a private tutor, looking at my Resume, jobs I've held, etc.
              proceed to tab labeled <code>Resume | Hire Me</code></h2>
          </div>
        </div>
      </section>
    );
  }
};
