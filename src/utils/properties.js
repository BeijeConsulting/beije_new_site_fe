import 'moment/locale/en-gb';
import 'moment/locale/it';

// Assets
import logo_official_white from "../assets/images/logos/logo_official_white.svg";
import logo_short_white from "../assets/images/logos/logo_short_white.svg";
import logo_short_grey from "../assets/images/logos/logo_short_grey.svg";
import logo_short_transparent from "../assets/images/logos/logo_short_transparent.svg";
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faN, faArrowDownLong, faAngleLeft, faAngleRight, faPlus, faArrowLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import quotation_mark from "../assets/icons/quote.png";
import logo_pininfarina from "../assets/images/up/caseStudies/pininfarina.jpg";
import logo_youthquake from "../assets/images/up/caseStudies/youthquake.jpg";
import infoGraphic1 from "../assets/images/academyDetail/infoGraphicAcademyFrontend.svg"

// Docs
import png_privacyPolicies_it from "../assets/docs/Beije_PrivacyPolicies_IT.pdf";
import png_privacyPolicies_en from "../assets/docs/Beije_PrivacyPolicies_EN.pdf";
import png_legalNotes_it from "../assets/docs/Beije_legalNotes_IT.pdf";
import png_legalNotes_en from "../assets/docs/Beije_legalNotes_EN.pdf";
import presentation_consulting from "../assets/docs/Presentazione_consulting_BeijePeopleFirst.pdf"
import presentation_up from "../assets/docs/Presentazione_up_BeijePeopleFirst.pdf"

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
export const addIcon = faPlus;
export const minusIcon = faMinus;
export const infoGraphicFrontend = infoGraphic1;
export const backArrow = faArrowLeft;

export const privacyPolicies_it = png_privacyPolicies_it;
export const privacyPolicies_en = png_privacyPolicies_en;
export const legalNotes_it = png_legalNotes_it;
export const legalNotes_en = png_legalNotes_en;
export const pdf_presentation_consulting = presentation_consulting;
export const pdf_presentation_up = presentation_up;

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
    link_to: "/career",
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
    classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
    classNameLabelBox: "tab-lables-box",
    classNameLabels: "tab-lables",
    classNameLabelActive: "tab-lables tab-lables-active",
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
    classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
    classNameLabelBox: "tab-lables-box",
    classNameLabels: "tab-lables",
    classNameLabelActive: "tab-lables tab-lables-active",
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
    classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
    classNameLabelBox: "tab-lables-box",
    classNameLabels: "tab-lables",
    classNameLabelActive: "tab-lables tab-lables-active",
    labelTab: "home.tab.history.title",
    contentPanel: [
      {
        spanContent: "home.tab.history.content.part1",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part2",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part3",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part4",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part5",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part6",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part7",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part8",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part9",
        classNameSpan: "reduce-on-hover",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part10",
        classNameSpan: "hightlight-txt-white",
        addHtml: ""
      },
      {
        spanContent: "home.tab.history.content.part11",
        classNameSpan: "reduce-on-hover",
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
    classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
    classNameLabelBox: "tab-lables-box",
    classNameLabels: "tab-lables",
    classNameLabelActive: "tab-lables tab-lables-active",
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
    pictureClassName: "carousel-bg-youthquake",
    imgCarousel: logo_youthquake
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    pictureClassName: "carousel-bg-pininfarina",
    imgCarousel: logo_pininfarina
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    pictureClassName: "carousel-bg-youthquake",
    imgCarousel: logo_youthquake
  }
]

export const employeesComments = [
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsDiMonaco",
    name: "Federica",
    surname: "Di Monaco"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsPignorio",
    name: "Luca",
    surname: "Pignorio"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsEzpeleta",
    name: "Clark",
    surname: "Ezpeleta"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsSavallo",
    name: "Alessandro",
    surname: "Savallo"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsZacheo",
    name: "Emanuele",
    surname: "Zacheo"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsFraioli",
    name: "Samuele",
    surname: "Fraioli"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsBusseni",
    name: "Samuele",
    surname: "Busseni"
  },
  {
    contentPanel: "academy.fourthSection.comments_txt.commentsFarina",
    name: "Alessandro",
    surname: "Farina"
  }
]

export const academyCourseStructure = [
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row1Title",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row1Desc",
    type: ""
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row2Title",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row2Desc",
    type: ""
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row3Title",
    type: "title"
  },
  {
    colMobile: 12,
    colDesktop: 6,
    name: "academyFrontend.table.row3Desc",
    type: ""
  }
]

