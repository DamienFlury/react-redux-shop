import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Paper from './styled-components/Paper';
import Button from './styled-components/Button';
import Typography from './styled-components/Typography';
import { addProduct } from '../store/actions/cart-actions';

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

const ProductsView = ({ products }) => {
  const dispatch = useDispatch();
  const addProductToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <Grid>
      {products.map(product => (
        <StyledPaper key={product.id}>
          <ImageWrapper>
            <Image src={product.image} />
          </ImageWrapper>
          <Info>
            <div>
              <Typography>{product.name}</Typography>
            </div>
            <div>
              <Typography>
                {product.price.toFixed(2)}
              </Typography>
            </div>
            <StyledButton color="secondary" onClick={() => addProductToCart(product)}>Add To Cart</StyledButton>
          </Info>
        </StyledPaper>
      ))}
    </Grid>
  );
};

export default ProductsView;
