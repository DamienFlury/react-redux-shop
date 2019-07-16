export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT_BY_ID = 'REMOVE_PRODUCT_BY_ID';
export const CHECKOUT_PENDING = 'CHECKOUT_PENDING';
export const CHECKOUT_FULFILLED = 'CHECKOUT_FULFILLED';
export const CHECKOUT_REJECTED = 'CHECKOUT_REJECTED';

export const checkout = () => (dispatch) => {
  dispatch({ type: CHECKOUT_PENDING });
  setTimeout(() => {
    dispatch({ type: CHECKOUT_FULFILLED });
  }, 1000);
};

export const addProduct = product => ({ type: ADD_PRODUCT, payload: { product } });
export const removeProductById = id => ({ type: REMOVE_PRODUCT_BY_ID, payload: { id } });
