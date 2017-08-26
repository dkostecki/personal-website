import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './bulma.css';
import './FontAwesome/css/font-awesome.min.css';

import HomeBaseComp from './Views/HomeBaseComp';

ReactDOM.render(
  <Router>
        <Route path="/" component={HomeBaseComp} />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
