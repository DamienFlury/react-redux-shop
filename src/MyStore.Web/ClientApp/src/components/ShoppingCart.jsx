import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Typography from './styled-components/Typography';
import List from './styled-components/List';
import ListItem from './styled-components/ListItem';
import Paper from './styled-components/Paper';
import Button from './styled-components/Button';
import { checkout, removeProductById } from '../store/actions/cart-actions';
import Spacer from './styled-components/Spacer';

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled(Typography)`
  margin-bottom: 20px;
`;

const ListWrapper = styled(Paper)`
  margin: 20px 0;
`;

const RemoveButton = styled(Button)`
  margin-left: 20px;
`;

const CheckoutText = styled.div`
  margin: 20px 0;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const ShoppingCart = () => {
  const { items, isLoading } = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkout());
  };
  const handleRemove = (id) => {
    dispatch(removeProductById(id));
  };
  return (
    <Wrapper>
      <Title variant="h2">Shopping Cart</Title>
      {items.length === 0 ? <div><Typography>Cart empty</Typography></div>
        : (
          <>
            <ListWrapper>
              <List>
                {items.map(item => (
                  <ListItem key={item.id}>
                    <ImageWrapper>
                      <Image src={item.product.image} alt="thumbnail" />
                    </ImageWrapper>
                    <Typography>
                      {item.product.name}
                      {' '}
x
                      {item.quantity}
                    </Typography>
                    <Spacer />
                    <Typography>{(item.quantity * item.product.price).toFixed(2)}</Typography>
                    <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                  </ListItem>
                ))}
              </List>
            </ListWrapper>
            <CheckoutText>
              <Typography>
Total:
                {' '}
                {items
                  .reduce((acc, current) => acc + current.quantity * current.product.price, 0)
                  .toFixed(2)}
              </Typography>
            </CheckoutText>
            {isLoading ? <Button disabled>Loading</Button>
              : <Button color="secondary" onClick={handleClick}>Check out</Button> }
          </>
        )}
    </Wrapper>
  );
};

export default ShoppingCart;
