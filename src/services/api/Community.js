import { get } from "./GenericServices";

const Community = {
  getList: () => {
    return get("list");
  },
  getListDetail: (id) => {
    return get(`detail/${id}`);
  }
};

export default Community;
