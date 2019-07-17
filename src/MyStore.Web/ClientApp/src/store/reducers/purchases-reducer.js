export default function purchasesReducer(state = { loading: false, purchases: [], error: '' }, action) {
  switch (action.type) {
    case 'FETCH_PURCHASES_PENDING':
      return { ...state, loading: true };
    case 'FETCH_PURCHASES_FULFILLED':
      return { ...state, loading: false, purchases: action.purchases };
    case 'FETCH_PURCHASES_REJECTED':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
