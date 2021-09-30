import { Modal, Form, Select, Button, Input } from 'antd';

interface CallbackModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean
}

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const CallbackModal = (props: CallbackModalProp) => {
    const { onCancel, data = {}, visible } = props;

    const onFinish = (values: any) => {
        console.log('values', values)
    }

    return (
        <Modal
            title={'编辑回访栏'}
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
                    name='order'
                    label="派单信息"
                    rules={[{
                        required: true,
                        message: '请选择派单信息'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='第一次派单'>第一次派单</Option>
                        <Option value='第二次派单'>上门第二次派单回访</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='employee'
                    label="服务人员"
                >
                    {'员工1'}
                </Form.Item>
                <Form.Item
                    name='item'
                    label="服务项目"
                >
                    {'按摩'}
                </Form.Item>
                <Form.Item
                    name='callbackType'
                    label="回访方式"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='电话回访'>电话回访</Option>
                        <Option value='上门回访'>上门回访</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='callbackisDone'
                    label="服务项目是否完成"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='quality'
                    label="服务质量"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='满意'>满意</Option>
                        <Option value='一般'>一般</Option>
                        <Option value='不满意'>不满意</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='evaluate'
                    label="综合评价"
                >
                    <TextArea placeholder='请输入' style={{ width: 400 }} allowClear rows={2}/>
                </Form.Item>
                <div className={'modal-footer'}>
                    <Button onClick={onCancel}>
                        取消
                    </Button>
                    <Button htmlType="submit" type="primary">
                        确认
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default CallbackModal;