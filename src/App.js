import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';

class App extends Component {

  render() {
    return (
      // <Fragment>
      //   <MyComponent name="강낭콩" />
      //   <MyComponent />
      // </Fragment>
      <Fragment>
        <EventPractice />
      </Fragment>
    );
  }
}

export default App;