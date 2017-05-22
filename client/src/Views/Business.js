import React, { Component } from 'react';
import BusinessPageHero from './Heroes/BusinessPageHero';

export default class Business extends Component {
  render() {
    return (
      <div className="businessPage">
        <BusinessPageHero />
        <h1 className="title">Business page rendered</h1>
      </div>
    );
  }
};
