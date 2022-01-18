import React from "react";
import css from './LeagueCard.module.css';

const LeagueCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.title}>
            {props.area.name}
           <img className={css.img} src={props.area.ensignUrl} />
           <img className={css.img} src={props.emblemUrl} />
            {props.name}
            props.
            props.
            </div>
        </div>
    )
}

export default LeagueCard;