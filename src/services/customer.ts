import request from '@/utils/request';

// 查询所有客户
export function getCustomerAll(params: any) {
    return request.post('/dev/api/customer/get/all', params);
}

// 新增、编辑客户
export function opitionCustomer(params: any){
    return request.post('/dev/api/customer/upsert', params);
}

// 添加积分
export function addScore(params: any) {
    return request.post('/dev/api/customer/add/score', params)
}

// 删除客户
export function deleteCustomer(id: string){
    return request.delete(`/dev/api/customer/id/${id}`)
}