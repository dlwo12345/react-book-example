import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';

class App extends Component {

  render() {
    return (
      <Fragment>
        {/* <MyComponent name="강낭콩" /> */}
        {/* <MyComponent /> */}
        {/* <EventPractice /> */}
        <ValidationSample />
      </Fragment>
    );
  }
}

export default App;
