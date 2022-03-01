import 'moment/locale/en-gb';
import 'moment/locale/it';

// Assets
import logo_official_white from "../assets/images/logos/logo_official_white.svg";
import logo_short_white from "../assets/images/logos/logo_short_white.svg";
import logo_short_grey from "../assets/images/logos/logo_short_grey.svg";
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faN, faArrowDownLong, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import chiara_balsamini from "../assets/images/profile_picture/chiara_balsamini.jpg";
import erica_mauro from "../assets/images/profile_picture/erica_mauro.jpg";
import francesca_bellini from "../assets/images/profile_picture/francesca_bellini.jpg";
import francesca_ferioli from "../assets/images/profile_picture/francesca_ferioli.jpg";
import francesco_cesana from "../assets/images/profile_picture/francesco_cesana.jpg";
import ivo_mosca from "../assets/images/profile_picture/ivo_mosca.jpg";
import maria_rodrigez from "../assets/images/profile_picture/maria_rodrigez.jpg";
import marianna_fulginiti from "../assets/images/profile_picture/marianna_fulginiti.jpg";
import roberto_brogi from "../assets/images/profile_picture/roberto_brogi.jpg";

// Docs
import png_privacyPolicies_it from "../assets/images/privacy/Beije_PrivacyPolicies_IT.png";
import png_privacyPolicies_en from "../assets/images/privacy/Beije_PrivacyPolicies_EN.png";
import png_legalNotes_it from "../assets/images/privacy/Beije_legalNotes_IT.png";
import png_legalNotes_en from "../assets/images/privacy/Beije_legalNotes_EN.png";

// Link
const linkFb = "https://www.facebook.com/beijepeoplefirst";
const linkIn = "https://www.linkedin.com/company/beije";
const linkYt = "https://www.youtube.com/channel/UCGZdqNE152QBvg9WZ4E65Iw";

// Captcha
export const googleReCaptchaKey = "6Lf_gDoeAAAAAMThwX9hHIPZmULe3bAePNWxA80o";

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
export const logo_secondary_grey = logo_short_grey;

export const defaultIcon = faN;
export const downArrow = faArrowDownLong;
export const closeIcon = faSquareXmark;

export const privacyPolicies_it = png_privacyPolicies_it;
export const privacyPolicies_en = png_privacyPolicies_en;
export const legalNotes_it = png_legalNotes_it;
export const legalNotes_en = png_legalNotes_en;


// Menu voices
export const menu_voices = [
  {
    name: "consulting",
    link_to: "#",
    key_link: "consulting"
  },
  {
    name: "up",
    link_to: "#",
    key_link: "up"
  },
  {
    name: "academy",
    link_to: "#",
    key_link: "academy"
  },
  {
    name: "blog",
    link_to: "#",
    key_link: "blog"
  },
  {
    name: "community",
    link_to: "#",
    key_link: "community"
  },
  {
    name: "focusAcademy",
    link_to: "#",
    key_link: "focusAcademy"
  },
  {
    name: "career",
    link_to: "#",
    key_link: "career"
  },
  {
    name: "contacts",
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
    labelTab: "La nostra visione",
    contentPanel: [
      {
        spanContent: "home.tab.vision.content.part1",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.vision.content.part2",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.vision.content.part3",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.vision.content.part4",
        classNameSpan: "hightlight-txt-white"
      }
    ]
  },
  {
    labelTab: "La nostra missione",
    contentPanel: [
      {
        spanContent: "home.tab.mission.content.part1",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.mission.content.part2",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.mission.content.part3",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.mission.content.part4",
        classNameSpan: "hightlight-txt-white"
      }
    ]
  },
  {
    labelTab: "La nostra storia",
    contentPanel: [
      {
        spanContent: "home.tab.history.content.part1",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.history.content.part2",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.history.content.part3",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.history.content.part4",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.history.content.part5",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.history.content.part6",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.history.content.part7",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.history.content.part8",
        classNameSpan: "hightlight-txt-white"
      }
    ]
  },
  {
    labelTab: "I nostri valori",
    contentPanel: [
      {
        spanContent: "home.tab.values.content.part1",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part2",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.values.content.part3",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part4",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part5",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.values.content.part6",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part7",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part8",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "home.tab.values.content.part9",
        classNameSpan: ""
      },
      {
        spanContent: "home.tab.values.content.part10",
        classNameSpan: "hightlight-txt-white"
      }
    ]
  }
]

// Profile picture carousel
export const carouselProfile = [
  {
    id: 1,
    name: 'Francesco',
    surname: 'Cesana',
    role: 'General Manager',
    description: "long descriprion",
    alt: 'FrancescoCesana',
    pictureClassName: "carousel-bg-francesco-cesana",
    picture: francesco_cesana
  },
  {
    id: 2,
    name: 'Erica',
    surname: 'Mauro',
    role: 'Sales manager',
    description: "long descriprion",
    alt: 'EricaMauro',
    pictureClassName: "carousel-bg-erica-mauro",
    picture: erica_mauro
  },
  {
    id: 3,
    name: 'Chiara',
    surname: 'Balsamini',
    role: 'Talent Consultant',
    description: "long descriprion",
    alt: 'ChiaraBalsamini',
    pictureClassName: "carousel-bg-chiara-balsamini",
    picture: chiara_balsamini
  },
  {
    id: 4,
    name: 'Marianna',
    surname: 'Fulginiti',
    role: 'Account Manager',
    description: 'long descriprion',
    alt: 'MariannaFulginiti',
    pictureClassName: "carousel-bg-marianna-fulginiti",
    picture: marianna_fulginiti
  },
  {
    id: 5,
    name: 'Roberto',
    surname: 'Brogi',
    role: 'CTO & Master Trainer',
    description: 'long descriprion',
    alt: 'RobertoBrogi',
    pictureClassName: "carousel-bg-roberto-brogi",
    picture: roberto_brogi
  },
  {
    id: 6,
    name: 'Ivo',
    surname: 'Mosca',
    role: 'CIO & Master Trainer',
    description: 'long descriprion',
    alt: 'IvoMosca',
    pictureClassName: "carousel-bg-ivo-mosca",
    picture: ivo_mosca
  },
  {
    id: 7,
    name: 'Francesca',
    surname: 'Ferioli',
    role: 'HR specialist',
    description: 'long descriprion',
    alt: 'FrancescaFerioli',
    pictureClassName: "carousel-bg-farcesca-ferioli",
    picture: francesca_ferioli
  },
  {
    id: 8,
    name: 'Maria',
    surname: 'Amigo Rodrigez',
    role: 'Junior IT Recruiter',
    description: 'long descriprion',
    alt: 'MariaAmigoRodrigez',
    pictureClassName: "carousel-bg-maria-rodrigez",
    picture: maria_rodrigez
  },
  {
    id: 9,
    name: 'Francesca',
    surname: 'Bellini',
    role: 'Marketing specialist',
    description: 'long descriprion',
    alt: 'FrancescaBellini',
    pictureClassName: "carousel-bg-francesca-bellini",
    picture: francesca_bellini
  }
]

export const list_images = [
  chiara_balsamini,
  erica_mauro,
  francesca_bellini,
  francesca_ferioli,
  francesco_cesana,
  ivo_mosca,
  maria_rodrigez,
  marianna_fulginiti,
  roberto_brogi
]