import React from "react";
import css from './PageIsNotAvailable.module.css';

const PageIsNotAvailable = () => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div>
                Данная страница не доступна. 
                </div>
                <NavLink to='/' >Перейти на главную страницу</NavLink>
            </div>
        </main>
    )
}

export default PageIsNotAvailable;