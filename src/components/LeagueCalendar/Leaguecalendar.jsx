import React from "react";
import css from './LeagueCalendar.module.css';
import LeagueMatch from "./LeagueMatch/LeagueMatch";

const LeagueCalendar = () => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <LeagueMatch  />
            </div>
        </main>
    )
}

export default LeagueCalendar;