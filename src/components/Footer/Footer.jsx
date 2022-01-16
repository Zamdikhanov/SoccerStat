import React from "react";
import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrap}>
                <div>
                    Замдиханов 2022
                </div>
                <div>
                    for SimbirSoft
                </div>
            </div>
        </footer >
    )
}

export default Footer;