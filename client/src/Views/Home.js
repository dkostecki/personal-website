import React, { Component } from 'react';
import '../BulmaFlatly.css';
import HomePageHero from './Heroes/HomePageHero';

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <HomePageHero />
        <h1 className="title">Hello World!</h1>
      </div>
    );
  }
}
