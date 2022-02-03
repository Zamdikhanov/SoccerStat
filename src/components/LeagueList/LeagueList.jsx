import React, { useEffect, useState } from "react";
import InputSearch from "../../common/InputSearch/InputSearch";
import LeagueCard from "./LeagueCard/LeagueCard";
import css from './LeagueList.module.css';

const LeagueList = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [competitionsFiltered, setCompetitionsFiltered] = useState([]);

    useEffect(() => {
        const { competitions = [] } = props.league;
        const regExp = new RegExp(inputValue, 'i');
        setCompetitionsFiltered(competitions.filter((el) => {
            return regExp.test(el.name);
        }));
        console.log(competitionsFiltered);
    }, [inputValue]);

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <InputSearch inputValue={inputValue} setInputValue={setInputValue} />
                {
                    competitionsFiltered.map(league => (
                        <LeagueCard key={league.id}  {...league} />
                    ))
                }

            </div>
        </main>
    )
}

export default LeagueList;