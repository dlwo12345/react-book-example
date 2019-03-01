import React from 'react';

/**
 * 함수형 컴포넌트
 * 라이프사이클, state등을 활용하지 않는 간단한 상황에서는 함수형컴포넌트를 사용하는것이
 * 성능상의 이점을 가져올 수 있음
 */
const FunctionComponent = ({ name }) => (<div> Hello {name}</div>);

export default FunctionComponent;