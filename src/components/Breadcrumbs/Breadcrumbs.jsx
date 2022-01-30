import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    let location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => (x !== ""));

    const crumbs = pathNames.map((pathElement, index) => {

        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;

        if (isLast) {
            return (
                <li className={css.list_item}>
                    <div className={css.last}>
                        {pathElement}
                    </div>
                </li>)
        } else {
            return (
                <li className={css.list_item}>
                    <NavLink className={css.navlink} key={pathElement} to={routeTo}>
                        {pathElement}
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
                            <NavLink className={css.navlink} to="/">Home</NavLink>
                        ) : (
                            <div className={css.last}>Home</div>
                        )}
                    </li>
                    {crumbs}
                </ul>
            </div>
        </nav>
    );
}

export default Breadcrumbs;