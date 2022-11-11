import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({  })

const store = legacy_createStore(
 rootReducers,
 composeEnhancers(applyMiddleware(thunk))
)


export default store;