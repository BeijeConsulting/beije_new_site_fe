import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: (lang) => {
    return get(`blogs/order_date/desc/${lang}`);
  },
  blog_getListDetail: (permalink) => {
    return get(`blog/${permalink}`);
  },

  career_getList: () => {
    return get(`job_applications`);
  },
  career_getListDetail: (id, lang) => {
    return get(`job_application/${id}/${lang}`);
  },

  form_sendForm: (value) => {
    return post("form", value);
  },

  popup_message: () => {
    return get(`academy`)
  },

  caseStudies_getList: (lang, type) => {
    return get(`casestudies/${type}/${lang}`);
  },
  caseStudies_getListDetail: (permalink, type) => {
    return get(`casestudy/permalink/${type}/${permalink}`);
  },

  community_getList: (lang) => {
    return get(`events/order_time/desc/${lang}`);
  },
  community_getListDetail: (permalink) => {
    return get(`event/${permalink}`);
  },

  team_getList: () => {
    return get('team/users')
  },

  carouselProfile_getList: (lang) => {
    return get(`chi_siamo/language/${lang}`)
  }
}
export default ApiCalls

