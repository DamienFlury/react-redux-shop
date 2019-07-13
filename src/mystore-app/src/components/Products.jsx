import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductsView from './ProductsView';
import Typography from './styled-components/Typography';
import { fetchProducts } from '../store/actions/products-actions';

const Title = styled(Typography)`
  display: inline-block;
  margin: 20px;
`;

const Products = () => {
  const products = useSelector(state => state.productsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);
  return (
    <div>
      <Title variant="h2">Products</Title>
      <ProductsView products={products} />
    </div>
  );
};

export default Products;
