import { API } from './../API/API';

const SET_TEAM_MATCHES = 'SET_TEAM_MATCHES';

let initialState = {
    count: 34,
    filters: {
        permission: "TIER_ONE",
        limit: 100
    },
    matches: [{
        id: 329697,
        competition: {
            id: 2002,
            name: "Bundesliga",
            area: {
                name: "Germany",
                code: "DEU",
                ensignUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
            }
        },
        season: {
            id: 742,
            startDate: "2021-08-13",
            endDate: "2022-05-14",
            currentMatchday: 21,
            winner: null
        },
        utcDate: "2021-08-14T16:30:00Z",
        status: "FINISHED",
        matchday: 1,
        stage: "REGULAR_SEASON",
        group: null,
        lastUpdated: "2022-01-26T08:20:21Z",
        odds: {
            msg: "Activate Odds-Package in User-Panel to retrieve odds."
        },
        score: {
            winner: "HOME_TEAM",
            duration: "REGULAR",
            fullTime: {
                homeTeam: 5,
                awayTeam: 2
            },
            halfTime: {
                homeTeam: 3,
                awayTeam: 1
            },
            extraTime: {
                homeTeam: null,
                awayTeam: null
            },
            penalties: {
                homeTeam: null,
                awayTeam: null
            }
        },
        homeTeam: {
            id: 4,
            name: "Borussia Dortmund"
        },
        awayTeam: {
            id: 19,
            name: "Eintracht Frankfurt"
        },
        referees: [{
                id: 15747,
                name: "Christian Gittelmann",
                role: "ASSISTANT_REFEREE_N1",
                nationality: "Germany"
            },
            {
                id: 8827,
                name: "Eduard Beitinger",
                role: "ASSISTANT_REFEREE_N2",
                nationality: "Germany"
            },
            {
                id: 57528,
                name: "Martin Thomsen",
                role: "FOURTH_OFFICIAL",
                nationality: "Germany"
            },
            {
                id: 43943,
                name: "Tobias Stieler",
                role: "REFEREE",
                nationality: "Germany"
            },
            {
                id: 57539,
                name: "Tobias Welz",
                role: "VIDEO_ASSISANT_REFEREE_N1",
                nationality: "Germany"
            },
            {
                id: 57524,
                name: "Dominik Schaal",
                role: "VIDEO_ASSISANT_REFEREE_N2",
                nationality: "Germany"
            }
        ]
    }, ],
}

const teamCalendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAM_MATCHES:
            return ({
                ...state,
                ...action.matches
            });

        default:
            return state;
    }
}


export const setTeamMatches = (matches) => ({ type: SET_TEAM_MATCHES, matches: matches });

export const requestLeagueMatches = (id) => {
    return (dispatch) => {
        API.getTeamMatches(id).then(data => {
            dispatch(setTeamMatches(data));
        });
    }
}

export default teamCalendarReducer;