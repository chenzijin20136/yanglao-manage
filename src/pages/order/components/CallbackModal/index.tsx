import { Modal, Form, Select, Button, Input } from 'antd';
import submitCallback from '../../hooks/submitCallback';

interface CallbackModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean;
    success: () => void;
}

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};
const complaintType = {
    'yes': true,
    'no': false
}

const CallbackModal = (props: CallbackModalProp) => {
    const { onCancel, data = {}, visible, success } = props;
    const { submitOption, loading } = submitCallback()

    const onFinish = (values: any) => {
        const params = {
            ...data,
            ...values,
            done: complaintType[values.done]
        }
        submitOption(params).then(() => {
            onCancel();
            success()
        })
    }

    return (
        <Modal
            title={'编辑回访信息'}
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
                    rules={[{
                        required: true,
                        message: '请选择回访方式'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='电话回访'>电话回访</Option>
                        <Option value='上门回访'>上门回访</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='done'
                    label="服务项目是否完成"
                    rules={[{
                        required: true,
                        message: '请选择服务项目是否完成'
                    }]}
                    initialValue={'yes'}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='yes'>是</Option>
                        <Option value='no'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='quality_rank'
                    label="服务质量"
                    rules={[{
                        required: true,
                        message: '请选择服务质量'
                    }]}
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
                    rules={[{
                        required: true,
                        message: '请输入综合评价'
                    }]}
                >
                    <TextArea placeholder='请输入' style={{ width: 400 }} allowClear rows={2}/>
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

export default CallbackModal;