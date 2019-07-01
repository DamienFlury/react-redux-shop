import React from 'react';
import { useSelector } from 'react-redux';


const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div>
      <div>
        {cart.map(product => <div>{product.name}</div>)}
      </div>
    </div>
  );
};

export default ShoppingCart;
