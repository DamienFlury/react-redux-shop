import React from 'react';
import styled from 'styled-components';
import Typography from './styled-components/Typography';
import ProductsView from './ProductsView';
import useProducts from '../hooks/useProducts';


const Title = styled(Typography)`
  display: inline-block;
  margin: 20px;
`;

const Home = () => {
  const products = useProducts();
  const featuredProducts = products
    .filter(product => product.popularity >= 0.5)
    .sort((a, b) => b.popularity - a.popularity);
  return (
    <div>
      <Title variant="h2" animate={{ x: 20 }}>Featured Products</Title>
      <ProductsView products={featuredProducts} />
    </div>
  );
};

export default Home;
