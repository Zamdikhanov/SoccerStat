import React from "react";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.wrap}>
                <div>
                    умный слоган
                </div>
                <div>
                    Лого
                </div>
                <div>
                    текущая дата
                </div>
            </div>
        </div>
    )
}

export default Header;