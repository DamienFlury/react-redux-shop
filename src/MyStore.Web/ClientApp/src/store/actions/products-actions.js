import firebase from '../../config/firebase-config';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED';

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_PENDING });
  const db = firebase.firestore();
  db.collection('products').get().then((snapshot) => {
    const products = snapshot.docs.map(doc => doc.data());
    dispatch({ type: FETCH_PRODUCTS_FULFILLED, products });
  });
  // Axios.get('api/products').then((response) => {
  //   dispatch({ type: FETCH_PRODUCTS_FULFILLED, payload: { products: response.data } });
  // }).catch(error => dispatch({ type: FETCH_PRODUCTS_REJECTED, payload: { error } }));
};
