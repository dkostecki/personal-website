import React, { Component } from 'react';
import ContactMePageHero from './Heroes/ContactMePageHero';
import '../Aligner.css';

export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: false
    };
  }

  closeErrorMsg = (e) => {
    e.preventDefault();
    this.setState({ errorMsg: false });
  }

  render() {
    let errorMsg = (<div></div>);

    if(this.state.errorMsg) {
      errorMsg = (
        <div className="notification is-danger">
          <button className="delete is-small" onClick={this.closeErrorMsg} />
          Could not successfully create a contact request log in the backend, or could
          not send a notification to me through an email. Please try again, or refresh the page.
        </div>
      );
    }

    return (
      <div className="contact-me-page">
        <ContactMePageHero />

        <div className="Aligner-column">
          <div className="Aligner-item Aligner-item--fixed">
            <h2 className="subtitle">Required fields are marked with *</h2>
            <hr />
            <form id="contactmeform">
              {errorMsg}

              <div className="field">
                <label className="label">Full name</label>
                <p className="control">
                  <input id="fullnamecontactme" className="input" type="text" placeholder="Enter your full name or pseudoname here." />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};
