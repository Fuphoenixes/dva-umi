import request from '../utils/request';

export const branchList = data => request({ url:'/cool-system/org/query/branch/list', method: 'GET', data });



