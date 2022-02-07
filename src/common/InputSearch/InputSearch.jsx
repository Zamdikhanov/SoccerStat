import React, { useState } from 'react';
import css from './InputSearch.module.css';

const InputSearch = ({ searchParams, setSearchParams, searchName, arrayParamsName = [] }) => {

    const [searchText, setSearchText] = useState(searchParams.get(searchName));

    let params = {};
    arrayParamsName.forEach(paramsName => {
        params[paramsName] = searchParams.get(paramsName);
    });

    const handleChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchParams);
        params[searchName] = e.target.value;
        setSearchParams(params);
    };

    return (
        <div className={css.container}>
            <label className={css.search}>
                <span className={css.search_label}>Поиск</span>
                <input className={css.search_input}
                    type='text'
                    value={searchText}
                    onChange={handleChange} />
            </label>
        </div>
    )
}

export default InputSearch;