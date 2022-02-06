import React from "react";
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import logo from './../../assets/images/ball-logo.png';

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.wrap}>
                <div className={css.tagline}>
                    <img className={css.logo} src={logo}
                        alt='Logo ball' />
                </div>
                <div className={css.title}>
                    <NavLink className={css.title_link} to='/'>
                        <h2 className={css.title_text}>SOCCERSTAT</h2>
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