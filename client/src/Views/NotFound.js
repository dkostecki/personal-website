import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Logo from '../Assets/Images/Logo.png';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={Logo} alt="logo"  style={{height:'50%', width:'50%'}}/>

            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="What's '/dev/null'?"
            >
              <div className="container">
                <h2 className="subtitle"><strong>What's <code>/dev/null</code></strong></h2>
                <hr />
                <div className="content">
                  <p>
                    Suppose you run a program on the terminal which is very verbose, and you are not interested in reading through
                    the entirety of the output. That's where <i>/dev/null</i> comes in; it is a special file on *NIX systems
                    which takes in a stream of data and converts it to null. This means that the output of a program could be redirected
                    to that special file and it will not take up additional space on the system, <strong>and not show the output on the terminal!</strong>
                  </p>
                </div>
              </div>
              <br/>
              <a className="is-pulled-right" onClick={this.closeModal}><span>Close</span></a>
            </ReactModal>

            <br/>
            <br/>

            <h1 className="title">
              [ERROR 404: Page doesn't exist]
            </h1>
            <h2 className="subtitle">
              $ echo "Please stop trying to break the website" > <a onClick={this.openModal}>/dev/null</a>
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
