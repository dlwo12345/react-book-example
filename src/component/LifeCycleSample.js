import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }


    /**
     * props로 받아온 값을 state에 동기화 하는 용도로 사용하는 훅
     * 컴포넌트를 마운트하거나 props를 변경할때 호출함.
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) { // 조건에 따라 특정 값을 동기화한다.
            return { color: nextProps.color };
        }
        return null; // state를 변경할 필요가 없다면 null반환
    }

    /**
     * 컴포넌트를 만들고, 첫 렌더링을 마친 후 실행
     * 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리할때 사용
     */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /**
     * props나 state값이 변경되었을때 리렌더링을 실행할지 여부를 결정하는 메서드
     * return은 boolean형태여야함
     * 현재 props와 state는 this.props, this.state로 접근하고
     * 새로설정된 props,state는 nextProps와 nextState로 접근
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않음
        return nextState.number % 10 !== 4;
    }

    /**
     * 컴포넌트가 DOM에서 제거될때 호출되는 훅
     * 이벤트, 타이머, 삭제해야할 DOM등을 제거해줄때 사용
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    /**
     * render 메서드를 호출한 후 DOM에 변화를 반영하기 위해 호출되는 메서드
     * 업데이트하기 직전의 값을 참고할 일이 있을때 활용됨(ex. 스크롤바 위치 유지)
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    /**
     * 리렌더링이 완료된 후 실행
     * 업데이트가 끝난 직후이므로 dom관련 처리를 해도 무방
     * prevProps, prevState를 통해 이전에 가졌던 데이터에도 접근할 수 있음
     * getSnapshotBeforeUpdate에서 반환한 값이 있으면 여기서 snapshot으로 전달받을 수 있음
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상 : ', snapshot);
        }
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }



    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;