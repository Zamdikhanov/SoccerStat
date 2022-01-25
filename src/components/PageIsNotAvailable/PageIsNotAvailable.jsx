import React from "react";
import css from './PageIsNotAvailable.module.css';

const Home = () => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div>
                Данная страница не найдена.
                </div>
                <NavLink to='league-list' >Перейти к списку лиг</NavLink>
            </div>
        </main>
    )
}

export default Home;