export const programFrontendAcademy = [
  {
    sectionTitle: 'academyFrontend.program.section1.title',
    description:
      [
        { p: 'academyFrontend.program.section1.subsection1' },
        { p: 'academyFrontend.program.section1.subsection2' },
        { p: 'academyFrontend.program.section1.subsection3' },
        { p: 'academyFrontend.program.section1.subsection4' },
        { p: 'academyFrontend.program.section1.subsection5' },
        { p: 'academyFrontend.program.section1.subsection6' }
      ]
  },
  {
    sectionTitle: 'academyFrontend.program.section2.title',
    description:
      [
        { p: 'academyFrontend.program.section2.subsection1' },
        { p: 'academyFrontend.program.section2.subsection2' },
        { p: 'academyFrontend.program.section2.subsection3' },
        { p: 'academyFrontend.program.section2.subsection4' },
        { p: 'academyFrontend.program.section2.subsection5' },
        { p: 'academyFrontend.program.section2.subsection6' },
        { p: 'academyFrontend.program.section2.subsection7' },
        { p: 'academyFrontend.program.section2.subsection8' }
      ]
  },
  {
    sectionTitle: 'academyFrontend.program.section3.title',
    description:
      [
        { p: 'academyFrontend.program.section3.subsection1' },
        { p: 'academyFrontend.program.section3.subsection2' },
        { p: 'academyFrontend.program.section3.subsection3' },
        { p: 'academyFrontend.program.section3.subsection4' },
        { p: 'academyFrontend.program.section3.subsection5' },
        { p: 'academyFrontend.program.section3.subsection6' }
      ]
  },
  {
    sectionTitle: 'academyFrontend.program.section4.title',
    description:
      [
        { p: 'academyFrontend.program.section4.subsection1' },
        { p: 'academyFrontend.program.section4.subsection2' },
        { p: 'academyFrontend.program.section4.subsection3' }
      ]
  }
]

export const programBackendAcademy = [
  {
    sectionTitle: 'academyBackend.program.section1.title',
    description:
      [
        { p: 'academyBackend.program.section1.subsection1' },
        { p: 'academyBackend.program.section1.subsection2' },
        { p: 'academyBackend.program.section1.subsection3' },
        { p: 'academyBackend.program.section1.subsection4' },
        { p: 'academyBackend.program.section1.subsection5' },
        { p: 'academyBackend.program.section1.subsection6' },
        { p: 'academyBackend.program.section1.subsection7' },
        { p: 'academyBackend.program.section1.subsection8' },
        { p: 'academyBackend.program.section1.subsection9' },
        { p: 'academyBackend.program.section1.subsection10' },
        { p: 'academyBackend.program.section1.subsection11' },
        { p: 'academyBackend.program.section1.subsection12' },
        { p: 'academyBackend.program.section1.subsection13' },
        { p: 'academyBackend.program.section1.subsection14' },
        { p: 'academyBackend.program.section1.subsection15' },
      ]
  },
  {
    sectionTitle: 'academyBackend.program.section2.title',
    description:
      [
        { p: 'academyBackend.program.section2.subsection1' },
        { p: 'academyBackend.program.section2.subsection2' },
        { p: 'academyBackend.program.section2.subsection3' },
        { p: 'academyBackend.program.section2.subsection4' }
      ]
  },
  {
    sectionTitle: 'academyBackend.program.section3.title',
    description:
      [
        { p: 'academyBackend.program.section3.subsection1' },
        { p: 'academyBackend.program.section3.subsection2' },
        { p: 'academyBackend.program.section3.subsection3' },
        { p: 'academyBackend.program.section3.subsection4' },
        { p: 'academyBackend.program.section3.subsection5' },
        { p: 'academyBackend.program.section3.subsection6' }
      ]
  },
  {
    sectionTitle: 'academyBackend.program.section4.title',
    description:
      [
        { p: 'academyBackend.program.section4.subsection1' },
        { p: 'academyBackend.program.section4.subsection2' },
        { p: 'academyBackend.program.section4.subsection3' },
        { p: 'academyBackend.program.section4.subsection4' },
        { p: 'academyBackend.program.section4.subsection5' },
        { p: 'academyBackend.program.section4.subsection6' },
        { p: 'academyBackend.program.section4.subsection7' },
        { p: 'academyBackend.program.section4.subsection8' },
        { p: 'academyBackend.program.section4.subsection9' },
        { p: 'academyBackend.program.section4.subsection10' }
      ]
  }
]