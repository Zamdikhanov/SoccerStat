import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './InputSearch.module.css';

const InputSearch = ({ inputValue, searchParams, setSearchParams, searchName }) => {

    const [searchText, setSearchText] = useState(inputValue);
    const handleChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchParams);
        let params = {[searchName]: e.target.value};
        setSearchParams(params);
    }

    return (
        <div className={css.container}>
            <label className={css.search}>
                <span className={css.search_label}>Поиск</span>
                <input className={css.search_input}
                    type='text'
                    autoFocus
                    value={searchText}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default InputSearch;