import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
 } from 'react-router-dom';

import Logo from '../Assets/Images/MyFace_Circular.png';
import HomeBodyComp from './HomeBodyComp';

import Resume from './Resume';
import NotFound from './NotFound';

export default class HomeBaseComp extends Component {
  render() {
    // Default value of Header for the page will be the one that should be rendered for the Homepage
    var Header = (
      <header>
        <br />
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <div className= "level-item has-text-centered">
                <figure className="image is-128x128">
                  <img src={Logo} alt="Cool logo" onClick={() => window.open(Logo)}/>
                </figure>
              </div>
            </div>
          </div>
          <div className="container has-text-centered">
          <h3 className="subtitle" style={{color: 'white'}}>Deepankar Malhan, a Senior Computer Science major (Honors) @ <a href="https://www.ccsu.edu/">Central Connecticut State University</a></h3>
          </div>
          <br/>
        </div>
      </header>
    );

    if(this.props.location.pathname !== '/') {
      // This means we are not at the homepage, so display NavBar instead of Homepage header
      Header = (
        <header>
          <br/>
          <div className="container has-text-centered">
                <h3 className="subtitle" style={{color: 'white'}}>Go back to <Link to="/">Home</Link></h3>
          </div>
            <br/>
        </header>
      );
    }

    return (
      <section className="hero is-fullheight">

        <div className="hero-head" style={{text: 'white', backgroundColor: '#08a88a'}}>
          {Header}
        </div>

        <div className="hero-body">
          <Switch>
            <Route exact path="/" component={HomeBodyComp} />
            <Route path={`${this.props.match.url}resume`} component={Resume} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </section>
    );
  }
};
