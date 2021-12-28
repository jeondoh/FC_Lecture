"use strict";
// never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 가능
// never에는 그 어떤 것도 할당 불가
// any조차도 never에게 할당 불가
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
let ac = "hello";
if (typeof ac !== 'string') {
    ac;
}
if (typeof b !== 'string') {
    b;
}
