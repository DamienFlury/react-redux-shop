import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProductsView from './ProductsView';
import Typography from './styled-components/Typography';
import useProducts from '../hooks/useProducts';

const Title = styled(Typography)`
  display: inline-block;
  margin: 20px;
`;

const variants = {
  visible: {
    opacity: 1,
    x: 20,
  },
  hidden: {
    opacity: 0,
    x: 0,
  },
};

const Products = () => {
  const products = useProducts();
  return (
    <div>
      <Title variant="h2" variants={variants} animate="visible">Products</Title>
      <ProductsView products={products} />
    </div>
  );
};

export default Products;
