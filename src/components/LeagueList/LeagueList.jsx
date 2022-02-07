import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InputSearch from "../../common/InputSearch/InputSearch";
import LeagueCard from "./LeagueCard/LeagueCard";
import css from './LeagueList.module.css';

const LeagueList = (props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const inputValue = searchParams.get('leagueName') || '';
    const [competitionsFiltered, setCompetitionsFiltered] = useState([]);

    useEffect(() => {
        const { competitions = [] } = props.league;
        setCompetitionsFiltered(competitions.filter((el) => {
            return el.name.toLowerCase().includes(inputValue.toLowerCase())
                || el.area.name.toLowerCase().includes(inputValue.toLowerCase());
        }));
    }, [inputValue]);

    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <InputSearch searchParams={searchParams} setSearchParams={setSearchParams} searchName='leagueName' />
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