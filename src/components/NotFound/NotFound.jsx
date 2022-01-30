import React from 'react';
import css from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <div  className={css.message}>
                    Ошибка 404. Страница не найдена.
                </div>
            </div>
        </div>
    )
}

export default NotFound;