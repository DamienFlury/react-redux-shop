import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from 'styled-components';

const theme = {
    palette: {
        primary: ["#aa0000", "#990000",]
    },
    shadows: ['0 1px 3px #555555', '0 1px 4px #555555'],
    borderRadius: '4px',
};

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
