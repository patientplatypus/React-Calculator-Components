//<input type="button" className="button gray" value="m-" />

import React, { Component } from 'react';

class Greybuttons extends Component {
  render() {
    return (
   		<input type="button" className="button gray" value={this.props.name} />
    );
  }
}

export default Greybuttons;
