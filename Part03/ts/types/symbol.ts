// 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만들어줌
// 주로 접근을 제어할때 쓰는 경우가 많음
// 함수로 사용할때는 대문자 Symbol, 타입으로 사용할때는 소문자 symbol
console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();
const obj = {
  [sym]: "value",
};

obj[sym];