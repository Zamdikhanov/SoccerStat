import React from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import css from './Breadcrumbs.module.css';

const Breadcrumbs = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get('leagueId');

    const tabNames = {
        'league-list': {
            name: 'Список лиг'
        },
        'league-calendar':{
            name: 'Календарь лиги'
        },
        'team-list':{
            name: 'Команды лиги'
        },
        'team-calendar':{
            name: 'Календарь команды'
        }
    }
    let location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => (x !== ""));

    const crumbs = pathNames.map((pathElement, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;
        if (isLast) {
            return (
                <li className={css.list_item} key={pathElement} >
                    <div className={css.last}>
                        {tabNames[pathElement].name || pathElement}
                    </div>
                </li>)
        } else {
            return (
                <li className={css.list_item}  key={pathElement}>
                    <NavLink className={css.navlink} to={routeTo}>
                        {tabNames[pathElement].name || pathElement}
                    </NavLink>
                </li>
            )
        }
    });


    return (
        <nav className={css.nav}>
            <div className={css.wrap}>
                <ul className={css.list}>
                    <li className={css.list_item}>
                        {pathNames.length > 0 ? (
                            <NavLink className={css.navlink} to="/">Главная</NavLink>
                        ) : (
                            <div className={css.last}>Главная</div>
                        )}
                    </li>
                    {crumbs}
                </ul>
            </div>
        </nav>
    );
}

export default Breadcrumbs;