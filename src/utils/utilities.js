import React from "react";
import { replace, toNumber } from "lodash";
import NumberFormat from "react-number-format";
import ReactGa from 'react-ga4';
import { Converter } from "showdown";


// export const showError = (error) => {
//   notification.open({
//     duration: 5,
//     className: "notification-error",
//     message: getTranslation("general", "ErrorNotificationTitle"),
//     description: getTranslation("errorsCode", error)
//   });
// }

// export const showSuccess = (message = "SuccessNotificationContent") => {
//   notification.open({
//     duration: 5,
//     className: "notification-success",
//     message: getTranslation("general", "SuccessNotificationTitle"),
//     description: getTranslation("general", message)
//   });
// }

export const buildQueryString = (actQS, data) => {
  let newQueryString = "";
  Object.keys(data).forEach(k => {
    actQS[k] = data[k];
  });
  Object.keys(actQS).forEach((k, i) => {
    newQueryString = newQueryString + (i !== 0 ? `&${k}=${!actQS[k] ? "" : actQS[k]}` : `${k}=${actQS[k]}`);
  });
  return { string: newQueryString, obj: actQS };
}


export const formatNumber = (props) => {
  let numberSuffix;
  switch (props.suffix) {
    case "PERCENT":
      numberSuffix = " %";
      break;
    case "HOUR":
      numberSuffix = " h";
      break;
    case "EUR":
      numberSuffix = " €";
      break;
    default:
      numberSuffix = "";
      break;
  }
  return <NumberFormat
    id={props.id}
    name={props.name}
    value={props.value}
    key={props.key}
    displayType={props.displayType ? props.displayType : "text"}
    thousandSeparator={props.lang === "EN" ? "," : "."}
    decimalSeparator={props.lang === "EN" ? "." : ","}
    decimalScale={2}
    fixedDecimalScale
    suffix={numberSuffix}
    customInput={props.customInput}
    onChange={props.onChange}
    onBlur={props.onBlur}
    isAllowed={props.isAllowed}
    disabled={props.disabled}
    allowEmptyFormatting={props.displayType === "input"}
  />
}

export const unformatNumber = (value, lang) => {
  const regexThousand = lang === "EN" ? /([, €])/g : /([. €])/g;
  const regexDecimal = lang === "EN" ? /([.])/g : /([,])/g;
  let number = replace(value, regexThousand, "");
  number = replace(number, regexDecimal, ".");
  return toNumber(number);
}

export const setGaEvent = (data) => {
  if (data.category && data.action) {
    ReactGa.event({
      category: data.category, // String (Required)
      action: data.action, // String (Required)
      label: data.label, // String (Optional)
      value: data.value, // Int (Optional) must be a number
      nonInteraction: data.nonInteraction, // Bool (Optional) true/false
      transport: data.transport // (Optional) beacon/xhr/image
    });
  }
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

export const millisecsToDate = (millsecs) => {
  const date = new Date(millsecs);
  const newDate = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}/${date.getFullYear()}`;
  return newDate;
}

export const converter = new Converter({
  simpleLineBreaks: true,
  simplifiedAutoLink: true,
  noHeaderId: true,
});

export  function checkPermalink(permalink) {
  let permalinkToUSe;
  let lang = location.href.includes("/it/");
  const newParams = permalink.slice(0, -2);

  lang ?
    permalinkToUSe = newParams + "it"
    :
    permalinkToUSe = newParams + "en"

  return permalinkToUSe;
}