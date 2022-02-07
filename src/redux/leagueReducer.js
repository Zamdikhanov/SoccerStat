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
            name: "не загружено",
            countryCode: "не загружено",
            ensignUrl: ""
        },
        name: "не загружено",
        code: "не загружено",
        emblemUrl: "",
        plan: "TIER_ONE",
        currentSeason: {
            id: 0,
            startDate: "не загружено",
            endDate: "не загружено",
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