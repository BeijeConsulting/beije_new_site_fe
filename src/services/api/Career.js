import { get } from "./GenericServices";

const Career = {
  getList: () => {
    return get("job_applications");
  },
  getListDetail: (id) => {
    return get(`job_application/${id}`);
  }
};

export default Career;
