import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Typography from './styled-components/Typography';
import Paper from './styled-components/Paper';
import Button from './styled-components/Button';


const StyledPaper = styled(Paper)`
  width: auto;
  margin: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;
const Info = styled.div`
  padding: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

const Products = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  return (
    <div>
      <Typography variant="h1">Products</Typography>
      <Grid>
        {products.map(item => (
          <StyledPaper key={item.id}>
            <ImageWrapper>
              <Image src={item.image} />
            </ImageWrapper>
            <Info>
              <div>
                <Typography>{item.name}</Typography>
              </div>
              <StyledButton onClick={() => dispatch({ type: 'ADD_PRODUCT', payload: { product: { item } } })}>Add To Cart</StyledButton>
            </Info>
          </StyledPaper>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
