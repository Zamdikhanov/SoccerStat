import React from "react";
import LeagueCard from "./LeagueCard/LeagueCard";
import css from './LeagueList.module.css';

const LeagueList = (props) => {
    console.log ('1 ',props.league);
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