import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from "../../../i18n/i18n-config";
import { setLanguage } from "../../../redux/ducks/Language";
import { get as __get } from 'lodash';

import './SwitchLanguage.css'

const SwitchLanguage = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('IT');
    const currentLanguage = useSelector((state) => __get(state.languageDuck, 'currentLanguage', {}));

    useEffect(() => {
        setSelected(currentLanguage);
    }, [currentLanguage]);

    const selectLanguage = (code) => () => {
        // *ga*
        switchLang(code);
        dispatch(setLanguage(code));
    }

    return (
        <span className={props.classNameContainer}>
            <span
                className={selected === 'IT' ? props.classNameSelectedLang : props.classNameUnSelectedLang}
                onClick={selectLanguage('IT')}
            >
                it
            </span>
            <span className={props.classNameSeparator}>|</span>
            <span
                className={selected === 'GB' ? props.classNameSelectedLang : props.classNameUnSelectedLang}
                onClick={selectLanguage('GB')}
            >
                en
            </span>
        </span>
    )
}

SwitchLanguage.defaultProps = {
    classNameSelectedLang: 'switch-language-span switch-language-span-selected cursor-pointer',
    classNameUnSelectedLang: 'switch-language-span cursor-pointer',
    classNameSeparator: 'mr-10 ml-10'
}

export default SwitchLanguage