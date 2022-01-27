import React from 'react';
import css from './TeamCalendar.module.css';
import TeamMatch from './TeamMatch/TeamMatch';

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
        if (props.match.params.teamId == props.teamCalendar.matches[0].homeTeam.id) return props.teamCalendar.matches[0].homeTeam.name;
        if (props.match.params.teamId == props.teamCalendar.matches[0].awayTeam.id) return props.teamCalendar.matches[0].awayTeam.name;
        return 'error';
    }

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={css.league_container}>
                    <h1 className={css.title}>Календарь команды</h1>
                    <h2 className={css.title}>{searchTeamName()}</h2>
                </div>
                <TeamMatch {...titleTable} />
                {props.teamCalendar.matches.map(match => (
                    <TeamMatch key={match.id} {...match} />
                ))}
            </div>
        </main>
    )
}

export default TeamCalendar;
