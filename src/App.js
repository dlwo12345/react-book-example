import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';

class App extends Component {

  render() {
    return (
      <Fragment>
        {/* <MyComponent name="강낭콩" /> */}
        {/* <MyComponent /> */}
        {/* <EventPractice /> */}
        {/* <ValidationSample /> */}
        <ScrollBox ref={ref => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 아래로 가기</button>
      </Fragment>
    );
  }
}

export default App;
