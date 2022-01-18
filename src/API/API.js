import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    // withCredentials: true,
    headers: { "X-Auth-Token": "c329fdb9e6024402a2268f6c8513ce0a" }
})

const accessPlan = 'TIER_ONE';

export const API = {
    getLeague() {
        return (
            instance.get(`competitions/?plan=${accessPlan}`)
            .then(
                response => response.data
            )
        )
    },
}