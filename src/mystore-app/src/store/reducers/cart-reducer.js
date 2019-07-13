import {
  CHECKOUT_PENDING, CHECKOUT_FULFILLED, ADD_PRODUCT, REMOVE_PRODUCT_BY_ID,
} from '../actions/cart-actions';

const cartReducer = (state = { items: [], isLoading: false }, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      if (state.items.some(item => item.id === payload.product.id)) {
        return {
          ...state,
          items: state.items
            .map(item => (item.id === payload.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item)),
        };
      }
      return {
        ...state,
        items: [...state.items, { id: payload.product.id, product: payload.product, quantity: 1 }],
      };
    case REMOVE_PRODUCT_BY_ID:
      return { ...state, items: state.items.filter(item => item.id !== payload.id) };
    case CHECKOUT_PENDING:
      return { ...state, isLoading: true };
    case CHECKOUT_FULFILLED:
      return { ...state, isLoading: false, items: [] };
    default:
      return state;
  }
};

export default cartReducer;
