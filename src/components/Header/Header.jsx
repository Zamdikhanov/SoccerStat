import React from "react";
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.wrap}>
                <div className={css.tagline}>
                    <img className={css.logo} src='http://www.freepngclipart.com/download/ball/84117-fire-rainbow-wallpaper-cup-mobile-football-phone.png' alt='Logo ball' />
                    {/* <h3>Футбол может сделать человека счастливым и знаменитым. </h3> */}
                </div>
                <div className={css.title}>
                    <h2 className={css.title_text}>SOCCER-STAT</h2>
                </div>
                <div className={css.tagline}>
                    <h3>Игра забывается, результат остаётся</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;