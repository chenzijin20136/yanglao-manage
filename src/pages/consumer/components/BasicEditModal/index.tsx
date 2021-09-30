import { Modal, Form, Select, Button, Input, InputNumber } from 'antd';
import submitAllCustomer from '../../hooks/submitAllCustomer';

interface BasicEditModalProp{
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

const BasicEditModal = (props: BasicEditModalProp) => {
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
            title={'编辑基础信息'}
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
                    name='name'
                    label="姓名"
                    rules={[{
                        required: true,
                        message: '请输入姓名'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
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
                    name='years'
                    label="年龄"
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='phone'
                    label="本人电话"
                    rules={[{
                        required: true,
                        message: '请输入电话'
                    }]}
                >
                    <InputNumber placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <Form.Item
                    name='phone_tab'
                    label="通话标记"
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                    <   Option value='已派单'>已派单</Option>
                        <Option value='预约派单'>预约派单</Option>
                        <Option value='拒单'>拒单</Option>
                        <Option value='搬家'>搬家</Option>
                        <Option value='无人接听'>无人接听</Option>
                        <Option value='空号/停机'>空号/停机</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='address'
                    label="详细地址"
                    rules={[{
                        required: true,
                        message: '请输入详细地址'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='type'
                    label="类型"
                    rules={[{
                        required: true,
                        message: '请选择类型'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='高龄及计生'>高龄及计生</Option>
                        <Option value='低保'>低保</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="客户来源"
                    name="source"
                    initialValue={'政府客户'}
                >
                    <Select
                        placeholder='请选择'
                        style={{ width: 400 }}
                    >
                        <Option value='政府客户'>政府客户</Option>
                        <Option value='市场客户'>市场客户</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="客户标记"
                    name="sign"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 400 }}
                    >
                        <Option value='无'>无</Option>
                        <Option value='黑名单'>黑名单</Option>
                        <Option value='白名单'>白名单</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='done'
                    label="是否做过"
                    initialValue={'否'}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='ethnic'
                    label="民族"
                    rules={[{
                        required: true,
                        message: '请输入民族'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='province'
                    label="省份"
                    rules={[{
                        required: true,
                        message: '请输入省份'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='city'
                    label="城市"
                    rules={[{
                        required: true,
                        message: '请输入城市'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='county'
                    label="区"
                    rules={[{
                        required: true,
                        message: '请输入区'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='community'
                    label="社区（居委会、村委会）"
                    rules={[{
                        required: true,
                        message: '请输入社区（居委会、村委会）'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='street'
                    label="街道"
                    rules={[{
                        required: true,
                        message: '请输入街道'
                    }]}
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

export default BasicEditModal;