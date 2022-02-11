import { get } from "./GenericServices";

const Blog = {
  getList: () => {
    return get("blogs");
  },
  getListDetail: (id) => {
    return get(`blog/${id}`);
  }
};

export default Blog;
