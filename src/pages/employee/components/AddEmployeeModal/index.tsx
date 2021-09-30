import { Modal, Form, Select, Button, Input, InputNumber } from 'antd';
import addEmployee from '../../hooks/addEmployee';

interface AddEmployeeModalProp{
    onCancel: () => void;
    visible: boolean;
    success: () => void;
}

const { Option } = Select;

const filterObj = (obj: {}) => {
    let res = {};
    for(const key in obj){
        if(obj[key] !== undefined && obj[key] !== null){
            res[key] = obj[key]
        }
    }
    return res
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const AddEmployeeModal = (props: AddEmployeeModalProp) => {
    const { onCancel, visible, success } = props;
    const { submit, loading } = addEmployee();

    const onFinish = (values: any) => {
        submit(filterObj(values)).then(() => {
            onCancel();
            success()
        })
    }

    return (
        <Modal
            title={'添加员工'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName="private-modal"
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={720}
        >
            <Form
                labelAlign="left"
                onFinish={onFinish}
                {...layout}
            >
                <Form.Item
                    name='name'
                    label="姓名"
                    rules={[{
                        required: true,
                        message: '请输入姓名'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <Form.Item
                    name='sex'
                    label="性别"
                    rules={[{
                        required: true,
                        message: '请选择性别'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='男'>男</Option>
                        <Option value='女'>女</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='phone'
                    label="电话"
                    rules={[{
                        required: true,
                        message: '请输入电话'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <Form.Item
                    name='complained_count'
                    label="被投诉次数"
                    initialValue={0}
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

export default AddEmployeeModal;