import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPurchases } from '../store/actions/purchases-actions';
import Paper from './styled-components/Paper';
import List from './styled-components/List';
import ListItem from './styled-components/ListItem';

export default function Purchases() {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchasesReducer.purchases);
  // const products = useSelector(state => state.productsReducer.products);

  // const purchasesWithProducts = purchases.map(p
  //   => ({ ...p, items: p.items.map(i
  //     => ({ ...i, product: products.find(p
  //       => p.id === i.productId) })) }));

  useEffect(() => {
    if (purchases.length === 0) {
      dispatch(fetchPurchases());
    }
  }, [purchases, dispatch]);

  return (
    <Paper>
      <List>
        {purchases.map((purchase) => (
          <ListItem key={purchase.id}>
            {purchase.id}
            {' '}
            {purchase.items.reduce((acc, item) => acc + item.quantity, 0)}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
