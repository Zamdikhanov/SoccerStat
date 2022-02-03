import React from "react";
import { NavLink } from "react-router-dom";
import css from './LeagueCard.module.css';

const LeagueCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.card__title}>
                <h3>{props.name}</h3>
            </div>
            <div className={css.card__imageBlock}>
                <div className={css.card__imageContainer}>
                    {props.area.ensignUrl &&
                        <img className={css.image}
                            src={props.area.ensignUrl}
                            alt='flag' />
                    }
                </div>
                <div className={css.card__imageContainer}>
                    {props.emblemUrl &&
                        <img className={css.image}
                            src={props.emblemUrl}
                            alt='emblem' />
                    }
                </div>
            </div>
            <div className={css.card__dataBlock}>
                <span>{props.area.name}</span>
                <div>
                    <div>
                        Начало сезона: {props.currentSeason.startDate}
                    </div>
                    <div>
                        Конец сезона: {props.currentSeason.endDate}
                    </div>
                    <div>
                        День чемпионата: {props.currentSeason.currentMatchday}
                    </div>
                    <div>
                        Победитель: {(props.currentSeason.winner != null)
                            ? props.currentSeason.winner.name
                            : `неопределён`}
                    </div>
                </div>
            </div>
            <div className={css.card__buttonBlock}>
                <NavLink to={'/league-list/league-calendar/' + props.id}
                    className={css.card__button}>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        Календарь лиги
                    </div>
                </NavLink>
                <NavLink to={'/league-list/team-list/' + props.id}
                    className={css.card__button}>
                    <div onClick={() => window.scrollTo(0, 0)}>
                        Список команд
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default LeagueCard;