import {
  LOGIN_PENDING, LOGIN_REJECTED, LOGIN_FULFILLED, LOGOUT,
} from '../actions/authentication-actions';

const authenticationReducer = (state = { isAuthenticated: false, token: '', isLoading: false }, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoading: true };
    case LOGIN_REJECTED:
      return {
        ...state, isLoading: false,
      };
    case LOGIN_FULFILLED:
      return {
        ...state, isAuthenticated: true, token: action.payload.token, isLoading: false,
      };
    case LOGOUT:
      return {
        ...state, isAuthenticated: false, token: '', isLoading: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
