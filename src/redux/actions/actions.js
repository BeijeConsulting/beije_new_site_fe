import Api from "../../services/Api";
import {setUserInfo} from "../ducks/UserInfo";
import {get} from 'lodash';
import {showError, showSuccess} from "../../utils/utilities";
import {setLoading} from "../ducks/Loading";
import {setLanguage} from "../ducks/Language";

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

export const getSettings = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const settings = await Api.getSettings();
    dispatch(setLoading(false));
    if (!settings.error) {
      return settings;
    } else {
      showError(get(settings, 'error.messageCode', 'ER000'));
      return settings.error
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err)
  }
}

export const saveSettings = async (daysNumber) => {
  try {
    const saveResponse = await Api.saveSettings(daysNumber);
    if (!saveResponse.error) {
      showSuccess();
      return saveResponse;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error
    }
  } catch (err) {
    // console.log('Error!', err)
  }
}

export const getJobsList = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const jobsList = await Api.getJobsList();
    dispatch(setLoading(false));
    if (!jobsList.error) {
      return jobsList;
    } else {
      showError(get(jobsList, 'error.messageCode', 'ER000'));
      return jobsList.error
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err)
  }
}

export const executeJob = async (job) => {
  try {
    const executed = await Api.executeJob(job);
    if (!executed.error) {
      showSuccess(executed);
      return executed;
    } else {
      showError(get(executed, 'error.messageCode', 'ER000'));
      return executed.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getProductCategories = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const productCategories = await Api.productCategories(queryString);
    dispatch(setLoading(false));
    if (!productCategories.error) {
      return productCategories;
    } else {
      showError(get(productCategories, 'error.messageCode', 'ER000'));
      return productCategories.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const getProductCategoryDetail = async (id) => {
  try {
    const productCategoryDetail = await Api.productDetail(id);
    if (!productCategoryDetail.error) {
      return productCategoryDetail;
    } else {
      showError(get(productCategoryDetail, 'error.messageCode', 'ER000'));
      return productCategoryDetail.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const saveProductCategory = async (data) => {
  try {
    const saveResponse = await Api.saveProductCategory(data);
    if (!saveResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const deleteProductCategory = async (id) => {
  try {
    const deleteResponse = await Api.deleteProductCategory(id);
    if (!deleteResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(deleteResponse, 'error.messageCode', 'ER000'));
      return deleteResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getUserSuppliersList = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const userSuppliersList = await Api.getUserSuppliers(queryString);
    dispatch(setLoading(false));
    if (!userSuppliersList.error) {
      return userSuppliersList;
    } else {
      showError(get(userSuppliersList, 'error.messageCode', 'ER000'));
      return userSuppliersList.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const saveUserSupplier = async (data) => {
  try {
    const saveUserSupplierResponse = await Api.saveUserSupplier(data);
    if (!saveUserSupplierResponse.error) {
      showSuccess()
      return saveUserSupplierResponse;
    } else {
      showError(get(saveUserSupplierResponse, 'error.messageCode', 'ER000'));
      return saveUserSupplierResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getSuppliersWithoutUser = async (queryString) => {
  try {
    const suppliersWithoutUser = await Api.getSuppliersWithoutUser(queryString);
    if (!suppliersWithoutUser.error) {
      return suppliersWithoutUser;
    } else {
      showError(get(suppliersWithoutUser, 'error.messageCode', 'ER000'));
      return suppliersWithoutUser.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getUsersInternalList = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const usersInternalList = await Api.getUsersInternalList(queryString);
    dispatch(setLoading(false));
    if (!usersInternalList.error) {
      return usersInternalList;
    } else {
      showError(get(usersInternalList, 'error.messageCode', 'ER000'));
      return usersInternalList.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const saveInternalUser = async (data, dispatch) => {
  dispatch(setLoading(true));
  try {
    const saveResponse = await Api.saveInternalUser(data);
    dispatch(setLoading(false));
    if (!saveResponse.error) {
      showSuccess();
      return saveResponse;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getUserDataFromAD = async (username, dispatch) => {
  dispatch(setLoading(true));
  try {
    const activeDirectoryUserData = await Api.getUserDataFromActiveDirectory(username);
    dispatch(setLoading(false));
    if (!activeDirectoryUserData.error) {
      return activeDirectoryUserData;
    } else {
      showError(get(activeDirectoryUserData, 'error.messageCode', 'ER000'));
      return activeDirectoryUserData.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getUserDataByUsername = async (username, dispatch) => {
  dispatch(setLoading(true));
  try {
    const internalUserData = await Api.getUserData(username);
    dispatch(setLoading(false));
    if (!internalUserData.error) {
      return internalUserData;
    } else {
      showError(get(internalUserData, 'error.messageCode', 'ER000'));
      return internalUserData.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const listCostCenters = async (queryString, dispatch) => {
  if (dispatch) {
    dispatch(setLoading(true));
  }
  try {
    const costCenters = await Api.costCentre(queryString);
    if (dispatch) {
      dispatch(setLoading(false));
    }
    if (!costCenters.error) {
      return costCenters;
    } else {
      showError(get(costCenters, 'error.messageCode', 'ER000'));
      return costCenters.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const saveCostCentre = async (data) => {
  try {
    const saveResponse = await Api.saveCostCentre(data);
    if (!saveResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getCostCentre = async (id) => {
  try {
    const costCenter = await Api.getCostCentre(id);
    if (!costCenter.error) {
      return costCenter;
    } else {
      showError(get(costCenter, 'error.messageCode', 'ER000'));
      return costCenter.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const deleteCostCentre = async (id) => {
  try {
    const deleteResponse = await Api.deleteCostCentre(id);
    if (!deleteResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(deleteResponse, 'error.messageCode', 'ER000'));
      return deleteResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const listProjects = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const projects = await Api.listProject(queryString);
    dispatch(setLoading(false));
    if (!projects.error) {
      return projects;
    } else {
      showError(get(projects, 'error.messageCode', 'ER000'));
      return projects.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const saveProject = async (data) => {
  try {
    const saveResponse = await Api.saveProject(data);
    if (!saveResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getProject = async (id, dispatch) => {
  dispatch(setLoading(true));
  try {
    const project = await Api.getProject(id);
    dispatch(setLoading(false));
    if (!project.error) {
      return project;
    } else {
      showError(get(project, 'error.messageCode', 'ER000'));
      return project.error;
    }
  } catch (err) {
    // console.log('Error!', err);
    dispatch(setLoading(false));
  }
}

export const listSupportPm = async () => {
  try {
    const listResponse = await Api.listSupportPm();
    if (!listResponse.error) {
      return listResponse;
    } else {
      showError(get(listResponse, 'error.messageCode', 'ER000'));
      return listResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getOdaAllocationSuppliersList = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const ODASuppliers = await Api.listOdaAllocationSuppliers(queryString);
    dispatch(setLoading(false));
    if (!ODASuppliers.error) {
      return ODASuppliers;
    } else {
      showError(get(ODASuppliers, 'error.messageCode', 'ER000'));
      return ODASuppliers.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const listOrders = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const orders = await Api.listOrders(queryString);
    dispatch(setLoading(false));
    if (!orders.error) {
      return orders;
    } else {
      showError(get(orders, 'error.messageCode', 'ER000'));
      return orders.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const getOdaCostCentersByUser = async () => {
  try {
    const ODACostCenters = await Api.listOdaCostCentersByUser();
    if (!ODACostCenters.error) {
      return ODACostCenters;
    } else {
      showError(get(ODACostCenters, 'error.messageCode', 'ER000'));
      return ODACostCenters.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getOdaBySupplierId = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const ODAList = await Api.listOdaBySupplierId(queryString);
    dispatch(setLoading(false));
    if (!ODAList.error) {
      return ODAList;
    } else {
      showError(get(ODAList, 'error.messageCode', 'ER000'));
      return ODAList.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const listTasks = async (id, dispatch) => {
  dispatch(setLoading(true));
  try {
    const tasks = await Api.listTasks(id);
    dispatch(setLoading(false));
    if (!tasks.error) {
      return tasks;
    } else {
      showError(get(tasks, 'error.messageCode', 'ER000'));
      return tasks.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const getOdaProjectTasksByOdaId = async (odaId, dispatch) => {
  dispatch(setLoading(true));
  try {
    const projectTasks = await Api.listOdaProjectsByOderId(odaId);
    dispatch(setLoading(false));
    if (!projectTasks.error) {
      return projectTasks;
    } else {
      showError(get(projectTasks, 'error.messageCode', 'ER000'));
      return projectTasks.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const enableOdaProjectTask = async (data) => {
  try {
    const updateResponse = await Api.updateOdaProjectTaskEnabled(data);
    if (!updateResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(updateResponse, 'error.messageCode', 'ER000'));
      return updateResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getOdaProjectsList = async (queryString) => {
  try {
    const projectsList = await Api.listOdaProjects(queryString);
    if (!projectsList.error) {
      return projectsList;
    } else {
      return projectsList.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getOdaProjectsTaskList = async (queryString) => {
  try {
    const projectsTaskList = await Api.listOdaProjectsTask(queryString);
    if (!projectsTaskList.error) {
      return projectsTaskList;
    } else {
      return projectsTaskList.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const saveNewOdaProjectTask = async (data) => {
  try {
    const saveResponse = await Api.saveNewOda(data);
    if (!saveResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const saveOrder = async (data) => {
  try {
    const saveResponse = await Api.saveOrder(data);
    if (!saveResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const deleteOdaProjectTaskInvoice = async (id) => {
  try {
    const deleteResponse = await Api.deleteOdaProjectTask(id);
    if (!deleteResponse.error) {
      showSuccess();
      return true;
    } else {
      showError(get(deleteResponse, 'error.messageCode', 'ER000'));
      return deleteResponse.error;
    }
  } catch (err) {
    // console.log('Error!', err);
  }
}

export const getSalApprovalSuppliersList = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const suppliersList = await Api.salApprovalSuppliers(queryString);
    dispatch(setLoading(false));
    if (!suppliersList.error) {
      return suppliersList;
    } else {
      return suppliersList.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const getSalOdaListBySupplierId = async (supplierId, dispatch) => {
  dispatch(setLoading(true));
  try {
    const suppliersList = await Api.salApprovalOdaBySupplier(supplierId);
    dispatch(setLoading(false));
    if (!suppliersList.error) {
      return suppliersList;
    } else {
      return suppliersList.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const getSalProjectTasksOrder = async (orderId, dispatch) => {
  dispatch(setLoading(true));
  try {
    const projectTasksOrder = await Api.salApprovalProjectTasksOrder(orderId);
    dispatch(setLoading(false));
    if (!projectTasksOrder.error) {
      return projectTasksOrder;
    } else {
      return projectTasksOrder.error;
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err);
  }
}

export const confirmSal = async (data, dispatch) => {
  dispatch(setLoading(true));
  try {
    const saveResponse = await Api.salApprovalConfirm(data);
    dispatch(setLoading(false));
    if (!saveResponse.error) {
      showSuccess();
      return saveResponse;
    } else {
      showError(get(saveResponse, 'error.messageCode', 'ER000'));
      return saveResponse.error
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err)
  }
}

export const loginMasterUser = async (queryString, dispatch) => {
  dispatch(setLoading(true));
  try {
    const loginMasterUserResponse = await Api.loginMasterUser(queryString);
    dispatch(setLoading(false));
    if (!loginMasterUserResponse.error) {
      return loginMasterUserResponse;
    } else {
      showError(get(loginMasterUserResponse, 'error.messageCode', 'ER000'));
      return loginMasterUserResponse.error
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err)
  }
}

export const changeUser = async (username, dispatch) => {
  dispatch(setLoading(true));
  try {
    const changeUserResponse = await Api.changeUser(username);
    dispatch(setLoading(false));
    if (!changeUserResponse.error) {
      dispatch(setUserInfo(changeUserResponse.data));
      return true;
    } else {
      showError(get(changeUserResponse, 'error.messageCode', 'ER000'));
      return changeUserResponse.error
    }
  } catch (err) {
    dispatch(setLoading(false));
    // console.log('Error!', err)
  }
}
