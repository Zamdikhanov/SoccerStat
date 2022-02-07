import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InputSearch from "../../common/InputSearch/InputSearch";
import TeamCard from "./TeamCard/TeamCard";
import css from './TeamsList.module.css';

const TeamList = (props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const inputValue = searchParams.get('teamName') || '';
    const [teamsFiltered, setTeamsFiltered] = useState([]);

    useEffect(() => {
        const { teams = [] } = props.leagueTeams;
        setTeamsFiltered(teams.filter((el) => {
            return el.name.toLowerCase().includes(inputValue.toLowerCase())
                || el.area.name.toLowerCase().includes(inputValue.toLowerCase());
        }));
    }, [inputValue]);

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <InputSearch searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    searchName='teamName'
                    arrayParamsName={['leagueId']} />
                <div className={css.titleContainer}>
                    <h1 className={css.title}>
                        Команды {props.leagueTeams.competition.name}
                    </h1>
                    <h2 className={css.title}>
                        ({props.leagueTeams.competition.area.name})
                    </h2>
                </div>
                {
                    teamsFiltered.map(team => (
                        <TeamCard key={team.id}  {...team} />
                    ))
                }
            </div>
        </main>
    )
}

export default TeamList;