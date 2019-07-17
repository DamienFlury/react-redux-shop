import Axios from 'axios';

export const FETCH_PURCHASES_PENDING = 'FETCH_PURCHASES_PENDING';
export const FETCH_PURCHASES_FULFILLED = 'FETCH_PURCHASES_FULFILLED';
export const FETCH_PURCHASES_REJECTED = 'FETCH_PURCHASES_REJECTED';

export const fetchPurchases = () => async (dispatch) => {
  dispatch({ type: FETCH_PURCHASES_PENDING });
  try {
    const { data: purchases } = await Axios.get('api/purchases');
    dispatch({ type: FETCH_PURCHASES_FULFILLED, purchases });
  } catch (ex) {
    dispatch({ type: FETCH_PURCHASES_REJECTED, error: ex });
  }
};
