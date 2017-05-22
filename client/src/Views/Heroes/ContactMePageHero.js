import React, { Component } from 'react';
import '../../BulmaFlatly.css';
import NavBar from '../NavBar';

export default class ContactMePageHero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-head">
          <div className="container">
            <NavBar pageType="contact" />
          </div>
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title">Contact Me Below</h1>
          </div>
        </div>
      </section>
    );
  }
};
