import axios from 'axios';
import API from '../api';

// 액션 타입
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_INFO = 'USER_INFO';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_UNREGISTER = 'USER_UNREGISTER';

// 액션 생성 함수
// state에 어떤 변화가 필요할 때 새로운 action 객체를 생성
// 리턴값으로 액션 객체 // 비동기 작업은 여기서

export function userLogin(body) {
  const request = axios
    .post(API.USER_LOGIN, body, { withCredentials: true }) //
    .then((res) => res.data);

  // return으로 reducer로 보내면 다음 state를 만들어 줌
  return {
    type: USER_LOGIN,
    payload: request,
  };
}
