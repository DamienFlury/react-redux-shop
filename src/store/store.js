import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import authenticationReducer from './reducers/authentication-reducer';
import cartReducer from './reducers/cart-reducer';
import productsReducer from './reducers/products-reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  cart: cartReducer,
  products: productsReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
