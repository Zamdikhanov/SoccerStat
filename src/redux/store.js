import { applyMiddleware, combineReducers, createStore } from 'redux';
import leagueReducer from './leagueReducer';
import thunkMiddleWare from 'redux-thunk';
import leagueMatchesReducer from './leagueMatchesReducer';
import leagueTeamsReducer from './leagueTeamsReducer';
import teamCalendarReducer from './teamCalendarReducer';

let redusersAll = combineReducers({
    league: leagueReducer,
    leagueMatches: leagueMatchesReducer,
    leagueTeams: leagueTeamsReducer,
    teamCalendar: teamCalendarReducer,
});

let store = createStore(redusersAll, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;