import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="notification is-danger">
          The URL you tried to access ({`deepankar-malhan.info${this.props.location.pathname}`}) does not exist :(
        </div>
      </div>
    );
  }
}
