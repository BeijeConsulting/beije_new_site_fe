import 'moment/locale/en-gb';
import 'moment/locale/it';
import localeGB from 'antd/es/date-picker/locale/en_GB';
import localeIT from 'antd/es/date-picker/locale/it_IT';

//Icon for social
import icon_facebook from '../assets/icons/social_icon/f_facebook_dark.png'
import icon_instagram from '../assets/icons/social_icon/in_instagram_dark.png'
import icon_youTube from '../assets/icons/social_icon/youtube_dark.png'

//images to use in website
import img1_consulting from '../assets/images/beije_team_office/ITA_1975_Web.jpg'
import img2_consulting from '../assets/images/beije_team_office/ITA_2633_Web.jpg'


export const consulting1 = img1_consulting;
export const consulting2 = img2_consulting;

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
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'academy',
    typeMenu: 'primary',
    title: 'academy',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'up',
    typeMenu: 'primary',
    title: 'up',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
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
    cardClassName: 'container-column width-100 height-100 items-center justify-around',
    titleLevel: 1,
    cardTitle: 'title_value',
    titleClassName: 'sec-section-title',
    paragraph: 'paragraph_value',
    bgImage: 'sec-section-bgImg sec-section-bg1',
    show_btn: true,
    type_btn: 'primary-arrow-btn',
    orientation: 'left',
  },
  {
    cardClassName: 'container-column width-100 height-100 items-center justify-around',
    titleLevel: 1,
    cardTitle: 'title_history',
    titleClassName: 'sec-section-title',
    paragraph: 'paragraph_history',
    bgImage: 'sec-section-bgImg sec-section-bg2',
    show_btn: true,
    type_btn: 'primary-arrow-btn',
    orientation: 'right',
  },
  {
    cardClassName: 'container-column width-100 height-100 items-center justify-around',
    titleLevel: 1,
    cardTitle: 'title_mission',
    titleClassName: 'sec-section-title',
    paragraph: 'paragraph_mission',
    bgImage: 'sec-section-bgImg sec-section-bg3',
    show_btn: true,
    type_btn: 'primary-arrow-btn',
  },
  {
    cardClassName: 'container-column width-100 height-100 items-center justify-around',
    titleLevel: 1,
    cardTitle: 'title_vision',
    titleClassName: 'sec-section-title',
    paragraph: 'paragraph_vision',
    bgImage: 'sec-section-bgImg sec-section-bg4',
    show_btn: true,
    type_btn: 'primary-arrow-btn',
  }
]

export const carouselProfile = [
  {
    id: 1,
    name: 'Francesco',
    surname: 'Cesana',
    role: 'Direttore generale',
    alt: 'FrancescoCesana',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg1'
  },
  {
    id: 2,
    name: 'Erica',
    surname: 'Mauro',
    alt: 'EricaMauro',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg2'
  },
  {
    id: 3,
    name: 'Marianna',
    surname: 'Fulginiti',
    alt: 'MariannaFulginiti',
    classNameSingleEl: 'carousel-profile-single-el picture-bottom',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg3'
  },
  {
    id: 4,
    name: 'Ivo',
    surname: 'Mosca',
    alt: 'IvoMosca',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg4'
  },
  {
    id: 5,
    name: 'Monica',
    surname: 'Industriale',
    alt: 'MonicaIndustriale',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg5'
  },
  {
    id: 6,
    name: 'Chiara',
    surname: 'Balsamini',
    alt: 'ChiaraBalsamini',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg6'
  },
  {
    id: 7,
    name: 'Roberto',
    surname: 'Brogi',
    alt: 'RobertoBrogi',
    classNameSingleEl: 'carousel-profile-single-el picture-bottom',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg7'
  },
  {
    id: 8,
    name: 'Francesca',
    surname: 'Ferioli',
    alt: 'FrancescaFerioli',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg8'
  },
  {
    id: 9,
    name: 'Francesca',
    surname: 'Bellini',
    alt: 'FrancescaBellini',
    classNameSingleEl: 'carousel-profile-single-el picture-top',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg9'
  },
  {
    id: 10,
    name: 'Maria',
    surname: 'Amigo Rodrigez',
    alt: 'MariaAmigoRodrigez',
    classNameSingleEl: 'carousel-profile-single-el picture-middle',
    classNameBgImg: 'carousel-profile-picture carousel-profile-bg10'
  },
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
