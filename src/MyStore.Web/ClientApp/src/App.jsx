import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import Purchases from './components/Purchases';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/purchases" component={Purchases} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
