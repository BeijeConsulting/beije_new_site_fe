import 'moment/locale/en-gb';
import 'moment/locale/it';
import localeGB from 'antd/es/date-picker/locale/en_GB';
import localeIT from 'antd/es/date-picker/locale/it_IT';

//Icon for social
import icon_facebook from '../assets/icons/social_icon/f_facebook_dark.png'
import icon_instagram from '../assets/icons/social_icon/in_instagram_dark.png'
import icon_youTube from '../assets/icons/social_icon/youtube_dark.png'


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
    title: 'CONSULTING',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'academy',
    typeMenu: 'primary',
    title: 'ACADEMY',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'up',
    typeMenu: 'primary',
    title: 'UP',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'career',
    typeMenu: 'primary',
    title: 'CAREER',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'whoWeAre',
    typeMenu: 'primary',
    title: 'CHI SIAMO',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'contacts',
    typeMenu: 'primary',
    title: 'CONTATTI',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'blog',
    typeMenu: 'secondary',
    title: 'BLOG',
    titleStyle: 'burger-menu-title2 txt-light',
    titleStyleHover: 'burger-menu-title2 txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'community',
    typeMenu: 'secondary',
    title: 'COMMUNITY',
    titleStyle: 'burger-menu-title2 txt-light',
    titleStyleHover: 'burger-menu-title2 txt-light2',
    linkTo: 'https://www.google.it/'
  }
]


// const blog = [
//   {
//     id: 1,
//     title: 'title news',
//     subtitle: 'subtitle news',
//     mediaBg: 'image.jpg o video.mp4',
//     description: 'long paragraph',
//     articleMedia: [
//       {
//         id: 1,
//         media: 'image.jpg o video.mp4'
//       },
//       {
//         id: 2,
//         media: 'image.jpg o video.mp4'
//       },
//       {
//         id: 3,
//         media: 'vimage.jpg o video.mp4'
//       }
//     ],
//     hashtags: ['learn', 'beije', 'together']
//   }
// ]




// const COMMUNITY = [
//   {
//     id: 1,
//     title: 'title news',
//     mediaBg: 'image.jpg o video.mp4',
//     description: 'long paragraph'
//   }
// ]



// const JOB_APPLICATION = [
//   {
//     id: 1,
//     title: 'react developer', //string
//     type: 'frontend', //string
//     mode: 'remoto', //string
//     academy: true, //bool - indica se la posizione è per academy o lavorativa
//     date_creation: '2021-11-24' //date
//   },
//   {
//     id: 2,
//     title: 'java developer', //string
//     type: 'backend', //string
//     mode: 'milano', //string
//     academy: true, //bool - indica se la posizione è per academy o lavorativa
//     date_creation: '2021-11-24' //date
//   },
// ]


