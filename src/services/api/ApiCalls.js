import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: (lang) => {
    return get(`blogs/ordered/${lang}`);
  },
  blog_getListDetail: (permalink) => {
    return get(`blogs/${permalink}`);
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

  alert_message: () => {
    return get(`academy/show_alert`)
  },

  academies_getList: (headers = {}) => {
    console.log(headers);
    return get(`academies`, {}, headers)
  },

  caseStudies_getList: (lang, type) => {
    return get(`case-studies/${type}/${lang}`);
  },

  caseStudies_getListDetail: (permalink) => {
    return get(`case-studies/permalink/${permalink}`);
  },

  // caseStudies_getListDetail: (id, lang) => {
  //   return get(`case-studies/${id}/${lang}`);
  // },

  community_getList: (lang) => {
    return get(`events/ordered/${lang}`);
  },
  community_getListDetail: (permalink) => {
    return get(`events/${permalink}`);
  },

  team_getList: () => {
    return get('team/users')
  },

  carouselProfile_getList: (lang) => {
    return get(`chi_siamo/ordered/${lang}`)
  }
}
export default ApiCalls

