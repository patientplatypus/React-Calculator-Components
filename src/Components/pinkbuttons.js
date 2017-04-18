//<input type="button" className="button gray" value="m-" />

import React, { Component } from 'react';

class Pinkbuttons extends Component {
  render() {
    return (
   		<input type="button" className="button pink" value={this.props.name} />
    );
  }
}

export default Pinkbuttons;
