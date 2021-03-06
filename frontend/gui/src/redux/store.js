import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import reducer from "./reducers/toAuth";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	reducer /* preloadedState, */,
	composeEnhances(applyMiddleware(thunk))
);
