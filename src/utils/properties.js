import 'moment/locale/en-gb';
import 'moment/locale/it';

// Assets

import { faFacebookF, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faN, faArrowDownLong, faAngleLeft, faAngleRight, faPlus, faArrowLeft, faMinus, faClock, faXmark } from '@fortawesome/free-solid-svg-icons';
import quotation_mark from "../assets/icons/quote.svg";
import logo_pininfarina from "../assets/images/up/caseStudies/pininfarina.jpg";
import logo_youthquake from "../assets/images/up/caseStudies/youthquake.jpg";
import empty_academy from "../assets/icons/empty_academy.svg"
import empty_job from "../assets/icons/empty_job.svg"
import posterVideo from '../assets/images/posterVideoAcademy.jpg'
import icon_profile from "../assets/icons/iconProfile.png";
import careerVideoPoster from "../assets/images/career/career4.jpg";

// Link
const linkFb = "https://www.facebook.com/beijepeoplefirst";
const linkIn = "https://www.linkedin.com/company/beije";
const linkYt = "https://www.youtube.com/channel/UCGZdqNE152QBvg9WZ4E65Iw";
const linkIg = "https://www.instagram.com/beijepeoplefirst/"

// Captcha
export const googleReCaptchaKey = "6Lf_gDoeAAAAAMThwX9hHIPZmULe3bAePNWxA80o";

export const ENVIRONMENT = {
  API_REST_BE: process.env.REACT_APP_API_REST_BE,
};

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

export const googleAnalyticsKey = "G-WKEXRBRFFB";

export const logo_primary_light = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/logos/logo_official_white.svg";
export const logo_secondary_light = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/logos/logo_short_white.svg";
export const logo_secondary_grey = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/logos/logo_short_grey.svg";
export const logo_secondary_transparent = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/logos/logo_short_transparent.svg";

export const defaultIcon = faN;
export const downArrow = faArrowDownLong;
export const leftArrow = faAngleLeft;
export const rightArrow = faAngleRight;
export const quotationMark = quotation_mark;
export const addIcon = faPlus;
export const minusIcon = faMinus;
export const infoGraphicFrontend = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/academyDetail/infoGraphicAcademyFrontend.svg";
export const infoGraphicBackend = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/academyDetail/infoGraphicAcademyBackend.svg";
export const infoGraphicAcademy = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/academy/infoGraphicAcademy.svg";
export const backArrow = faArrowLeft;
export const clock = faClock;
export const logo_fondazione_lavoro = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/academy/fondazione_lavoro_logo.png";
export const career_empty_academy = empty_academy
export const career_empty_job = empty_job
export const xIcon = faXmark
export const profile = icon_profile;

export const linkYoutube = linkYt;
export const posterVideoAcademy = posterVideo;

export const posterVideoCareer = careerVideoPoster;

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
    name: "career",
    link_to: "/career",
    key_link: "career"
  },
  {
    name: "blog",
    link_to: "blog",
    key_link: "blog"
  },
  {
    name: "community",
    link_to: "/community",
    key_link: "community"
  },
  {
    name: "event",
    link_to: "events",
    key_link: "events"
  },
  // {
  //   name: "focusAcademy",
  //   link_to: "#",
  //   key_link: "focusAcademy"
  // },

  {
    name: "contacts",
    link_to: "/contacts",
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
    lable: "LinkedIn",
    link_to: linkIn,
    icon: faLinkedinIn,
    type: "social-primary",
    classNameIcon: "social-icon-primary"
  },
  {
    lable: "YouTube",
    link_to: linkYt,
    icon: faYoutube,
    type: "social-primary",
    classNameIcon: "social-icon-primary"
  },
  {
    lable: "Instagram",
    link_to: linkIg,
    icon: faInstagram,
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
    name: 'Giorgia',
    surname: 'Marletta',
    role: 'HR Manager',
    description: "home.fifthSection.carouselProfile.giorgia_marletta.desc",
    alt: 'GiorgiaMarletta',
    pictureClassName: "carousel-bg-giorgia-marletta",
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
    name: 'Maria',
    surname: 'Amigo Rodrigez',
    role: 'Junior IT Recruiter',
    description: 'home.fifthSection.carouselProfile.maria_rodrigez.desc',
    alt: 'MariaAmigoRodrigez',
    pictureClassName: "carousel-bg-maria-rodrigez",
  },
  {
    id: 5,
    name: 'Francesca',
    surname: 'Bellini',
    role: 'Marketing specialist',
    description: 'home.fifthSection.carouselProfile.francesca_bellini.desc',
    alt: 'FrancescaBellini',
    pictureClassName: "carousel-bg-francesca-bellini",
  },
  {
    id: 6,
    name: 'Rodrigo',
    surname: 'Raminelli',
    role: 'Technical Leader Backend',
    description: 'home.fifthSection.carouselProfile.rodrigo_raminelli.desc',
    alt: 'RodrigoRaminelli',
    pictureClassName: "carousel-bg-rodrigo-raminelli",
  },
  {
    id: 7,
    name: 'Elisa',
    surname: 'Rossi',
    role: 'Technical Leader Frontend',
    description: 'home.fifthSection.carouselProfile.elisa_rossi.desc',
    alt: 'ElisaRossi',
    pictureClassName: "carousel-bg-elisa-rossi",
  },
  {
    id: 8,
    name: 'Ivo',
    surname: 'Mosca',
    role: 'CIO & Academy Trainer',
    description: 'home.fifthSection.carouselProfile.ivo_mosca.desc',
    alt: 'IvoMosca',
    pictureClassName: "carousel-bg-ivo-mosca",
  },
  {
    id: 9,
    name: 'Roberto',
    surname: 'Brogi',
    role: 'CTO & Academy Trainer',
    description: 'home.fifthSection.carouselProfile.roberto_brogi.desc',
    alt: 'RobertoBrogi',
    pictureClassName: "carousel-bg-roberto-brogi",
  },
  {
    id: 10,
    name: 'Marianna',
    surname: 'Fulginiti',
    role: 'Account Manager',
    description: 'home.fifthSection.carouselProfile.marianna_fulginiti.desc',
    alt: 'MariannaFulginiti',
    pictureClassName: "carousel-bg-marianna-fulginiti",
  },
  {
    id: 11,
    name: 'Erica',
    surname: 'Mauro',
    role: 'Sales manager',
    description: "home.fifthSection.carouselProfile.erica_mauro.desc",
    alt: 'EricaMauro',
    pictureClassName: "carousel-bg-erica-mauro",
  }
]

