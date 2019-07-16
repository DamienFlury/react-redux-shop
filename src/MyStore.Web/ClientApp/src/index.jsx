import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
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

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
