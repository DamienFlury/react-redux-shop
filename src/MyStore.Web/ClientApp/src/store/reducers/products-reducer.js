import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED } from '../actions/products-actions';


const productsReducer = (state = { isLoading: false, products: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_FULFILLED:
      return { ...state, isLoading: false, products: action.products };
    case FETCH_PRODUCTS_REJECTED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default productsReducer;
