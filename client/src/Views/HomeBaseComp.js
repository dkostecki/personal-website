import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Assets/Images/Logo.png';
import HomeBodyComp from './HomeBodyComp';

export default class HomeBaseComp extends Component {
  render() {
    return (
      <section className="hero is-fullheight">

        <div className="hero-head">
          <header>
            <br />
            <div className="container">
              <nav className="level">
                <Link className= "level-item has-text-centered" to="/">
                  <figure className="image is-128x128">
                    <img src={Logo} alt="Cool logo"/>
                  </figure>
                </Link>
              </nav>
            </div>
          </header>
        </div>

        <div className="hero-body">
            <HomeBodyComp />
        </div>
      </section>
    );
  }
};
