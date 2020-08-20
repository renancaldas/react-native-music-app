import { APP_SET_ROUTE } from "../Types/App";

export function setRouteAction(route) {
  return {
    type: APP_SET_ROUTE,
    payload: route,
  };
}
