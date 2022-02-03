import React from "react";
import { NavLink } from "react-router-dom";
import css from './TeamCard.module.css';

const TeamCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.card__title}>
                <h3>{props.name}</h3>
            </div>
            <div className={css.card__dataBlock}>
                <span>Основан в {props.founded}</span>
                <div>
                    <div className={css.card__imageContainer}>
                        <img className={css.image}
                            src={props.crestUrl}
                            alt='flag' />
                    </div>
                    <div className={css.link}>
                        <a href={props.website}
                            target="_blank"
                            rel="noopener noreferrer">
                            {props.website}
                        </a>
                    </div>
                    <NavLink
                        to={'/league-list/team-list/team-calendar/' + props.id}
                        className={css.card__button}>
                        <div onClick={() => window.scrollTo(0, 0)}>
                            Календарь команды
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;