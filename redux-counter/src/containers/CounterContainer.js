import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

// 13가지 색상 중 랜덤으로 선택하는 함수
export const getRandomColor = () => {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#24292e',
        '#1862ac',
        '#38ced5',
        '#be63d5',
        '#fe1b7a',
        '#1bfe41',
        '#dbfe1b',
        '#feb81b',
        '#fe4f1b',
        '#7a3925'
    ];

    // 0부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    // 랜덤 색상 반환
    return colors[random];
}

// store 안의 state 값을 props로 연결
const mapStateToProps = state => ({
    color: state.colorData.color,
    number: state.numberData.number
});

/**
 * 액션 생성 함수를 사용하여 액션을 생성하고,
 * 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결
 */
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;