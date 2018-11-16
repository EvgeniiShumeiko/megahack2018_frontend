import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer as router } from 'react-router-redux';
import * as reducers from './reducers';

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const logger = createLogger({
    level: 'info',
    collapsed: true,
});

export const composition = history
    |> routerMiddleware
    |> (_ => applyMiddleware(thunk, _, logger))
    |> composeEnhancers;

export const store = createStore(combineReducers({ ...reducers, router }), composition);
