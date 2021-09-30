import { useState, useEffect } from 'react';
import { searchOrder } from '@/services/order';

function getAllOrder() {
  const [orderData, setOrderData] = useState<any>([]);
  const [totalhour, setTotalhour] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allOrderData, setAllOrderData] = useState([]);

  const getData = async (params?: any) => {
    setLoading(true);
    const res = await searchOrder(params);
    setOrderData(res?.data?.orders || []);
    setTotalhour(res?.data?.total_work_hours || 0);
    setLoading(false);
  };

  const getAllData = async (params?: any) => {
    setLoading(true);
    const res = await searchOrder(params);
    setOrderData(res?.data?.orders || []);
    setAllOrderData(res?.data?.orders || []);
    setTotalhour(res?.data?.total_work_hours || 0);
    setLoading(false);
  };

  const changeFilters = (filters: any) => {
    getData(filters);
  }

  useEffect(() => {
    getAllData({});
  }, []);

  return {
    allOrderData,
    orderData,
    totalhour,
    loading,
    getData,
    changeFilters
  };
}

export default getAllOrder;