import { Modal, Form } from 'antd';

interface CallbackModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean;
}

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 }
};

const CallbackDetailModal = (props: CallbackModalProp) => {
    const { onCancel, data = {}, visible } = props;

    return (
        <Modal
            title={'回访详情'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName="private-modal"
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={520}
        >
            <Form
                initialValues={data}
                labelAlign="left"
                {...layout}
            >
                <Form.Item
                    name='customer_name'
                    label="客户名称"
                    required={true}
                >
                    {data.customer_name}
                </Form.Item>
                <Form.Item
                    name='employee_name'
                    label="服务人员"
                    required={true}
                >
                    {data.employee_name}
                </Form.Item>
                <Form.Item
                    name='service_type'
                    label="服务项目"
                    required={true}
                >
                    {data.service_type}
                </Form.Item>
                <Form.Item
                    name='type'
                    label="回访方式"
                    required={true}
                >
                    {data.type}
                </Form.Item>
                <Form.Item
                    name='done'
                    label="服务项目是否完成"
                    required={true}
                >
                    {data.done ? '是' : '否'}
                </Form.Item>
                <Form.Item
                    name='quality_rank'
                    label="服务质量"
                    required={true}
                >
                    {data.quality_rank}
                </Form.Item>
                <Form.Item
                    name='evaluate'
                    label="综合评价"
                    required={true}
                >
                    {data.evaluate}
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CallbackDetailModal;