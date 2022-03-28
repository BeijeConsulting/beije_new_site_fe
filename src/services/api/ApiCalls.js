import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: (lang) => {
    return get(`blogs/${lang}`);
  },
  blog_getListDetail: (permalink) => {
    return get(`blog/${permalink}`);
  },

  career_getList: (lang) => {
    return get(`job_applications/${lang}`);
  },
  career_getListDetail: (permalink) => {
    return get(`job_application/${permalink}`);
  },

  form_sendForm: (value) => {
    return post("form", value);
  },

  caseStudies_getList: (lang) => {
    return get(`casestudies/${lang}`);
  },
  caseStudies_getListDetail: (permalink) => {
    return get(`casestudy/permalink/${permalink}`);
  },

  community_getList: (lang) => {
    return get(`communityL/${lang}`);
  },
  community_getListDetail: (permalink) => {
    return get(`community/${permalink}`);
  }
}
export default ApiCalls

