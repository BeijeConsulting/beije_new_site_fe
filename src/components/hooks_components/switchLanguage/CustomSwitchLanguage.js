import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from "../../../i18n/i18n-config";
import { setLanguage } from "../../../redux/ducks/Language";
import { get as __get } from 'lodash';

import './CustomSwitchLanguage.css'


const SwitchLanguage = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('IT');
    const currentLanguage = useSelector((state) => __get(state.languageDuck, 'currentLanguage', {}));

    useEffect(() => {
        setSelected(currentLanguage);
    }, [currentLanguage]);

    const selectLanguage = (code) => () => {
        switchLang(code);
        dispatch(setLanguage(code));
    }

    return (
        <>
            <span className={selected === 'IT' ? props.classNameSelectedLang : props.classNameUnSelectedLang} onClick={selectLanguage('IT')}>
                IT
            </span>
            <span className={props.classNameSeparator}>|</span>
            <span className={selected === 'GB' ? props.classNameSelectedLang : props.classNameUnSelectedLang} onClick={selectLanguage('GB')}>
                EN
            </span>
        </>
    )
}

SwitchLanguage.defaultProps = {
    classNameSelectedLang: 'switch-language-span cursor-pointer',
    classNameUnSelectedLang: 'cursor-pointer',
    classNameSeparator: 'mr-10 ml-10'
}

export default SwitchLanguage