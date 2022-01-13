import axios from "axios";
// 액션 타입 정의

// 깃헙 API 호출을 시작하는것을 의미
export const GET_USERS_START = "06_redux/users/GET_USERS_START";
// 깃헙 API 호출에 대한 응답이 성공한 경우
export const GET_USERS_SUCCESS = "06_redux/users/GET_USERS_SUCCESS";
// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = "06_redux/users/GET_USERS_FAIL";

// redux-promise-middleware
const GET_USERS = "GET_USERS";
export const GET_USERS_PENDING = "06_redux/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "06_redux/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "06_redux/users/GET_USERS_REJECTED";

// 액션 생성 함수
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// 초기값
const initalState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function reducer(state = initalState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
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
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      data: action.error,
    };
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  return state;
}
// redux-thunk
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
