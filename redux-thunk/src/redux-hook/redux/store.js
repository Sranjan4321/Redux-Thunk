import {
  combineReducers,
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { PTodoReducer } from "./personal/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todo: PTodoReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
