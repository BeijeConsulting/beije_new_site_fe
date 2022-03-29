import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: (lang) => {
    return get(`blogs/${lang}`);
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

