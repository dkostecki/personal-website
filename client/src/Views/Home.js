import React, { Component } from 'react';
import '../BulmaFlatly.css';
import '../Aligner.css';
import HomePageHero from './Heroes/HomePageHero';

export default class Home extends Component {
  // TODO: Flexbox not working correctly when the page is re-rendered.
  render() {
    return (
      <div className="homePage">
        <HomePageHero />
        <div className="Aligner-column">
          <div className="Aligner-item Aligner-item--fixed">
              <center><h1 className="title">Connect with me</h1></center>
              <hr />
              <div className="Aligner-row">
                <div className="Aligner-item">
                  <a className="button is-success is-outlined" href="https://github.com/deepankarmalhan" target="_blank">
                    <span className="icon">
                      <i className="fa fa-github-square"/>
                    </span>
                    <span>
                      Github Profile
                    </span>
                  </a>
                </div>
                <div className="Aligner-item">
                  <a className="button is-primary is-outlined" href="https://linkedin.com/in/deepankarmalhan" target="_blank">
                    <span className="icon">
                      <i className="fa fa-linkedin-square"/>
                    </span>
                    <span>
                      LinkedIn Profile
                    </span>
                  </a>
                </div>
                <div className="Aligner-item">
                  <a className="button is-info is-outlined" href="https://facebook.com/DeepankarMalhan" target="_blank">
                    <span className="icon">
                      <i className="fa fa-facebook-square"/>
                    </span>
                    <span>
                      Facebook Profile
                    </span>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
