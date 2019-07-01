import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductsView from './ProductsView';
import Typography from './styled-components/Typography';

const Title = styled(Typography)`
  display: inline-block;
  margin: 20px;
`;

const Products = () => {
  const products = useSelector(state => state.productsReducer.products);
  return (
    <div>
      <Title variant="h2">Products</Title>
      <ProductsView products={products} />
    </div>
  );
};

export default Products;
