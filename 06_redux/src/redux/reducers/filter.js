import {SHOW_ALL, SHOW_COMPLETE} from "../actions";

const initalState = "ALL";

export default function filter(previousState = initalState, action) {
  // 초기값 설정
  if(action.type === SHOW_COMPLETE){
    return 'COMPLETE';
  }
  if(action.type === SHOW_ALL){
    return 'ALL';
  }
  return previousState;
}