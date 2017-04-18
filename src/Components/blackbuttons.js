//<input type="button" className="button gray" value="m-" />

import React, { Component } from 'react';

class Blackbuttons extends Component {
  render() {
    return (
   		<input type="button" className="button black" value={this.props.name} />
    );
  }
}

export default Blackbuttons;
