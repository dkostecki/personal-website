import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: props.currentPath || null,
      pathArray: props.currentPath.split('/')
    };
  }

  render() {
    if(this.state.currentPath === null) {
      return (
        <div>Breadcrumb should be rendered here but no path given</div>
      );
    }

    return (
      <nav className="breadcrumb has-arrow-separator">
        <ul>
          <li key="0"><Link to="/">Home</Link></li>
          {
            this.state.pathArray.map((path, index) => {
              // Don't want any <li> if its the homepage or for the first index of the tokenized path (because the first one is empty -> '/path' === ['','path'])
              if(this.state.currentPath === '/' || index === 0) {
                return;
              }

              // Build a string for the current element's link for proper navigation
              let linkVal = ``;
              for (var i = 1; i <= index; i++) {
                linkVal += `/${this.state.pathArray[i]}`
              }

              return <li key={index+1}><Link to={linkVal}>{`${path.substring(0,1).toUpperCase()}${path.substring(1,path.length)}`}</Link></li>
            })
          }
        </ul>
      </nav>
    );
  }
};
