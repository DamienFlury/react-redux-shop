import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
