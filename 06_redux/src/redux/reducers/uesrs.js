import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from "../actions";

const initalState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initalState, action) {
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      data: action.error,
    };
  }
  return state;
}
