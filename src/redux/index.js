import {createStore, applyMiddleware, combineReducers} from "redux"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// import AuthReducer from "./reducer/AuthReducer"
// import PostReducer from "./reducer/PostReducer";
import register from "./reducer/auth/RegisterReducer";
import login from "./reducer/auth/LoginReducer";
import services from "./reducer/auth/ServicesReducer/ServicesPostReducer";
import servicesListReducer from "./reducer/auth/ServicesReducer/SerivesListReducer";
const rootReducers = combineReducers({
  register,
   login,
   services,
   servicesListReducer,
});
const middlewares = [thunkMiddleware];
const Store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(...middlewares)
  ));

export default Store;
