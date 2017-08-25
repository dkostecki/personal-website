import React, { Component } from 'react';

import Breadcrumb from './Breadcrumb';
import ResumePDF from '../Assets/PDF/Resume.pdf';

export default class Resume extends Component {
  render () {
    return (
      <div className="container">
        <Breadcrumb currentPath={this.props.location.pathname} />
        <h3 className="title">RESUME</h3>
        <hr/>

        <section className="section">
            <div className="content">
              This page is my Resume explained in-depth with all the things I couldn't put on a single page of paper. Before we start, download my portable (not in-depth) Resume
              version <a href={ResumePDF}>here</a>!
            </div>
        </section>

      </div>
    );
  }
};
