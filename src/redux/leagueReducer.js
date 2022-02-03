import { API } from './../API/API';

const SET_LEAGUE = 'SET_LEAGUE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    count: 1,
    filters: {
        plan: "TIER_ONE"
    },
    competitions: [{
        id: 0,
        area: {
            id: 0,
            name: "noName",
            countryCode: "noName",
            ensignUrl: "https://crests.football-data.org/764.svg"
        },
        name: "noName",
        code: "noName",
        emblemUrl: "https://crests.football-data.org/764.svg",
        plan: "TIER_ONE",
        currentSeason: {
            id: 0,
            startDate: "2021-05-30",
            endDate: "2021-12-05",
            currentMatchday: 0,
            winner: null
        },
        numberOfAvailableSeasons: 5,
        lastUpdated: "2021-07-20T18:42:17Z"
    }, ],
    isLoading: false,
}

const leagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEAGUE:
            return ({
                ...state,
                ...action.competitions
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


export const setLeague = (competitions) => ({ type: SET_LEAGUE, competitions: competitions });
export const toogleIsLoadingLeague = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export const requestLeague = () => {
    return (dispatch) => {
        dispatch(toogleIsLoadingLeague(true));
        API.getLeague().then(data => {
            dispatch(setLeague(data));
            dispatch(toogleIsLoadingLeague(false));
        });
    }
}

export default leagueReducer;