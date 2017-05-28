import React, { Component } from 'react';
import '../BulmaFlatly.css';
import '../Aligner.css';
import HomePageHero from './Heroes/HomePageHero';

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <HomePageHero />
        <div className="Aligner-column">
          <div className="Aligner-item Aligner-item--fixed">
            <div className="content">
              <h1 className="title">Connect with me on social media</h1>
              <div className="Aligner-row">
                <div className="Aligner-item">
                <a className="button is-success is-outlined" href="https://github.com/deepankarmalhan/personal-website" target="_blank">
                  <span className="icon">
                    <i className="fa fa-github"/>
                  </span>
                  <span>
                    Fork
                  </span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
