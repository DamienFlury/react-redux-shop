import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/products-actions';

const useProducts = () => {
  const products = useSelector(state => state.productsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);
  return products;
};

export default useProducts;
