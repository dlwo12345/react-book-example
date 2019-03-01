import React, { Component, Fragment } from 'react';
import MyComponent from './component/MyComponent';
import EventPractice from './component/EventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import IterationSample from './component/IterationSample';
import LifeCycleSample from './component/LifeCycleSample';
import FunctionComponent from './component/functionComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <MyComponent name="리재홍" /> */}
        {/* <MyComponent /> */}
        {/* <EventPractice /> */}
        {/* <ValidationSample /> */}
        {/* <ScrollBox ref={ref => this.scrollBox = ref} /> */}
        {/* <button onClick={() => this.scrollBox.scrollToBottom()}>맨 아래로 가기</button> */}
        {/* <IterationSample /> */}
        <FunctionComponent name="리재홍" />
      </Fragment>
    );
  }
}

// // 랜덤색상 생성
// const getRandomColor = () => {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   }
//   render() {
//     return (
//       <Fragment>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <LifeCycleSample color={this.state.color} />
//       </Fragment>
//     );
//   }
// }

export default App;
