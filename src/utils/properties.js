import 'moment/locale/en-gb';
import 'moment/locale/it';

// Assets
import logo_official_white from "../assets/images/logos/logo_official_white.svg";
import logo_short_white from "../assets/images/logos/logo_short_white.svg";
import logo_short_grey from "../assets/images/logos/logo_short_grey.svg";
import logo_short_transparent from "../assets/images/logos/logo_short_transparent.svg";
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faN, faArrowDownLong, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import quotation_mark from "../assets/icons/quote.png";

// Docs
import png_privacyPolicies_it from "../assets/docs/Beije_PrivacyPolicies_IT.pdf";
import png_privacyPolicies_en from "../assets/docs/Beije_PrivacyPolicies_EN.pdf";
import png_legalNotes_it from "../assets/docs/Beije_legalNotes_IT.pdf";
import png_legalNotes_en from "../assets/docs/Beije_legalNotes_EN.pdf";

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
export const logo_secondary_transparent = logo_short_transparent;

export const defaultIcon = faN;
export const downArrow = faArrowDownLong;
export const leftArrow = faAngleLeft;
export const rightArrow = faAngleRight;
export const quotationMark = quotation_mark;

export const privacyPolicies_it = png_privacyPolicies_it;
export const privacyPolicies_en = png_privacyPolicies_en;
export const legalNotes_it = png_legalNotes_it;
export const legalNotes_en = png_legalNotes_en;

export const linkYoutube = linkYt;


// Menu voices
export const menu_voices = [
  {
    name: "consulting",
    link_to: "beije-consulting",
    key_link: "consulting"
  },
  {
    name: "up",
    link_to: "beije-up",
    key_link: "up"
  },
  {
    name: "academy",
    link_to: "beije-talent-academy",
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
    labelTab: "home.tab.vision.title",
    contentPanel: [
      {
        spanContent: "home.tab.vision.content.part1",
        classNameSpan: "hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part2",
        classNameSpan: "hightlight-txt-white hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part3",
        classNameSpan: "hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part4",
        classNameSpan: "hightlight-txt-white hightlight-on-hover",
        addHtml: "two-break"
      },
      {
        spanContent: "home.tab.vision.content.part5",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part6",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part7",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part8",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part9",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part10",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part11",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.vision.content.part12",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      }
    ]
  },
  {
    labelTab: "home.tab.mission.title",
    contentPanel: [
      {
        spanContent: "home.tab.mission.content.part1",
        classNameSpan: "hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part2",
        classNameSpan: "hightlight-txt-white hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part3",
        classNameSpan: "hightlight-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part4",
        classNameSpan: "hightlight-txt-white hightlight-on-hover",
        addHtml: "two-break"
      },
      {
        spanContent: "home.tab.mission.content.part5",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part6",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part7",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part8",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part9",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part10",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part11",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part12",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part13",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part14",
        classNameSpan: "hightlight-txt-white reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.mission.content.part15",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      }
    ]
  },
  {
    labelTab: "home.tab.history.title",
    contentPanel: [
      {
        spanContent: "home.tab.history.content.part1",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part2",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part3",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part4",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part5",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part6",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part7",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part8",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part9",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part10",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part11",
        classNameSpan: "",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part12",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      }
    ]
  },
  {
    labelTab: "home.tab.values.title",
    contentPanel: [
      {
        spanContent: "home.tab.values.content.part1",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part2",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part3",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part4",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part5",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part6",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part7",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part8",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part9",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.values.content.part10",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
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
    description: "home.fifthSection.carouselProfile.francesco_cesana.desc",
    alt: 'FrancescoCesana',
    pictureClassName: "carousel-bg-francesco-cesana",
  },
  {
    id: 2,
    name: 'Erica',
    surname: 'Mauro',
    role: 'Sales manager',
    description: "home.fifthSection.carouselProfile.erica_mauro.desc",
    alt: 'EricaMauro',
    pictureClassName: "carousel-bg-erica-mauro",
  },
  {
    id: 3,
    name: 'Chiara',
    surname: 'Balsamini',
    role: 'Talent Consultant',
    description: "home.fifthSection.carouselProfile.chiara_balsamini.desc",
    alt: 'ChiaraBalsamini',
    pictureClassName: "carousel-bg-chiara-balsamini",
  },
  {
    id: 4,
    name: 'Marianna',
    surname: 'Fulginiti',
    role: 'Account Manager',
    description: 'home.fifthSection.carouselProfile.marianna_fulginiti.desc',
    alt: 'MariannaFulginiti',
    pictureClassName: "carousel-bg-marianna-fulginiti",
  },
  {
    id: 5,
    name: 'Roberto',
    surname: 'Brogi',
    role: 'CTO & Academy Trainer',
    description: 'home.fifthSection.carouselProfile.roberto_brogi.desc',
    alt: 'RobertoBrogi',
    pictureClassName: "carousel-bg-roberto-brogi",
  },
  {
    id: 6,
    name: 'Ivo',
    surname: 'Mosca',
    role: 'CIO & Academy Trainer',
    description: 'home.fifthSection.carouselProfile.ivo_mosca.desc',
    alt: 'IvoMosca',
    pictureClassName: "carousel-bg-ivo-mosca",
  },
  {
    id: 8,
    name: 'Maria',
    surname: 'Amigo Rodrigez',
    role: 'Junior IT Recruiter',
    description: 'home.fifthSection.carouselProfile.maria_rodrigez.desc',
    alt: 'MariaAmigoRodrigez',
    pictureClassName: "carousel-bg-maria-rodrigez",
  },
  {
    id: 9,
    name: 'Francesca',
    surname: 'Bellini',
    role: 'Marketing specialist',
    description: 'home.fifthSection.carouselProfile.francesca_bellini.desc',
    alt: 'FrancescaBellini',
    pictureClassName: "carousel-bg-francesca-bellini",
  }
]

export const clientComments = [
  {
    name: "Name",
    surname: "Surname",
    content: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam. "
  }
]

export const caseStudies = [
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    pictureClassName: "carousel-bg-youthquake"
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    pictureClassName: "carousel-bg-pininfarina"
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    pictureClassName: "carousel-bg-youthquake"
  }
]

export const employeesComments = [
  {
    name: "Name",
    surname: "Surname",
    content: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam."
  },
  {
    name: "Name",
    surname: "Surname",
    content: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar lorem quis metus mollis commodo. Duis eget quam faucibus, vulputate augue et, imperdiet elit. Nam faucibus ipsum enim, at aliquam lorem dictum at. Vestibulum bibendum eu purus vel mattis. Ut at tortor et neque bibendum ultricies id id diam. "
  }
]