export const CHECKOUT_PENDING = 'CHECKOUT_PENDING';
export const CHECKOUT_FULFILLED = 'CHECKOUT_FULFILLED';
export const CHECKOUT_REJECTED = 'CHECKOUT_REJECTED';

export const checkout = () => (dispatch) => {
  dispatch({ type: CHECKOUT_PENDING });
  setTimeout(() => {
    dispatch({ type: CHECKOUT_FULFILLED });
  }, 1000);
};
