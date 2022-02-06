import React from 'react';
import MatchRow from '../../common/MatchRow/MatchRow';
import css from './LeagueCalendar.module.css';

const LeagueCalendar = (props) => {

    const titleTable = {
        utcDate: 'Дата',
        status: 'Статус',
        matchday: 'Тур',
        score: {
            fullTime: {
                homeTeam: 'Счет',
                awayTeam: ''
            },
        },
        homeTeam: {
            name: 'Команда дома'
        },
        awayTeam: {
            name: 'Команда в гостях'
        },
    }

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={css.league_container}>
                    <h1 className={css.title}>Календарь {props.competition.name}</h1>
                    <h2 className={css.title}>({props.competition.area.name})</h2>
                </div>
                <div className={css.titleTable}>
                    <MatchRow {...titleTable} />
                </div>
                {props.matches.map(match => (
                    <MatchRow key={match.id} {...match} />
                ))}

            </div>
        </main>
    )
}

export default LeagueCalendar;
