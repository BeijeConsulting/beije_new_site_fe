import 'moment/locale/en-gb';
import 'moment/locale/it';

// Assets
import logo_official_white from "../assets/images/logos/logo_official_white.svg";
import logo_short_white from "../assets/images/logos/logo_short_white.svg";
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faN, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


// Link
const linkFb = "https://www.facebook.com/beijepeoplefirst";
const linkIn = "https://www.linkedin.com/company/beije";
const linkYt = "https://www.youtube.com/channel/UCGZdqNE152QBvg9WZ4E65Iw";


const getBaseURL = () => {
  const env = process.env.REACT_APP_ENV;
  let actualEnv = null;
  switch (env) {
    case 'development':
      actualEnv = require('../envs/development');
      break;
    case 'test':
      actualEnv = require('../envs/test');
      break;
    case 'production':
      actualEnv = require('../envs/prod');
      break;
    default:
      actualEnv = require('../envs/development');
      break;
  }
  return actualEnv;
}

export const ENVIRONMENT = getBaseURL();

export const paginationDefaults = {
  page: 1,
  size: 10,
  total: 0
}

export const dbDate = 'YYYY-MM-DD';
// export const langDate = {
//   gb: 'YYYY/MM/DD',
//   locale_gb: localeGB,
//   it: 'DD/MM/YYYY',
//   locale_it: localeIT,
// }

export const dbMonth = "YYYY-MM";
// export const langMonth = {
//   gb: 'YYYY/MM',
//   locale_gb: localeGB,
//   it: 'MM/YYYY',
//   locale_it: localeIT,
// }

export const googleAnalyticsKey = "UA-215782182-1";

export const logo_primary_light = logo_official_white;
export const logo_secondary_light = logo_short_white;

export const defaultIcon = faN;
export const downArrow = faArrowDownLong;

// Menu voices
export const menu_voices = [
  {
    name: "Beije Consulting",
    link_to: "#",
    key_link: "consulting"
  },
  {
    name: "Beije Up",
    link_to: "#",
    key_link: "up"
  },
  {
    name: "Beije Talent Academy",
    link_to: "#",
    key_link: "academy"
  },
  {
    name: "Chi Siamo",
    link_to: "#",
    key_link: "aboutUs"
  },
  {
    name: "Blog",
    link_to: "#",
    key_link: "blog"
  },
  {
    name: "Community",
    link_to: "#",
    key_link: "community"
  },
  {
    name: "Focus Academy",
    link_to: "#",
    key_link: "focusAcademy"
  },
  {
    name: "Lavora con noi",
    link_to: "#",
    key_link: "career"
  },
  {
    name: "Contatti",
    link_to: "#",
    key_link: "contacts"
  },
]

// Social icons
export const socialFb = faFacebookF;
export const socialIn = faLinkedinIn;
export const socialYt = faYoutube;

export const social_list = [
  {
    lable: "Facebook",
    link_to: linkFb,
    icon: faFacebookF,
    type: "social-primary",
    classNameIcon: "social-icon-primary"
  },
  {
    lable: "Facebook",
    link_to: linkIn,
    icon: faLinkedinIn,
    type: "social-primary",
    classNameIcon: "social-icon-primary"
  },
  {
    lable: "Facebook",
    link_to: linkYt,
    icon: faYoutube,
    type: "social-primary",
    classNameIcon: "social-icon-primary"
  }
]

// Tab About Us
export const tab_aboutUs = [
  {
    labelTab: "La storia",
    valueTab: "1",
    wrappedTab: false,
    contentTabPanel: "Al centro del modello Beije c’è una vision people first : le persone al centro per la creazione di un’azienda di valore. Da un ideale ad un business: da più di 10 anni ci impegniamo costantemente per aggiornare il nostro know-how e siamo in grado di fornire le metodologie più moderne e le tecnologie più innovative per la realizzazione di progetti altamente specializzati.",
    valueTabPanel: "1"
  },
  {
    labelTab: "I nostri valori",
    valueTab: "2",
    wrappedTab: false,
    contentTabPanel: "Al centro del modello Beije c’è una vision people first : le persone al centro per la creazione di un’azienda di valore. Da un ideale ad un business: da più di 10 anni ci impegniamo costantemente per aggiornare il nostro know-how e siamo in grado di fornire le metodologie più moderne e le tecnologie più innovative per la realizzazione di progetti altamente specializzati.",
    valueTabPanel: "2"
  },
  {
    labelTab: "La nostra missione",
    valueTab: "3",
    wrappedTab: false,
    contentTabPanel: "Al centro del modello Beije c’è una vision people first : le persone al centro per la creazione di un’azienda di valore. Da un ideale ad un business: da più di 10 anni ci impegniamo costantemente per aggiornare il nostro know-how e siamo in grado di fornire le metodologie più moderne e le tecnologie più innovative per la realizzazione di progetti altamente specializzati.",
    valueTabPanel: "3"
  },
  {
    labelTab: "La nostra visione",
    valueTab: "4",
    wrappedTab: false,
    contentTabPanel: "Al centro del modello Beije c’è una vision people first : le persone al centro per la creazione di un’azienda di valore. Da un ideale ad un business: da più di 10 anni ci impegniamo costantemente per aggiornare il nostro know-how e siamo in grado di fornire le metodologie più moderne e le tecnologie più innovative per la realizzazione di progetti altamente specializzati.",
    valueTabPanel: "4"
  }
]