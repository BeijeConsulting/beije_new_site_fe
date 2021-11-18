import React, { useEffect, useState } from 'react';
import ReactFlagsSelect, { Gb, It } from 'react-flags-select';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { switchLang } from '../../../i18n/i18n-config';
import { setLanguage } from '../../../redux/ducks/Language';
import './Flags.css';

const Flags = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('GB');
  const [placeholder, setPlaceholder] = useState(<Gb />);
  const currentLanguage = useSelector((state) => get(state.languageDuck, 'currentLanguage', {}));

  useEffect(() => {
    setSelected(currentLanguage);
    switch (currentLanguage) {
      case 'IT':
        setPlaceholder(<It/>);
        break;    
      default:
        setPlaceholder(<Gb />);
        break;
    }
  }, [currentLanguage]);

  const selectLanguage = (code) => {
    switchLang(code);
    dispatch(setLanguage(code));

    console.log('code language: ', code)
  } 

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={code => selectLanguage(code)}
      countries={["GB", "IT"]}
      showSelectedLabel={false}
      showOptionLabel={false}
      placeholder={placeholder}
      className="menu-flags"
      selectButtonClassName="menu-flags-button"
      selectedSize={24}
      optionsSize={24}
    />
  )
}

export default Flags;