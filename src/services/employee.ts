import request from '@/utils/request';

// 查询所有员工
export function getEmployeeList(params?: any) {
    return params?.complainedCount !== undefined ? request.post(`/dev/api/employee/get/all?complainedCount=${params.complainedCount}`, params) : request.post('/dev/api/employee/get/all');
}

// 新增员工
export function opitionCustomer(params: any){
    return request.post('/dev/api/employee/upsert', params);
}