import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
    return (
        <main className={css.main}>
            <div className={css.wrap}>
                <div className={css.block}>
                    <div className={css.block_container_1}>
                        <div className={css.block_img_1}>
                            <div className={css.block_img__content}>
                            </div>
                        </div>
                    </div>
                    <div className={css.block_content__box_1}>
                        <div className={css.block_content__inner_box_1}>
                            <div>
                                <p>Добро пожаловать на</p>
                                <h1 className={css.block_content__title}>SOCCER-STAT</h1>
                                <p>Здесь вы найдёте всё о лучшей игре в мире.</p>
                                <p>У нас самая точная и свежая статистика.</p>
                            </div>
                            <NavLink className={css.block_content__link_1}
                                to='/league-list'
                                onClick={() => window.scrollTo(0, 0)}>
                                <div className={css.block_content__link_button_1}>
                                    Узнать больше
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.block_content_2}>
                        Футбол – целая жизнь. Его можно любить сильнее,
                        чем театр, музыку и политику вместе взятые.
                    </div>
                    <div className={css.block_content_2}>
                        Футбол может сделать человека счастливым и знаменитым.
                    </div>
                    <div className={css.block_content_2}>
                        Футбол – целая жизнь. Его можно любить сильнее,
                        чем театр, музыку и политику вместе взятые.
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.block_content}>
                        <NavLink className={css.block_content__link}
                            to='/league-list'
                            onClick={() => window.scrollTo(0, 0)}>
                            <div className={css.block_content__link_button}>
                                Перейти к списку лиг
                            </div>
                        </NavLink>
                    </div>
                    <div className={css.block_container}>
                        <div className={css.block_img}>
                            <div className={css.block_img__content}>
                                С нами всё как на ладони.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;