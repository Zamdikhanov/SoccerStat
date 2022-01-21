import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    // withCredentials: true,
    headers: { "X-Auth-Token": `${process.env.REACT_APP_X_AUTH_TOKEN}` }
})

const accessPlan = 'TIER_ONE';

export const API = {
    async getLeague() {
        let response = await instance.get(`competitions/?plan=${accessPlan}`);
        return response.data;
    },
    async getLeagueMatches(id = 2016) {
        let responceMatches = await instance.get(`competitions/${id}/matches`);
        return responceMatches.data;
    }
}