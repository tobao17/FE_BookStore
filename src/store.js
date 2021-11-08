import { createStore, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";
// Enable to use redux dev tool in development mode
import thunkMiddleware from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
const composeEnhancers =
	"development" === process.env.NODE_ENV
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;
// Use redux-thunk as a redux middleware

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export const store = createStore(persistedReducer, {}, enhancer);
export let persistor = persistStore(store);
