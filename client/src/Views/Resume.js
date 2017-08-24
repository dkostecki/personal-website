import React, { Component } from 'react';

import Breadcrumb from './Breadcrumb';

export default class Resume extends Component {
  render () {
    return (
      <div>
        <Breadcrumb currentPath={this.props.location.pathname} />
        <h1>Resume rendered here</h1>
      </div>
    );
  }
};
