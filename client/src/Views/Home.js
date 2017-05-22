import React, { Component } from 'react';
import '../BulmaFlatly.css';
import NavBar from './NavBar';
import HomePageHero from './HomePageHero';

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
