import React from "react";
import LeagueCard from "./LeagueCard/LeagueCard";
import css from './LeagueList.module.css';

const LeagueList = (props) => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                {
                    props.league.competitions.map(league =>  (
                        <LeagueCard key={league.id}  {...league} />
                    ))
                }
            
            </div>
        </main>
    )
}

export default LeagueList;