import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../BulmaFlatly.css';
import '../font-awesome/css/font-awesome.min.css';


export default class NavBar extends Component {
  constructor(props) {
    super (props);
    this.state = {
      pageType: this.props.pageType || 'home',
      isActive: this.props.isActive || true,
      isMobile: false
    };
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <div className="nav-item">
              <Link to="/" className="title">Home</Link>
            </div>
          </div>

          <span className={ (this.state.isMobile) ? 'nav-toggle is-active' : 'nav-toggle' } onClick={ this.toggleMobileNav }>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={(this.state.isMobile) ? 'nav-right nav-menu is-active' : 'nav-right nav-menu'}>
            <Link className="nav-item" to="/hobbies">
              Hobbies Corner
            </Link>
            <Link className="nav-item" to="/business">
              Resume | Hire Me
            </Link>
            <Link className="nav-item" to="/contactme">
              Contact Me
            </Link>

            <span className="nav-item">
              <a className="button is-dark" href="https://github.com/deepankarmalhan/node-personal-website" target="_blank">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Fork this website</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
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
