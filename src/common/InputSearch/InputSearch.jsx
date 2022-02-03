import React from 'react';
import css from './InputSearch.module.css';

const InputSearch = ({inputValue='', setInputValue=()=>{}}) => {
    return (
        <div className={css.container}>
            <label className={css.search}>
                <span className={css.search_label}>Поиск</span>
                <input className={css.search_input}
                    type='text'
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                    {console.log(inputValue)}
            </label>
        </div>
    )
}

export default InputSearch;