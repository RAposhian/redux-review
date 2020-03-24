import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
   moviesReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));