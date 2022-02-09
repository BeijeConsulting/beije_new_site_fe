import { get } from "./GenericServices";

const Career = {
  getList: () => {
    return get("list");
  },
  getListDetail: (id) => {
    return get(`detail/${id}`);
  }
};

export default Career;
