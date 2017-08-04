import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeBaseComp from './Views/HomeBaseComp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path={`${this.props.match.url}`} component={HomeBaseComp}/>
      </div>
    );
  }
}

export default App;
