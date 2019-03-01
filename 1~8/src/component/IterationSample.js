import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleButtonClick = () => {
        this.handleInsert();

        this.input.focus();
    }

    handleRemove = index => {
        const { names } = this.state;
        this.setState({
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, i) => (
                <li key={i}>
                    {name}
                    <button onClick={() => { this.handleRemove(i) }}>x</button>
                </li>
            )
        );

        return (
            <div>
                <input
                    ref={ref => this.input = ref}
                    onChange={this.handleChange}
                    value={this.state.name}
                >
                </input>
                <button onClick={this.handleButtonClick}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;