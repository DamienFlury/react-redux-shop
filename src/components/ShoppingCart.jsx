import React from 'react';
import { useSelector } from 'react-redux';


const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  return (
    <div>
            Hey
      {cart.length}
    </div>
  );
};

export default ShoppingCart;
