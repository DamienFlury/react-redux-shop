import { FETCH_PENDING, FETCH_FULFILLED } from '../actions/products-actions';


const productsReducer = (state = { isLoading: false, products: [] }, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return { ...state, isLoading: true };
    case FETCH_FULFILLED:
      return { ...state, isLoading: false, products: action.payload.products };
    default:
      return state;
  }
};

export default productsReducer;
