import React, { Component } from 'react';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
import CounterContainer from './CounterContainer';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                {/* <Counter /> */}
                {/* <CounterContainer /> */}
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                ></Buttons>
                <CounterListContainer />
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
})

export default connect(null, mapToDispatch)(App);