import { get, post } from "../GenericServices";

const ApiCalls = {
  blog_getList: () => {
    return get("blogs");
  },
  blog_getListDetail: (id) => {
    return get(`blog/${id}`);
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

  community_getList: () => {
    return get("communities");
  },
  community_getListDetail: (id) => {
    return get(`community/${id}`);
  }
}
export default ApiCalls

