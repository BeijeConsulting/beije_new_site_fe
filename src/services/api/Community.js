import { get } from "./GenericServices";

const Community = {
  getList: () => {
    return get("communities");
  },
  getListDetail: (id) => {
    return get(`community/${id}`);
  }
};

export default Community;
