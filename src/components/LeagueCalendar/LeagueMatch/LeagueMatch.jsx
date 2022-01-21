import React from "react";
import css  from  './LeagueMatch.module.css';

const LeagueMatch = (props) => {
    return  (
        <div className={css.match}>
            <div className={css.matchPart_1}>
                <div className={css.matchday + ' ' + css.block}>День</div>
                <div className={css.status + ' ' + css.block}>Завершен</div>
                <div className={css.utcDate + ' ' + css.block}>Дата</div>
            </div>
            <div className={css.matchPart_2}>
                <div className={css.homeTeam + ' ' + css.block}>Команда</div>
                <div className={css.score + ' ' + css.block}>0:2</div>
                <div className={css.awayTeam + ' ' + css.block}>Команда</div>
            </div>
        </div>
    )
}

export default LeagueMatch;