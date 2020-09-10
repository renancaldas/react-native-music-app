import { APP_SET_ROUTE, APP_CLEAR_ALL } from "../Types/App";

export function setRouteAction(route) {
  return {
    type: APP_SET_ROUTE,
    payload: route,
  };
}

export function appClearAllAction() {
  return {
    type: APP_CLEAR_ALL
  };
}
