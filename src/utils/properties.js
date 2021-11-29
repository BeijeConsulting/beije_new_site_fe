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
    key: 'whoWeAre',
    typeMenu: 'primary',
    title: 'whoWeAre',
    titleStyle: 'burger-menu-title txt-light',
    titleStyleHover: 'burger-menu-title txt-light2',
    linkTo: 'https://www.google.it/'
  },
  {
    key: 'contacts',
    typeMenu: 'primary',
    title: 'contacts',
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
  }
]

export const cardWhoWeAre = [
  {
    cardClassName: 'container-column width-100 height-100 justify-center',
    titleLevel: 1,
    classNameSquare: 'sec-section-square',
    cardTitle: 'title_value',
    titleClassName: 'sec-section-title'
  },
  {
    cardClassName: 'container-column width-100 height-100 justify-center',
    titleLevel: 1,
    classNameSquare: 'sec-section-square',
    cardTitle: 'title_history',
    titleClassName: 'sec-section-title'
  },
  {
    cardClassName: 'container-column width-100 height-100 justify-center',
    titleLevel: 1,
    classNameSquare: 'sec-section-square',
    cardTitle: 'title_mission',
    titleClassName: 'sec-section-title'
  }
]


/*
const blog = [
  {
    id: 1,
    title: 'title news',
    subtitle: 'subtitle news',
    mediaBg: 'image.jpg o video.mp4',
    description: 'long paragraph',
    articleMedia: [
      {
        id: 1,
        media: 'image.jpg o video.mp4'
      },
      {
        id: 2,
        media: 'image.jpg o video.mp4'
      },
      {
        id: 3,
        media: 'vimage.jpg o video.mp4'
      }
    ],
    hashtags: ['learn', 'beije', 'together'],
    permalink: 'titolo-news' //parte finale dell'url univoca
  }
]
*/

//almeno un titolo ita e en 
// hashtags ita o en?
//oggetto con due sotto-oggetti italiano e inglese

/*
const COMMUNITY = [
  {
    id: 1,
    title: 'title news',
    mediaBg: 'image.jpg o video.mp4',
    description: 'long paragraph',
    permalink: 'titolo-news' //parte finale dell'url univoca
  }
]
*/

/*
const JOB_APPLICATION = [
  {
    id: 1,
    title: 'react developer', //string
    type: 'frontend', //string
    mode: 'remoto', //string
    academy: true, //bool - indica se la posizione è per academy o lavorativa
    description: '<p>Long description</p>', //long string
    date_creation: '2021-11-24', //date
    permalink: 'titolo-news' //parte finale dell'url univoca
  },
  {
    id: 2,
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

