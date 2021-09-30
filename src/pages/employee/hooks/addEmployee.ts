import { useCallback, useState} from 'react';
import { opitionCustomer } from '@/services/employee';
import { message } from 'antd';

function addEmployee() {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(async (params: any) => {
    setLoading(true);
    const res: any = await opitionCustomer(params);
    if(res.msg === '成功'){
        message.success('操作成功')
    }
    setLoading(false);
  }, []);

  return {
    loading,
    submit,
  };
}

export default addEmployee;
