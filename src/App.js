import React from 'react';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const authState = useSelector(state => state.authentication);
  return (
    <div>
      <NavBar />
      {!authState.isAuthenticated ? <Login /> : (
        <Router>
          <Switch>
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/" component={Products} />
          </Switch>
        </Router>
      )}    
    </div>
  );
}

export default App;
