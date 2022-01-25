import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={css.nav}>
            <div className={css.wrap}>
                <ul className={css.list}>
                    <li className={css.list_item}>
                        <NavLink to='' className = { navData => navData.isActive ? (`${css.navlink}  ${css.navlink_active}`)  : css.navlink }>Главная</NavLink>
                    </li>
                    <li className={css.list_item}>
                        <NavLink to='league-list/' className = { navData => navData.isActive ? (`${css.navlink}  ${css.navlink_active}`)  : css.navlink }>Список лиг</NavLink>
                    </li>
                    <li className={css.list_item}>
                        <NavLink to='league-calendar' className = { navData => navData.isActive ? (`${css.navlink}  ${css.navlink_active}`)  : css.navlink }>Календарь лиги</NavLink>
                    </li>
                    <li className={css.list_item}>
                        <NavLink to='team-list' className = { navData => navData.isActive ? (`${css.navlink}  ${css.navlink_active}`) : css.navlink }>Список команд</NavLink>
                    </li>
                    <li className={css.list_item}>
                        <NavLink to='team-calendar' className = { navData => navData.isActive ? (`${css.navlink}  ${css.navlink_active}`) : css.navlink }>Календарь команды</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;