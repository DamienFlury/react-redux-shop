import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import Purchases from './components/Purchases';
import store from './store/store';

const theme = {
  palette: {
    primary: ['#ff3366', '#f83366', '#ee3366'],
    secondary: ['#00aaff', '#0099dd', '#0088cc'],
  },
  shadows: ['0 1px 3px #999999', '0 1px 4px #999999', '0 1px 5px #999999'],
  borderRadius: '4px',
  fontFamily: 'Open Sans, sans-serif',
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/purchases" component={Purchases} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
