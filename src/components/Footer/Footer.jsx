import React from "react";
import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.wrap}>
                <div>
                    <a className={css.link}
                        href='https://github.com/Zamdikhanov'
                        target="_blank"
                        rel="noopener noreferrer">
                        Замдиханов 2022
                    </a>
                </div>
                <div>
                    <a className={css.link}
                        href='https://www.simbirsoft.com/'
                        target="_blank"
                        rel="noopener noreferrer">
                        for SimbirSoft
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;