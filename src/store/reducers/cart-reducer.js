import {
  CHECKOUT_PENDING, CHECKOUT_FULFILLED, ADD_PRODUCT, REMOVE_PRODUCT_BY_ID,
} from '../actions/cart-actions';

const cartReducer = (state = { products: [], isLoading: false }, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload.product] };
    case REMOVE_PRODUCT_BY_ID:
      return { ...state, products: state.products.filter(item => item.id !== payload.id) };
    case CHECKOUT_PENDING:
      return { ...state, isLoading: true };
    case CHECKOUT_FULFILLED:
      return { ...state, isLoading: false, products: [] };
    default:
      return state;
  }
};

export default cartReducer;
