export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGOUT = 'LOGOUT';


export const login = (username, password) => (dispatch) => {
  const tokenFromLocalStorage = localStorage.getItem('token');
  if (tokenFromLocalStorage) {
    dispatch({ type: LOGIN_FULFILLED, payload: { token: tokenFromLocalStorage } });
    return;
  }
  dispatch({ type: LOGIN_START });
  if (username === 'abc' && password === '1234') {
    localStorage.setItem('token', '1234');
    dispatch({ type: LOGIN_FULFILLED, payload: { token: '1234' } });
  } else {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
