import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: { "X-Auth-Token": `${process.env.REACT_APP_X_AUTH_TOKEN}` }
})

const accessPlan = 'TIER_ONE';

export const API = {
    async getLeague() {
        try {
            let response = await instance.get(`competitions/?plan=${accessPlan}`);
            return response.data;
        } catch (e) { console.log(e) }
    },
    async getLeagueMatches(id) {
        try {
            let responceMatches = await instance.get(`competitions/${id}/matches`);
            return responceMatches.data;
        } catch (e) { console.log(e) }
    },
    async getLeagueTeams(id) {
        try {
            let responceTeams = await instance.get(`competitions/${id}/teams`);
            return responceTeams.data;
        } catch (e) { console.log(e) }
    },
    async getTeamMatches(id) {
        try {
            let responceTeamMatches = await instance.get(`teams/${id}/matches/`);
            return responceTeamMatches.data;
        } catch (e) { console.log(e) }
    }
}