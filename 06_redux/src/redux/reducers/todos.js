import {ADD_TODO, COMPLETE_TODO} from "../actions";

const initalState = [];

export default function todos(previousState = initalState, action) {
  // 초기값 설정
  if(action.type === ADD_TODO){
    return [...previousState, {text: action.text, done: false}];
  }
  if(action.type === COMPLETE_TODO){
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return {...todo, done: true}
      }
      return todo;
    })
  }
  return previousState;
}