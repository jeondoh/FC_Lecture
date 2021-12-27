"use strict";
// 타입을 한정지어야만 사용할 수 있는 타입
// ts 3.0 버전부터 지원
// any와 짝으로 any보다 type-safe한 타입
// any와 같이 아무거나 할당 가능
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// 타잊을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있다.
// 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 api에 사용할 수 있을 것 같다.
// const aNumber: number = maybe;
// 타입가드
if (maybe === true) {
    const aBoolean = maybe;
}
if (typeof maybe === 'string') {
    const aString = maybe;
}
