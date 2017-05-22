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
            <Link className={(this.state.pageType === 'home') ? "nav-item is-active": "nav-item"} to="/">{`<Home />`}</Link>
            <Link className={(this.state.pageType === 'contact') ? "nav-item is-active": "nav-item"} to="/contactme">
              {`<ContactMe />`}
            </Link>
          </div>

          <div className="nav-center">
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

          <span className={ (this.state.isMobile) ? 'nav-toggle is-active' : 'nav-toggle' } onClick={ this.toggleMobileNav }>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={(this.state.isMobile) ? 'nav-right nav-menu is-active' : 'nav-right nav-menu'}>
            <Link to="/hobbies" className={(this.state.pageType === 'hobbies') ? "nav-item is-active" : "nav-item"}>{`<HobbiesCorner/>`}</Link>
            <Link to="/business" className={(this.state.pageType === 'business') ? "nav-item is-active" : "nav-item"}>{`<BusinessStreet/>`}</Link>
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
