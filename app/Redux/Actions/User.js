import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REFRESH_TOKEN,
  USER_CLEAR_ALL,
} from "../Types/User";

export function loginAction(payload) {
  return {
    type: USER_LOGIN,
    payload,
  };
}

export function logoutAction() {
  return {
    type: USER_LOGOUT,
  };
}

export function refreshToken(payload) {
  return {
    type: USER_REFRESH_TOKEN,
    payload,
  };
}

export function userClearAll() {
  return {
    type: USER_CLEAR_ALL,
  };
}
