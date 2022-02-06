import React from 'react';
import MatchRow from '../../common/MatchRow/MatchRow';
import css from './TeamCalendar.module.css';

const TeamCalendar = (props) => {
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

    const searchTeamName = () => {
        if (props.teamId == props.teamCalendar.matches[0].homeTeam.id)
            return props.teamCalendar.matches[0].homeTeam.name;
        if (props.teamId == props.teamCalendar.matches[0].awayTeam.id)
            return props.teamCalendar.matches[0].awayTeam.name;
        return 'error';
    }

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={css.league_container}>
                    <h1 className={css.title}>
                        Календарь команды
                    </h1>
                    <h2 className={css.title}>
                        {searchTeamName()}
                    </h2>
                </div>
                <div className={css.titleTable}>
                    <MatchRow {...titleTable} />
                </div>
                {props.teamCalendar.matches.map(match => (
                    <MatchRow key={match.id} {...match} />
                ))}
            </div>
        </main>
    )
}

export default TeamCalendar;
