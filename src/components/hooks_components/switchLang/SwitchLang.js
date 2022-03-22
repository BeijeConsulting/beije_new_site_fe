import React, { useState, useEffect } from "react";
import { get as __get } from 'lodash';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from "../../../i18n/i18n-config";
import { setLanguage } from "../../../redux/ducks/Language";
import { useLocation } from "react-router-dom";

// Style
import "./SwitchLang.css";

const SwitchLang = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('IT');
  const currentLanguage = useSelector((state) => __get(state.languageDuck, 'currentLanguage', {}));
  const { pathname } = useLocation();

  useEffect(() => {
    setSelected(currentLanguage);
  }, [currentLanguage]);

  const selectLanguage = (code) => async () => {
    await switchLang(code);
    dispatch(setLanguage(code));
    window.location.href = "/" + code.toLowerCase() + pathname;
  }

  return (
    <span className={props.classNameContainer}>
      <span
        className={selected === 'IT' ? props.classNameSelectedLang : props.classNameUnSelectedLang}
        onClick={selectLanguage('IT')}
      >
        it
      </span>
      <span className={props.classNameSeparator}> | </span>
      <span
        className={selected === 'EN' ? props.classNameSelectedLang : props.classNameUnSelectedLang}
        onClick={selectLanguage('EN')}
      >
        en
      </span>
    </span>
  )
}

SwitchLang.defaultProps = {
  classNameSelectedLang: 'switch-language-span switch-language-span-selected',
  classNameUnSelectedLang: 'switch-language-span',
}

export default SwitchLang