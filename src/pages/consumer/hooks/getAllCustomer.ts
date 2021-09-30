import { useState, useEffect } from 'react';
import { getCustomerAll } from '@/services/customer';

function getAllCustomer(params: any) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getData = async (params: any) => {
    setLoading(true);
    const res = await getCustomerAll(params);
    setData(res?.data);
    setLoading(false);
  };

  const changeFilters = (filters: any) => {
    getData(filters);
  }

  useEffect(() => {
    getData(params);
  }, []);

  return {
    data,
    loading,
    getData,
    changeFilters
  };
}

export default getAllCustomer;
