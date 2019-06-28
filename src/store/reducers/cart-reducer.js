const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'ADD_PRODUCT':
            return [...state, payload.product];
        case 'REMOVE_PRODUCT_BY_ID':
            return state.filter(item => item.id !== payload.id);
        default:
            return state;
    }
}

export default cartReducer;