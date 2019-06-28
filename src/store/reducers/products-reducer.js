const productsReducer = (state = [{ id: 1, name: 'Water' }], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload.products;
    default:
      return state;
  }
};

export default productsReducer;
