// 액션 타입 정의
const SHOW_ALL = "06_redux/filter/SHOW_ALL";
const SHOW_COMPLETE = "06_redux/filter/SHOW_COMPLETE";

// 액션 생성 함수
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

export function showAll() {
  return { type: SHOW_ALL };
}
// 초기값
const initalState = "ALL";

// 리듀서
export default function reducer(previousState = initalState, action) {
  // 초기값 설정
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  return previousState;
}
