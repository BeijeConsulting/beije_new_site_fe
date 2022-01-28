import React from 'react';
import ReactGa from 'react-ga';
import { notification } from 'antd';
import { getTranslation } from '../i18n/i18n-config';
import { replace, toNumber } from 'lodash';
import NumberFormat from 'react-number-format';

export const getUserInfoLocal = (key = '') => {
  let userInfoLocal = {};
  userInfoLocal = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userInfoLocal);
  let dataReturn = null;
  if (key !== '' && userInfo !== null && userInfo[key]) {
    dataReturn = userInfo[key];
  } else if (key === '') {
    dataReturn = userInfo;
  }
  return dataReturn;
}

export const showError = (error) => {
  notification.open({
    duration: 5,
    className: 'notification-error',
    message: getTranslation('general', 'ErrorNotificationTitle'),
    description: getTranslation('errorsCode', error)
  });
}

export const showSuccess = (message = "SuccessNotificationContent") => {
  notification.open({
    duration: 5,
    className: 'notification-success',
    message: getTranslation('general', 'SuccessNotificationTitle'),
    description: getTranslation('general', message)
  });
}

export const buildQueryString = (actQS, data) => {
  let newQueryString = '';
  Object.keys(data).forEach(k => {
    actQS[k] = data[k];
  });
  Object.keys(actQS).forEach((k, i) => {
    newQueryString = newQueryString + (i !== 0 ? `&${k}=${!actQS[k] ? '' : actQS[k]}` : `${k}=${actQS[k]}`);
  });
  return { string: newQueryString, obj: actQS };
}


export const formatNumber = (props) => {
  let numberSuffix;
  switch (props.suffix) {
    case 'PERCENT':
      numberSuffix = ' %';
      break;
    case 'HOUR':
      numberSuffix = ' h';
      break;
    case 'EUR':
      numberSuffix = ' €';
      break;
    default:
      numberSuffix = '';
      break;
  }
  return <NumberFormat
    id={props.id}
    name={props.name}
    value={props.value}
    key={props.key}
    displayType={props.displayType ? props.displayType : 'text'}
    thousandSeparator={props.lang === 'GB' ? ',' : '.'}
    decimalSeparator={props.lang === 'GB' ? '.' : ','}
    decimalScale={2}
    fixedDecimalScale
    suffix={numberSuffix}
    customInput={props.customInput}
    onChange={props.onChange}
    onBlur={props.onBlur}
    isAllowed={props.isAllowed}
    disabled={props.disabled}
    allowEmptyFormatting={props.displayType === 'input'}
  />
}

export const unformatNumber = (value, lang) => {
  const regexThousand = lang === 'GB' ? /([, €])/g : /([. €])/g;
  const regexDecimal = lang === 'GB' ? /([.])/g : /([,])/g;
  let number = replace(value, regexThousand, '');
  number = replace(number, regexDecimal, '.');
  return toNumber(number);
}


export const turnToUppercase = (sentence) => {
  let new_sentence = sentence
  return (new_sentence.toUpperCase())
}

export const divideText = (sentence, division) => {
  let type_division = division;
  let new_sentence = sentence.split(type_division);

  const printNewSentence = (item, key) => {
    return (
      <span key={key}>
        {item}
      </span>
    )
  }

  return (
    new_sentence.map(printNewSentence)
  )
}


export const addBreakPoint = (sentence, division) => {
  let type_division = division;
  let new_sentence = sentence.split(type_division);

  const printNewSentence = (item, key) => {
    return (
      <div key={key}>
        <p>
          {item}
        </p>
        <br />
      </div>
    )
  }

  return (
    new_sentence.map(printNewSentence)
  )
}

export const setGaEvent = (data) => () => {
  if (data.category && data.action) {
    ReactGa.event({
      category: data.category, // String (Required)
      action: data.action, // String (Required)
      label: data.label, // String (Optional)
      value: data.value, // Int (Optional)
      nonInteraction: data.nonInteraction, // Bool (Optional)
      transport: data.transport // (Optional)
    });
  }
}