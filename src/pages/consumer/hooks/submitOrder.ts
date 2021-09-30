import { useCallback, useState} from 'react';
import { makeOrder } from '@/services/order';
import { message } from 'antd';

function submitOrder() {
  const [loading, setLoading] = useState(false);

  const submit = useCallback(async (params: any) => {
    setLoading(true);
    const res: any = await makeOrder(params);
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

export default submitOrder;
