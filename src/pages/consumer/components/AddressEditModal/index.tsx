import { Modal, Form, Select, Button, Input } from 'antd';
import submitAllCustomer from '../../hooks/submitAllCustomer';

interface AddressEditModalProp{
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

const AddressEditModal = (props: AddressEditModalProp) => {
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
            title={'编辑居住信息'}
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
                    name='old_address'
                    label="原有地址"
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='old_address_type'
                    label="原有地址居住类型"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='独居'>独居</Option>
                        <Option value='配偶合居'>配偶合居</Option>
                        <Option value='子女合居'>子女合居</Option>
                        <Option value='其它'>其它</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='now_address'
                    label="现居地址"
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='now_address_type'
                    label="现居地址居住类型"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='独居'>独居</Option>
                        <Option value='配偶合居'>配偶合居</Option>
                        <Option value='子女合居'>子女合居</Option>
                        <Option value='其它'>其它</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='living_space'
                    label="住房面积"
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
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

export default AddressEditModal;