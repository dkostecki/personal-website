import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/Logo.png';

export default class NotFound extends Component {
  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={Logo} alt="logo"  style={{height:'50%', width:'50%'}}/>

            <br/>
            <br/>

            <h1 className="title">
              [ERROR 404: Page doesn't exist]
            </h1>
            <h2 className="subtitle">
              $ echo "Please stop trying to break the website" > /dev/null
            </h2>
            <div className="field has-addons has-addons-centered">
              <p className="control">
                <Link className="button is-light is-outlined is-inverted" to="/">
                  <span className="icon">
                    <i className="fa fa-exclamation-triangle"/>
                  </span>
                  <span>
                    Take me back to the Homepage
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
