import React from "react";
import css from './TeamMatch.module.css';

const TeamMatch = (props) => {
    return (
        <div className={css.match}>
            <div className={css.matchPart_1}>
                <div className={css.matchday + ' ' + css.block}>
                    {props.matchday}
                </div>
                <div className={css.status + ' ' + css.block}>
                    {props.status}
                </div>
                <div className={css.utcDate + ' ' + css.block}>
                    {props.utcDate}
                </div>
            </div>
            <div className={css.matchPart_2}>
                <div className={`${css.homeTeam} ${css.block} ${((props.score.winner === 'HOME_TEAM')
                    ? (css.winner)
                    : '')}`}>
                    {props.homeTeam.name}
                </div>
                <div className={css.score + ' ' + css.block}>
                    {props.score.fullTime.homeTeam}:{props.score.fullTime.awayTeam}
                </div>
                <div className={`${css.awayTeam} ${css.block} ${((props.score.winner === 'AWAY_TEAM')
                    ? (css.winner)
                    : '')}`}>
                    {props.awayTeam.name}
                </div>
            </div>
        </div>
    )
}

export default TeamMatch;