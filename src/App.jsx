import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import { fetchProducts } from './store/actions/products-actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
