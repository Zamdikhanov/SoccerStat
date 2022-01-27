import React from "react";
import TeamCard from "./TeamCard/TeamCard";
import css from './TeamsList.module.css';

const TeamList = (props) => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={css.titleContainer}>
                    <h1 className={css.title}>
                        Команды {props.leagueTeams.competition.name}
                    </h1>
                    <h2 className={css.title}>
                        ({props.leagueTeams.competition.area.name})
                    </h2>
                </div>
                {
                    props.leagueTeams.teams.map(team => (
                        <TeamCard key={team.id}  {...team} />
                    ))
                }
            </div>
        </main>
    )
}

export default TeamList;