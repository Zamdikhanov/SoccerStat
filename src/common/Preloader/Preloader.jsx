import React from "react";
import preloader from './../../assets/images/preloader-ball.gif';
import styles from './Preloader.module.css';


let Preloader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__inner}>
                <img className={styles.img} src={preloader} alt="download" />
                <div className={styles.text}>
                    Идет загрузка ...
                </div>
            </div>
        </div>
    )
}

export default Preloader;