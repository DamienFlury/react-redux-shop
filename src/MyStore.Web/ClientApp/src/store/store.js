import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import authenticationReducer from './reducers/authentication-reducer';
import cartReducer from './reducers/cart-reducer';
import productsReducer from './reducers/products-reducer';
import purchasesReducer from './reducers/purchases-reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  cartReducer,
  productsReducer,
  purchasesReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
