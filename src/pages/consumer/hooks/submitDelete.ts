import { useCallback, useState} from 'react';
import { deleteCustomer } from '@/services/customer';
import { message } from 'antd';

function submitDelete() {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(async (id: string) => {
    setLoading(true);
    const res: any = await deleteCustomer(id);
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

export default submitDelete;
