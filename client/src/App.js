import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Views/Home';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path={`${this.props.match.url}`} component={ Home } />
      </div>
    );
  }
};
