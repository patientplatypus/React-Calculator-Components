import React, { Component } from 'react';
import './App.css';
import Blackbuttons from './Components/blackbuttons';
import Greybuttons from './Components/greybuttons';
import Pinkbuttons from './Components/pinkbuttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="keys">
            <p>
              <Greybuttons name="mrc"/>
              <Greybuttons name="m-"/>
              <Greybuttons name="m+"/>
              <Pinkbuttons name="/" />
            </p>
            <p>
              <Blackbuttons name="7" />
              <Blackbuttons name="8" />
              <Blackbuttons name="9" />
              <Pinkbuttons name="*" />
              </p>
              <p>
                <Blackbuttons name="4" />
                <Blackbuttons name="5" />
                <Blackbuttons name="6" />
                <Pinkbuttons name="." />
                  </p>
                <p>
                <Blackbuttons name="1" />
                <Blackbuttons name="2" />
                <Blackbuttons name="3" />
                <Pinkbuttons name="+" />
                  </p>
                <p>
                <Blackbuttons name="0" />
                <Blackbuttons name="." />
                <Blackbuttons name="C" />
                <Pinkbuttons name="=" />
                  </p>
              </div>
            </div>
          </div>
    );
  }
}

export default App;
