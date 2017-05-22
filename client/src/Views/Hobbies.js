import React, { Component } from 'react';
import HobbiesPageHero from './Heroes/HobbiesPageHero';

export default class Hobbies extends Component {
  render() {
    return (
      <div className="hobbiesPage">
        <HobbiesPageHero />
        <h1 className="title">Hobbies rendered successfully too, you are awesome!</h1>
      </div>
    );
  }
};
