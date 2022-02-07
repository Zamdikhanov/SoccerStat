import { API } from './../API/API';

const SET_LEAGUE_TEAMS = 'SET_LEAGUE_TEAMS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    count: 20,
    filters: {},
    competition: {
        id: 2021,
        area: {
            id: 2072,
            name: "подождите 30-60 секунд"
        },
        name: "Перезагрузите страницу позже",
        code: "PL",
        plan: "TIER_ONE",
        lastUpdated: "2021-04-17T02:20:14Z"
    },
    season: {
        id: 733,
        startDate: "2021-08-13",
        endDate: "2022-05-22",
        currentMatchday: 23,
        winner: null
    },
    teams: [{
        id: 57,
        area: {
            id: 2072,
            name: "не загружено"
        },
        name: "не загружено",
        shortName: "Arsenal",
        tla: "ARS",
        crestUrl: "",
        address: "75 Drayton Park London N5 1BU",
        phone: "+44 (020) 76195003",
        website: "не загружено",
        email: "не загружено",
        founded: 'не загружено',
        clubColors: "Red / White",
        venue: "Emirates Stadium",
        lastUpdated: "2020-11-26T02:15:20Z"
    }, ],
    isLoading: false,
}

const leagueTeamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEAGUE_TEAMS:
            return ({
                ...state,
                ...action.competitionsTeams
            });
        case TOGGLE_IS_LOADING:
            return ({
                ...state,
                isLoading: action.isLoading,
            });

        default:
            return state;
    }
}


export const setLeagueTeams = (competitionsTeams) => ({ type: SET_LEAGUE_TEAMS, competitionsTeams: competitionsTeams });
export const toogleIsLoadingLeagueTeams = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export const requestLeagueTeams = (id) => {
    return (dispatch) => {
        dispatch(toogleIsLoadingLeagueTeams(true));
        API.getLeagueTeams(id).then(data => {
            dispatch(setLeagueTeams(data));
            dispatch(toogleIsLoadingLeagueTeams(false));
        });
    }
}

export default leagueTeamsReducer;