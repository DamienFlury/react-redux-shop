import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const authState = useSelector(state => state.authentication);
  return (
    <div>
      <Router>
        <NavBar />
        {!authState.isAuthenticated ? <Login /> : (
          <Switch>
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/" component={Products} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
