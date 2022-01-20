import Api from "../../services/Api";
import { setUserInfo } from "../ducks/UserInfo";
import { get } from 'lodash';
import { showError } from "../../utils/utilities";
// import {showError, showSuccess} from "../../utils/utilities";
import { setLoading } from "../ducks/Loading";
import { setLanguage } from "../ducks/Language";

export const doLogin = async (dispatch, data) => {
  try {
    const userInfo = await Api.login(data);
    // const userInfo = {"data":{"name":"Beije Consulting","username":"beije","token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWlqZSIsInJvbGUiOiJST0xFX1NZU1RFTV9JVCIsImNyZWF0ZWQiOjE2MzUzMjc5NDQwMDksImV4cCI6MTYzNTMzMzM0NH0.YGqJjngEe8i7sJ03EW_ZBPZPVEzs__m31YKbwXFkLjpyKCAGUWIcxGDP7eUam1xCDrEpTQ83xzvvVMSH_O1Isw"}};
    if (!userInfo.error) {
      dispatch(setUserInfo(userInfo.data));
      dispatch(setLanguage('GB')); // set default language
    } else {
      showError(get(userInfo, 'error.messageCode', 'ER000'));
    }
    return userInfo;
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const printCommunities = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const communities = await Api.getCommunities();
    if (communities.error) {
      showError(get(communities, 'error.messageCode', 'ER000'));
    }
    dispatch(setLoading(false));
    return communities;
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const printBlog = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const blog = await Api.getBlog();
    if (blog.error) {
      showError(get(blog, 'error.messageCode', 'ER000'));
    }
    dispatch(setLoading(false));
    return blog;
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const printCareer = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const careers = await Api.getCareer();
    if (careers.error) {
      showError(get(careers, 'error.messageCode', 'ER000'));
    }
    dispatch(setLoading(false));
    return careers;
  } catch (err) {
    // console.log('Error!', err);
  }
}


// Another api example
// export const saveSettings = async (dataToSave) => {
//   try {
//     let returnData;
//     dispatch(setLoading(true));
//     const saveResponse = await Api.saveSettings(dataToSave);
//     if (!saveResponse.error) {
//       showSuccess();
//       returnData = saveResponse;
//     } else {
//       showError(get(saveResponse, 'error.messageCode', 'ER000'));
//       returnData = saveResponse.error
//     }
//     dispatch(setLoading(false));
//     return returnData;
//   } catch (err) {
//     dispatch(setLoading(false));
//   }
// }