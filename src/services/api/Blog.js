import { get } from "./GenericServices";

const Blog = {
  getList: () => {
    return get("list");
  },
  getListDetail: (id) => {
    return get(`detail/${id}`);
  }
};

export default Blog;
