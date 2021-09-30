import { Modal, Form, Select, Button, Input, InputNumber } from 'antd';
import submitAllCustomer from '../../hooks/submitAllCustomer';

interface PersonEditModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean;
    success: () => void;
}

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const PersonEditModal = (props: PersonEditModalProp) => {
    const { onCancel, data = {}, visible, success } = props;
    const { submit, loading } = submitAllCustomer();

    const onFinish = (values: any) => {
        let res = {};
        for(const key in values){
            if(values[key] !== undefined){
                res[key] = values[key]
            }
        }
        submit([{
            ...data,
            ...res
        }]).then(() => {
            onCancel();
            success();
        })
    }

    return (
        <Modal
            title={'编辑客户概况'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName="private-modal"
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={720}
        >
            <Form
                initialValues={data}
                labelAlign="left"
                onFinish={onFinish}
                {...layout}
            >
                <Form.Item
                    name='figure'
                    label="身材情况"
                    rules={[{
                        required: true,
                        message: '请选择身材情况'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='正常'>正常</Option>
                        <Option value='偏瘦'>偏瘦</Option>
                        <Option value='偏胖'>偏胖</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='complaints'
                    label="投诉/不满次数"
                    rules={[{
                        required: true,
                        message: '请输入投诉/不满次数'
                    }]}
                >
                    <InputNumber placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <div className={'modal-footer'}>
                    <Button onClick={onCancel}>
                        取消
                    </Button>
                    <Button htmlType="submit" type="primary" loading={loading}>
                        确认
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default PersonEditModal;