import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Assets/Images/MyFace_Circular.png';
import HomeBodyComp from './HomeBodyComp';

export default class HomeBaseComp extends Component {
  render() {
    return (
      <section className="hero is-fullheight">

        <div className="hero-head"  style={{text: 'white', backgroundColor: '#08a88a'}}>
          <header>
            <br />
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-narrow">
                  <Link className= "level-item has-text-centered" to="/">
                    <figure className="image is-128x128">
                      <img src={Logo} alt="Cool logo"/>
                    </figure>
                  </Link>
                </div>
              </div>
              <div className="container has-text-centered">
              <h3 className="subtitle has-text-centered" style={{color: 'white'}}>Deepankar Malhan, a Senior Computer Science major (Honors) @ <a href="https://www.ccsu.edu/">Central Connecticut State University</a></h3>
              </div>
              <br/>
            </div>
          </header>
        </div>

        <br/>
        <div className="container">
          <nav className="breadcrumb">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Homepage</Link></li>
            </ul>
          </nav>
        </div>

        <div className="hero-body">
          <HomeBodyComp />
        </div>
      </section>
    );
  }
};
