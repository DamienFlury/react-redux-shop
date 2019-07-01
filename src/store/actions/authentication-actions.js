export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGOUT = 'LOGOUT';


export const login = (username, password) => (dispatch) => {
  const tokenFromLocalStorage = localStorage.getItem('token');
  if (tokenFromLocalStorage) {
    dispatch({ type: LOGIN_FULFILLED, payload: { token: tokenFromLocalStorage } });
    return;
  }
  dispatch({ type: LOGIN_PENDING });
  if (username === 'abc' && password === '1234') {
    localStorage.setItem('token', '1234');
    dispatch({ type: LOGIN_FULFILLED, payload: { token: '1234' } });
  } else {
    dispatch({ type: LOGIN_REJECTED });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
