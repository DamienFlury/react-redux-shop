import { combineReducers, createStore } from "redux";
import authenticationReducer from "./reducers/authentication-reducer";
import cartReducer from "./reducers/cart-reducer";
import productsReducer from "./reducers/products-reducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    cart: cartReducer,
    products: productsReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;