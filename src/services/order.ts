import request from '@/utils/request';

// 提交回访
export function submit(params: any) {
    return request.post('/dev/api/order/callback/submit', params);
}

// 派单
export function makeOrder(params: any){
    return request.post('/dev/api/order/make/service', params);
}

// 搜索派单
export function searchOrder(params: any) {
    return request.post('/dev/api/order/search', params)
}