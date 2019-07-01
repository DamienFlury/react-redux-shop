import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Typography from './styled-components/Typography';
import ProductsView from './ProductsView';


const Title = styled(Typography)`
  display: inline-block;
  margin: 20px;
`;

const Home = () => {
  const products = useSelector(state => state.products);
  const featuredProducts = products
    .filter(product => product.popularity >= 0.5)
    .sort((a, b) => b.popularity - a.popularity);
  return (
    <div>
      <Title variant="h2">Featured Products</Title>
      <ProductsView products={featuredProducts} />
    </div>
  );
};

export default Home;
