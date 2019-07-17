import Axios from 'axios';

export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_REJECTED = 'FETCH_REJECTED';
export const FETCH_FULFILLED = 'FETCH_FULFILLED';

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PENDING });
  Axios.get('api/products').then((response) => {
    dispatch({ type: FETCH_FULFILLED, payload: { products: response.data } });
  }).catch(error => dispatch({ type: FETCH_REJECTED, payload: { error } }));
};
