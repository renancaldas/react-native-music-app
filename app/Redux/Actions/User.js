import { LOGIN, LOGOUT } from "../Types/User";

export function loginAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
