import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store/store';

const theme = {
  palette: {
    primary: ['#aa0000', '#990000', '#770000'],
    secondary: ['#00aaff', '#0099dd', '#0088cc'],
  },
  shadows: ['0 1px 3px #555555', '0 1px 4px #555555', '0 1px 5px #555555'],
  borderRadius: '4px',
  fontFamily: 'Montserrat',
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
