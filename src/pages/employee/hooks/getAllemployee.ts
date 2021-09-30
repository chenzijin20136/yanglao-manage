import { useState, useEffect } from 'react';
import { getEmployeeList } from '@/services/employee';

function getAllemployee() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [complainedCount, setComplainedCount] = useState<any>([]);

  const getData = async (params?: any) => {
    setLoading(true);
    const res = await getEmployeeList(params);
    setData(res?.data || []);
    setLoading(false);
  };

  const getAllData = async () => {
    setLoading(true);
    const res = await getEmployeeList();
    setComplainedCount([...new Set((res?.data || []).map((item: any) => item.complained_count))]);
    setData(res?.data || []);
    setLoading(false);
  };

  const changeFilters = (filters: any) => {
    getData(filters);
  }

  useEffect(() => {
    getAllData();
  }, []);

  return {
    data,
    complainedCount,
    loading,
    getData,
    changeFilters
  };
}

export default getAllemployee;
