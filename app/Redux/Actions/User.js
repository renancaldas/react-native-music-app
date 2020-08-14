import { LOGIN, LOGOUT } from "../Types/User";

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
