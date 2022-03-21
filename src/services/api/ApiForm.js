import { post } from "../GenericServices";

const ApiForm = {
  sendForm: (value) => {
    return post("form", value);
  }
};

export default ApiForm;
