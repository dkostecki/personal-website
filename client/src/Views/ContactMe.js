import React, { Component } from 'react';
import ContactMePageHero from './Heroes/ContactMePageHero';

export default class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me-page">
        <ContactMePageHero />

        <h1 className="title">Contact Me renders properly, you genius :D</h1>
      </div>
    );
  }
};
