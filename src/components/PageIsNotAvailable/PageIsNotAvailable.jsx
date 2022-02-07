import React from "react";
import { NavLink } from "react-router-dom";
import css from './PageIsNotAvailable.module.css';

const PageIsNotAvailable = () => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div>
                    <p>
                        Страница временно не доступна.
                    </p>
                    <p>
                        Сервер не отвечает, либо было превышено количество 
                        обращений на сервер. 
                        (По умолчанию не более 10 запросов в минуту).
                    </p>
                    <p>
                        Попробуйте обновить страницу через 30-60 секунд. 
                        Или можете перейти на лавную страницу
                    </p>
                </div>
                <NavLink to='/' >Перейти на главную страницу</NavLink>
            </div>
        </main>
    )
}

export default PageIsNotAvailable;