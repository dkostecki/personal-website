import React, { Component } from 'react';
import NavBar from './NavBar';
import '../BulmaFlatly.css';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroBodyType: this.props.pageType || 'home'
    }
  }

  render() {
    // switch(this.state.heroBodyType) {
    //   case 'contact':
    //     return renderContactPage();
    //   default:
    //     return renderHomePage();
    // };
    return (
      <section className="hero is-primary">
        <div className="hero-head">
          <NavBar />
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title"> Welcome to Deepankar Malhan's Personal Website</h1>
            <br />
            <h2 className="subtitle">Please feel free to look around and find out more about me!
             For general queries (such as asking for my help on a particular topic I discussed somewhere on the Internet), please contact me
              through the navigation bar's label <code>Contact Me</code> For hiring me as a private tutor, looking at my Resume, jobs I've held, etc.
              proceed to tab labeled <code>Resume | Hire Me</code></h2>
          </div>
        </div>
      </section>
    );
  }

  renderContactPage() {
    return (
      <section className="hero is-primary is-bold">
        <div className="hero-head">
        </div>
      </section>
    )
  }
};
