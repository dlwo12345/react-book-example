import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MyComponent />
        <MyComponent />
      </Fragment>
    );
  }
}

export default App;
