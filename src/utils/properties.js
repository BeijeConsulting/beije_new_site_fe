import 'moment/locale/en-gb';
import 'moment/locale/it';
import localeGB from 'antd/es/date-picker/locale/en_GB';
import localeIT from 'antd/es/date-picker/locale/it_IT';

//Icon for social
import icon_facebook from '../assets/icons/social_icon/f_facebook_dark.png'
import icon_instagram from '../assets/icons/social_icon/in_instagram_dark.png'
import icon_youTube from '../assets/icons/social_icon/youtube_dark.png'

//assets used in home page
// import official_video_home from '../assets/videos/official_video_home.mp4'

//assets used in consulting page
import img1_consulting from '../assets/images/consulting/consulting1.svg'
import img2_consulting from '../assets/images/consulting/consulting2.svg'
import icon1_consulting from '../assets/icons/icon_pc.svg'

//assets used in academy page
import img1_academy from '../assets/images/academy/academy1.svg'
import img2_academy from '../assets/images/academy/academy2.svg'
import img_comments from '../assets/images/comments/img_comments.png'


//export assets
// export const video_home = official_video_home;
export const consulting1 = img1_consulting;
export const consulting2 = img2_consulting;
export const academy1 = img1_academy;
export const academy2 = img2_academy;

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
export const langDate = {
  gb: 'YYYY/MM/DD',
  locale_gb: localeGB,
  it: 'DD/MM/YYYY',
  locale_it: localeIT,
}

export const dbMonth = "YYYY-MM";
export const langMonth = {
  gb: 'YYYY/MM',
  locale_gb: localeGB,
  it: 'MM/YYYY',
  locale_it: localeIT,
}

export const social = {
  icon: {
    icon_facebook: icon_facebook,
    icon_linkedIn: icon_instagram,
    icon_youTube: icon_youTube
  },
  url: {
    url_facebook: 'https://www.facebook.com/beijepeoplefirst',
    url_linkedIn: 'https://www.linkedin.com/company/beije',
    url_youTube: 'https://www.youtube.com/'
  }
}

