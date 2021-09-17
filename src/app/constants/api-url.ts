export const API_URL = {
  AUTH: {
    LOGIN: '/Account/Login',
    UPDATE_PASSWORD: '/ChangePassword',
    REGENERATETOKEN: '/Account/Regenerate',
    USERNAME: '/Account/UserName'
  },
  GET_FILES: '/ImportData/GetFiles',
  UPDATE_FILE_STATUS: '/ImportData/UpdateFileStatus',
  BILLING_SEARCH:'/ImportData/Search',
  BILLING_SRC_TYPE: '/ImportData/SourceType',
  VIEW_LOGS: '/ImportData/GetImportFileLogs',
  CUSTOMER: {
    GET_INDUSTRIES: '/Industry/GetIndustries',
    GET_ZIPCODE: '/Customer/Location',
    GET_SALESPERSON: '/AccountExec/GetSalesPersons',
    GET_CUSTOMER_TYPE: '/ProductProfile/GetProfiles',
    GET_PRODUCT_CATEGORY: '/ProductCategory/GetProductCategories',
    GET_CLASSIFICATION: '/Classification/GetClassifications',
    GET_PARENT_DATA: '/Customer/GetParentData',
    GET_ACC_MANAGERS: '/AccountManager/GetAccountManagers',
    GET_COLLECTOR_DATA: '/Customer/GetCollectorData'
  }
};
