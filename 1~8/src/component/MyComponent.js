import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        name: '이름',
    }
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                {this.props.name}입니다. 제 나이는 {this.state.number}입니다.
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>덧셈</button>
            </div>
        );
    }
}

export default MyComponent;