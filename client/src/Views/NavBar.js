import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../BulmaFlatly.css';
import '../font-awesome/css/font-awesome.min.css';


export default class NavBar extends Component {
  constructor(props) {
    super (props);
    this.state = {
      pageType: this.props.pageType || 'home',
      isMobile: false
    };
  }

  render() {
    return (
      <div className="container">
        <nav className="nav has-shadow">
          <div className="nav-left">
            <nav className="level is-mobile">
              <div className="level-item has-text-centered">
                <Link className="tabs is-large is-centered" to="/">Deepankar Malhan</Link>
              </div>
            </nav>
          </div>

          <span className={ (this.state.isMobile) ? 'nav-toggle is-active' : 'nav-toggle' } onClick={ this.toggleMobileNav }>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={(this.state.isMobile) ? 'nav-right nav-menu is-active' : 'nav-right nav-menu'}>
            <Link className={(this.state.pageType === 'contact') ? "nav-item is-active is-tab": "nav-item is-tab"} to="/contactme">
              Contact Me
            </Link>
            <Link to="/hobbies" className={(this.state.pageType === 'hobbies') ? "nav-item is-active is-tab" : "nav-item is-tab"}>Hobbies</Link>
            <Link to="/business" className={(this.state.pageType === 'business') ? "nav-item is-active is-tab" : "nav-item is-tab"}>Business</Link>
            <div className="nav-item">
              <a className="button is-light is-outlined" href="https://github.com/deepankarmalhan/personal-website" target="_blank">
                <span className="icon">
                  <i className="fa fa-github"/>
                </span>
                <span>
                  Fork
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  toggleMobileNav = () => {
    this.setState((prevState, props) => {
      return {
        isMobile: !prevState.isMobile
      };
    });
  }
};
