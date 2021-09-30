import { useCallback, useState} from 'react';
import { submit } from '@/services/order';
import { message } from 'antd';

function submitCallback() {
  const [loading, setLoading] = useState(false);

  const submitOption = useCallback(async (params: any) => {
    setLoading(true);
    const res: any = await submit(params);
    if(res.msg === '成功'){
        message.success('操作成功')
    }
    setLoading(false);
  }, []);

  return {
    loading,
    submitOption,
  };
}

export default submitCallback;
