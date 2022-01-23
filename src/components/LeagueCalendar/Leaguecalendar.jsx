import React from 'react';
import css from './LeagueCalendar.module.css';
import LeagueMatch from './LeagueMatch/LeagueMatch';

const LeagueCalendar = (props) => {
    const titleTable={
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
                <LeagueMatch {...titleTable} />
                {props.matches.map(match=> (
                    <LeagueMatch key={match.id} {...match} />
                ))}
                
            </div>
        </main>
    )
}

export default LeagueCalendar;
