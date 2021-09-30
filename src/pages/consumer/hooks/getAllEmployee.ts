import { useState, useEffect } from 'react';
import { getEmployeeList } from '@/services/employee';

function getAllEmployee() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await getEmployeeList();
    setData(res?.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    getData,
  };
}

export default getAllEmployee;
