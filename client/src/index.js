import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './Views/NotFound';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './bulma.css';
import './FontAwesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