export const siteMenu = [
  {
    key: 'consulting',
    typeMenu: 'primary',
    title: 'consulting',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: `${ENVIRONMENT.ROUTING.BASE_URL}consulting`
  },
  {
    key: 'academy',
    typeMenu: 'primary',
    title: 'academy',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: `${ENVIRONMENT.ROUTING.BASE_URL}academy`
  },
  {
    key: 'up',
    typeMenu: 'primary',
    title: 'up',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: `${ENVIRONMENT.ROUTING.BASE_URL}up`
  },
  {
    key: 'career',
    typeMenu: 'primary',
    title: 'career',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'blog',
    typeMenu: 'secondary',
    title: 'blog',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'community',
    typeMenu: 'secondary',
    title: 'community',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'whoWeAre',
    typeMenu: 'secondary',
    title: 'whoWeAre',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'contacts',
    typeMenu: 'secondary',
    title: 'contacts',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
]

export const cardWhoWeAre = [
  {
    colContainerClassName: "sec-section-card-col",
    cardContainerClassName: "sec-section-card sec-section-card-bg-value sec-section-card-top",
    colClassName: '',
    titleLevel: 2,
    cardTitle: 'title_value',
    type_btn: 'secondary-arrow-btn',
  },
  {
    colContainerClassName: "sec-section-card-col",
    cardContainerClassName: "sec-section-card sec-section-card-bg-history sec-section-card-bottom",
    colClassName: ' ',
    titleLevel: 2,
    cardTitle: 'title_history',
    type_btn: 'secondary-arrow-btn',
  },
  {
    colContainerClassName: "sec-section-card-col",
    cardContainerClassName: 'sec-section-card sec-section-card-bg-mission sec-section-card-top',
    colClassName: '',
    titleLevel: 2,
    cardTitle: 'title_vision',
    type_btn: 'secondary-arrow-btn',
  },
  {
    colContainerClassName: "sec-section-card-col",
    cardContainerClassName: 'sec-section-card  sec-section-card-bg-vision sec-section-card-bottom',
    colClassName: '',
    titleLevel: 2,
    cardTitle: 'title_mission',
    type_btn: 'secondary-arrow-btn',
  }
]

export const carouselProfile = [
  {
    id: 1,
    name: 'Francesco',
    surname: 'Cesana',
    role: 'General Manager',
    alt: 'FrancescoCesana',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg1',
    classNameLable: 'custom-carousel-lable lable-picture-top'
  },
  {
    id: 2,
    name: 'Erica',
    surname: 'Mauro',
    role: 'Direttore Commerciale',
    alt: 'EricaMauro',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg2',
    classNameLable: 'custom-carousel-lable lable-picture-middle'
  },
  {
    id: 3,
    name: 'Marianna',
    surname: 'Fulginiti',
    role: 'Account Manager',
    alt: 'MariannaFulginiti',
    classNameSingleEl: 'carousel-profile-single-el picture-bottom',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg3',
    classNameLable: 'custom-carousel-lable lable-picture-bottom'
  },
  {
    id: 4,
    name: 'Ivo',
    surname: 'Mosca',
    role: 'CIO & Master Trainer',
    alt: 'IvoMosca',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg4',
    classNameLable: 'custom-carousel-lable lable-picture-middle'
  },
  {
    id: 5,
    name: 'XXXX',
    surname: 'XXXXXX',
    role: 'Direttore generale',
    alt: 'XXXXXXXXXX',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg5',
    classNameLable: 'custom-carousel-lable lable-picture-top'
  },
  {
    id: 6,
    name: 'Chiara',
    surname: 'Balsamini',
    role: 'Account',
    alt: 'ChiaraBalsamini',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg6',
    classNameLable: 'custom-carousel-lable lable-picture-middle'
  },
  {
    id: 7,
    name: 'Roberto',
    surname: 'Brogi',
    role: 'CTO & Master Trainer',
    alt: 'RobertoBrogi',
    classNameSingleEl: 'carousel-profile-single-el picture-bottom',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg7',
    classNameLable: 'custom-carousel-lable lable-picture-bottom'
  },
  {
    id: 8,
    name: 'Francesca',
    surname: 'Ferioli',
    role: 'IT Recruiter Specialist',
    alt: 'FrancescaFerioli',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg8',
    classNameLable: 'custom-carousel-lable lable-picture-middle'
  },
  {
    id: 9,
    name: 'Francesca',
    surname: 'Bellini',
    role: 'head of marketin',
    alt: 'FrancescaBellini',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg9',
    classNameLable: 'custom-carousel-lable lable-picture-top'
  },
  {
    id: 10,
    name: 'Maria',
    surname: 'Amigo Rodrigez',
    role: 'Junior IT Recruiter',
    alt: 'MariaAmigoRodrigez',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg10',
    classNameLable: 'custom-carousel-lable lable-picture-middle'
  },
]


export const consulting_carousel_client = [
  {
    carouselTitle: 'title_carousel_client',
    iconSrc: icon1_consulting,
    titlePenrcentage: '100%',
    carouselDesc: 'paragraph1_carousel_client'
  },
  {
    carouselTitle: 'title_carousel_client',
    iconSrc: icon1_consulting,
    titlePenrcentage: '94%',
    carouselDesc: 'paragraph2_carousel_client'
  },
  {
    carouselTitle: 'title_carousel_client',
    iconSrc: icon1_consulting,
    titlePenrcentage: '100%',
    carouselDesc: 'paragraph3_carousel_client'
  }
]

export const academy_comments = [
  {
    commentsText: 'Trial comments to see if everything is working properly',
    name: 'Name',
    surname: 'surname',
    imgAlt: 'alt img',
    imgSrc: img_comments,
    imgClassName: 'trial'
  },
  {
    commentsText: 'Trial comments to see if everything is working properly',
    name: 'Name',
    surname: 'surname',
    imgAlt: 'alt img',
    imgSrc: img_comments,
    imgClassName: 'trial'
  }
]

export const master_backend_list_intro = [
  'AcademyBackend.introList.el1',
  'AcademyBackend.introList.el2',
  'AcademyBackend.introList.el3'
]

export const master_frontend_list_intro = [
  'AcademyFrontend.introList.el1',
  'AcademyFrontend.introList.el2',
  'AcademyFrontend.introList.el3'
]

export const java_program = [
  {
    title_subject: 'AcademyBackend.program.section1.title',
    subtopic_list:
      [
        'AcademyBackend.program.section1.subsection1',
        'AcademyBackend.program.section1.subsection2',
        'AcademyBackend.program.section1.subsection3',
        'AcademyBackend.program.section1.subsection4',
        'AcademyBackend.program.section1.subsection5',
        'AcademyBackend.program.section1.subsection6',
        'AcademyBackend.program.section1.subsection7',
        'AcademyBackend.program.section1.subsection8',
        'AcademyBackend.program.section1.subsection9',
        'AcademyBackend.program.section1.subsection10',
        'AcademyBackend.program.section1.subsection11',
        'AcademyBackend.program.section1.subsection12',
        'AcademyBackend.program.section1.subsection13',
        'AcademyBackend.program.section1.subsection14',
        'AcademyBackend.program.section1.subsection15',
      ]
  },
  {
    title_subject: 'AcademyBackend.program.section2.title',
    subtopic_list:
      [
        'AcademyBackend.program.section2.subsection1',
        'AcademyBackend.program.section2.subsection2',
        'AcademyBackend.program.section2.subsection3',
        'AcademyBackend.program.section2.subsection4'
      ]
  },
  {
    title_subject: 'AcademyBackend.program.section3.title',
    subtopic_list:
      [
        'AcademyBackend.program.section3.subsection1',
        'AcademyBackend.program.section3.subsection2',
        'AcademyBackend.program.section3.subsection3',
        'AcademyBackend.program.section3.subsection4',
        'AcademyBackend.program.section3.subsection5',
        'AcademyBackend.program.section3.subsection6'
      ]
  },
  {
    title_subject: 'AcademyBackend.program.section4.title',
    subtopic_list:
      [
        'AcademyBackend.program.section4.subsection1',
        'AcademyBackend.program.section4.subsection2',
        'AcademyBackend.program.section4.subsection3',
        'AcademyBackend.program.section4.subsection4',
        'AcademyBackend.program.section4.subsection5',
        'AcademyBackend.program.section4.subsection6',
        'AcademyBackend.program.section4.subsection7',
        'AcademyBackend.program.section4.subsection8',
        'AcademyBackend.program.section4.subsection9',
        'AcademyBackend.program.section4.subsection10'
      ]
  }
]

export const frontend_program = [
  {
    title_subject: 'AcademyFrontend.program.section1.title',
    subtopic_list:
      [
        'AcademyFrontend.program.section1.subsection1',
        'AcademyFrontend.program.section1.subsection2',
        'AcademyFrontend.program.section1.subsection3',
        'AcademyFrontend.program.section1.subsection4',
        'AcademyFrontend.program.section1.subsection5',
        'AcademyFrontend.program.section1.subsection6'
      ]
  },
  {
    title_subject: 'AcademyFrontend.program.section2.title',
    subtopic_list:
      [
        'AcademyFrontend.program.section2.subsection1',
        'AcademyFrontend.program.section2.subsection2',
        'AcademyFrontend.program.section2.subsection3',
        'AcademyFrontend.program.section2.subsection4',
        'AcademyFrontend.program.section2.subsection5',
        'AcademyFrontend.program.section2.subsection6',
        'AcademyFrontend.program.section2.subsection7',
        'AcademyFrontend.program.section2.subsection8'
      ]
  },
  {
    title_subject: 'AcademyFrontend.program.section3.title',
    subtopic_list:
      [
        'AcademyFrontend.program.section3.subsection1',
        'AcademyFrontend.program.section3.subsection2',
        'AcademyFrontend.program.section3.subsection3',
        'AcademyFrontend.program.section3.subsection4',
        'AcademyFrontend.program.section3.subsection5',
        'AcademyFrontend.program.section3.subsection6'
      ]
  },
  {
    title_subject: 'AcademyFrontend.program.section4.title',
    subtopic_list:
      [
        'AcademyFrontend.program.section4.subsection1',
        'AcademyFrontend.program.section4.subsection2',
        'AcademyFrontend.program.section4.subsection3'
      ]
  }
]



export const up_case_studies = [
  {
    containerClassName: 'up-case-studies-container d-flex items-end',
    title: 'Case study 1: sottotitolo case studies',
    titleClassName: 'up-case-studies-title'
  },
  {
    containerClassName: 'up-case-studies-container d-flex items-end',
    title: 'Case study 1: sottotitolo case studies',
    titleClassName: 'up-case-studies-title'
  },
  {
    containerClassName: 'up-case-studies-container d-flex items-end',
    title: 'Case study 1: sottotitolo case studies',
    titleClassName: 'up-case-studies-title'
  }
]

/*
//sia per lista sia per detagli
const blog = [
  {
    title: 'title news',
    subtitle: 'subtitle news',
    mediaBg: 'path',
    description: 'long paragraph',
    images: [
      {
        thumb: 'path',
        imgDesktop: 'path',
        imgMobile: 'path'
      },
      {
        thumb: 'path',
        imgDesktop: 'path',
        imgMobile: 'path'
      },
      {
        thumb: 'path',
        imgDesktop: 'path',
        imgMobile: 'path'
      }
    ],
    video: 'path',
    hashtags: ['learn', 'beije', 'together'],
    permalink: 'titolo-news' //parte finale dell'url univoca
  }
]
*/
/*
const COMMUNITY = [
  {
    title: 'title news',
    image: {
      thumb: 'path',
      imgDesktop: 'path',
      imgMobile: 'path'
    },
    description: 'long paragraph',
    permalink: 'titolo-news' //parte finale dell'url univoca,
    video: 'link YouTube' //se la stringa è vuota vuol dire che non c'è il video
  }
]
*/

/*
const JOB_APPLICATION = [
  {
    title: 'react developer', //string
    type: 'frontend', //string
    mode: 'remoto', //string
    academy: true, //bool - indica se la posizione è per academy o lavorativa
    description: '<p>Long description</p>', //long string
    date_creation: '2021-11-24', //date
    permalink: 'titolo-news' //parte finale dell'url univoca
  },
  {
    title: 'java developer', //string
    type: 'backend', //string
    mode: 'milano', //string
    academy: true, //bool - indica se la posizione è per academy o lavorativa
    description: '<p>Long description</p>', //long string
    date_creation: '2021-11-24', //date
    permalink: 'titolo-news' //parte finale dell'url univoca
  },
]
*/
