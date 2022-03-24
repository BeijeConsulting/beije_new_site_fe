import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: (lang) => {
    return get(`blogs/${lang}`);
  },
  blog_getListDetail: (permalink) => {
    return get(`blog/${permalink}`);
  },

  career_getList: () => {
    return get("job_applications");
  },
  career_getListDetail: (id) => {
    return get(`job_application/${id}`);
  },

  form_sendForm: (value) => {
    return post("form", value);
  },

  caseStudies_getList: () => {
    return get("casestudies");
  },
  caseStudies_getListDetail: (id) => {
    return get(`case_study/${id}`);
  },

  community_getList: (lang) => {
    return get(`communityL/${lang}`);
  },
  community_getListDetail: (id) => {
    return get(`community/${id}`);
  }
}
export default ApiCalls

