import React from "react";
import { NavLink } from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.wrap}>
                <div className={css.tagline}>
                    <img className={css.logo} src='http://www.freepngclipart.com/download/ball/84117-fire-rainbow-wallpaper-cup-mobile-football-phone.png'
                        alt='Logo ball' />
                </div>
                <div className={css.title}>
                    <NavLink className={css.title_link} to='/'>
                        <h2 className={css.title_text}>SOCCER-STAT</h2>
                    </NavLink>
                </div>
                <div className={css.tagline}>
                    <h3>Игра забывается, результат остаётся</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;