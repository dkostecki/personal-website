import React, { Component } from 'react';
import Hero from './Views/Hero';
import { Route } from 'react-router-dom';
import Home from './Views/Home';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <Route exact path={`${this.props.match.url}`} component={ Home } />
      </div>
    );
  }
};