export const clientComments = [
  {
    name: "Francesco Pancaro",
    surname: "Head of Financial Planning & Control, PININFARINA",
    content: "up.commentsSection.commentsClient.francescoPancaro",
    logo: "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/case_studies/pininfarina.png"
  },
  {
    name: "Matteo Milione",
    surname: "Managing Partner, YOUTHQUAKE",
    content: "up.commentsSection.commentsClient.matteoMilione",
    logo: "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/case_studies/youthquake.png"
  }
]

export const caseStudies = [
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    colorBg: "#fff",
    imgCarousel: logo_youthquake
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    colorBg: "#fff",
    imgCarousel: logo_pininfarina
  },
  {
    title: "Nome Progetto",
    subtitle: "Subtitle progetto poco più lungo, da definire",
    colorBg: "#fff",
    imgCarousel: logo_youthquake
  }
]

// export const clientComments = [
//   {
//     name: "Francesco Pancaro",
//     surname: "Head of Financial Planning & Control, PININFARINA",
//     contentPanel: "up.commentsSection.commentsClient.francescoPancaro"
//   },
//   {
//     name: "Matteo Milione",
//     surname: "Managing Partner, YOUTHQUAKE",
//     contentPanel: "up.commentsSection.commentsClient.matteoMilione"
//   }
// ]

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

export const advantagesBeije = [
  {
    title: "Smartworking",
    paragraph: "In Beije siamo grandi fan dello smartworking, il nostro motto è “no matter where but how”, crediamo però che il valore dell’incontro vada coltivato: i nostri uffici sono sempre aperti per lavorare fianco a fianco con la Community e a seconda del cliente/progetto sul quale ci troviamo l’ufficio diventa luogo strategico di teamwork.",
    isOpen: false
  },
  {
    title: "Eventi Beije",
    paragraph: "Far parte della Community significa anche costruire un rapporto prima di tutto tra persone: due volte all’anno ci ritroviamo tutti insieme per una festa in pieno stile Beije!",
    isOpen: false
  },
  {
    title: "Incontri Afterwork",
    paragraph: "Almeno una volta al mese con la nostra community organizziamo aperitivi, serate giochi, eventi per goderci una serata insieme!",
    isOpen: false
  },
  {
    title: "Community Coffee Breaks",
    paragraph: "In ufficio due cose non mancano mai: litri di caffè e momenti di chiacchiere e confronto con il team nella nostra sala break!",
    isOpen: false
  }
];

export const growthPaths = [
  {
    title: "Beije Supporter",
    description: "La tua carriera non inizia full alone: un Supporter interno ti guiderà durante il tuo percorso professionale, aiutandoti fin dall’inizio ad integrarti nella realtà aziendale, affinché tu possa partire al meglio. Anche al di là del lavoro, ci sosteniamo a vicenda come una vera Community."
  },
  {
    title: "Piani di crescita ad hoc",
    description: "Crediamo che la nostra Community sia spazio di crescita e arricchimento: attiviamo percorsi formativi di inserimento, coach aziendale a disposizione e piani di crescita personalizzati con te con obiettivi a cadenza annuale."
  }
]

export const benefitsTeam = [
  {
    title: "Formazione e-learning",
    paragraph: "Promuoviamo la curiosità e la voglia di conoscenza: mettiamo a disposizione di ognuno l’accesso gratuito ad una piattaforma di e-learning con numerosi corsi sempre aggiornati.",
    isOpen: false
  },
  {
    title: "Formazione linguistica",
    paragraph: "Abbattiamo i confini professionali e personali e crediamo nell’importanza di misurarsi in contesti internazionali, mettiamo a disposizione uno strumento di apprendimento linguistico online per imparare gratuitamente lingue straniere.",
    isOpen: false
  },
  {
    title: "Webinar ed event",
    paragraph: "Poniamo le basi per una crescita professionale a 360 gradi: almeno due volte all’anno organizziamo eventi di formazione tenuti dai nostri esperti Beije e da professionisti del settore; pianifichiamo anche webinar interni online per aggiornare la Community sulle ultime tecnologie e le innovazioni più interessanti del mercato.",
    isOpen: false
  }
]