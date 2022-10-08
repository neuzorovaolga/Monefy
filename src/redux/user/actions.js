import { USER } from "./consts";

export const userAuthAction = (user) => ({
  type: USER.USER_AUTH,
  payload: { user },
});

export const userLogoutAction = () => ({
  type: USER.USER_LOGOUT,
});
