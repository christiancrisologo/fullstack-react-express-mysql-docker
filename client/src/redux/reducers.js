import * as TYPES from "./actionTypes";

export const initialState = {
  app: {
    page: "login",
  },
  login: {
    message: "",
  },
};

export default {
  app: (state = initialState.app, action) => {
    const { type, payload } = action;
    switch (type) {
      case TYPES.PAGE_CHANGED: {
        console.log("#CC page changed ", payload);
        return { ...state, page: payload };
      }
      case TYPES.SIGNUP_SUCCESS: {
        return { ...state, page: "login" };
      }
      default:
        return state;
    }
  },
  login: (state = { message: "" }, action) => {
    const { type, payload } = action;
    switch (type) {
      case TYPES.SIGNUP_SUCCESS: {
        return { ...state, message: "SIGNUP SUCCESS" };
      }
      case TYPES.LOGIN_SUCCESS: {
        return { ...state, message: payload };
      }
      case TYPES.LOGIN_ERROR: {
        return { ...state, message: payload };
      }
      default:
        return state;
    }
  },
};
