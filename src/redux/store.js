import { applyMiddleware, combineReducers, createStore } from 'redux';
import leagueReducer from './leagueReducer';
import thunkMiddleWare from 'redux-thunk';

let redusersAll = combineReducers({
    league: leagueReducer,
});

let store = createStore(redusersAll, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;