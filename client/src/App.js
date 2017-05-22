import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Views/Home';
import Business from './Views/Business';
import Hobbies from './Views/Hobbies';
import ContactMe from './Views/ContactMe.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path={`${this.props.match.url}`} component={ Home } />
        <Route path={`${this.props.match.url}business`} component={ Business } />
        <Route path={`${this.props.match.url}hobbies`} component={ Hobbies } />
        <Route path={`${this.props.match.url}contactme`} component={ ContactMe } />
       </div>
    );
  }
};
