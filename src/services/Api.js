/**
 * !!! Important. Now api are mocked here: https://mockapi.io/projects/618be0ccded7fb0017bb929f
 * when you use right apis, remove this comment
 */
// import {deleteApi, get, post} from './GenericServices';
import {post} from './GenericServices';

const Api = {
  login: (data) => {
    return post('auth', data);
  }
};

export default Api;
