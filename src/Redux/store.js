import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer"
import { reducer as AuthReducer } from "./AuthReducer/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({ AuthReducer,AppReducer })

const store = legacy_createStore(
 rootReducers,
 composeEnhancers(applyMiddleware(thunk))
)


export default store;