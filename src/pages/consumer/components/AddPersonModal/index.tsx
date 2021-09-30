import { Modal, Form, Select, Button, Input, InputNumber } from 'antd';

import submitAllCustomer from '../../hooks/submitAllCustomer';

interface AddPersonModalProp{
    onCancel: () => void;
    visible: boolean;
    success: () => void;
    allName: string[]
}

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const AddPersonModal = (props: AddPersonModalProp) => {
    const { onCancel, visible, success, allName } = props;
    const { submit, loading } = submitAllCustomer();

    const checkName = (_: any, value: string, callback: Function) => {
        console.log('allName.indexOf(value) >= -1', allName.includes(value))
        if (!value) {
            callback('请输入姓名');
        } else if (allName.includes(value)) {
            
            callback('该客户已存在，请勿重新添加');
        } else {
            callback();
        }
    };

    const onFinish = (values: any) => {
        submit([values]);
        onCancel();
        success();
    }

    return (
        <Modal
            title={'添加客户'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName='add-screen-modal'
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={1000}
        >
            <Form
                labelAlign="left"
                onFinish={onFinish}
                {...layout}
            >
                <Form.Item
                    name='name'
                    label="姓名"
                    required={true}
                    rules={[{
                        validator: checkName
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='sex'
                    label="性别"
                    rules={[{
                        required: true,
                        message: '请选择性别'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='男'>男</Option>
                        <Option value='女'>女</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='phone'
                    label="本人电话"
                    rules={[{
                        required: true,
                        message: '请输入电话'
                    }]}
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
                </Form.Item>
                <Form.Item
                    name='current_score'
                    label="当前积分"
                    rules={[{
                        required: true,
                        message: '请输入当前积分'
                    }]}
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
                </Form.Item>
                <Form.Item
                    name='phone_tab'
                    label="通话标记"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='已派单'>已派单</Option>
                        <Option value='预约派单'>预约派单</Option>
                        <Option value='拒单'>拒单</Option>
                        <Option value='搬家'>搬家</Option>
                        <Option value='无人接听'>无人接听</Option>
                        <Option value='空号/停机'>空号/停机</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='type'
                    label="类型"
                    rules={[{
                        required: true,
                        message: '请选择类型'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
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
                        style={{ width: 500 }}
                    >
                        <Option value='政府客户'>政府客户</Option>
                        <Option value='市场客户'>市场客户</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='ethnic'
                    label="民族"
                    rules={[{
                        required: true,
                        message: '请输入民族'
                    }]}
                    initialValue={'汉族'}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='province'
                    label="省份"
                    rules={[{
                        required: true,
                        message: '请输入省份'
                    }]}
                    initialValue={'四川省'}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='city'
                    label="城市"
                    rules={[{
                        required: true,
                        message: '请输入城市'
                    }]}
                    initialValue={'成都市'}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='county'
                    label="区"
                    rules={[{
                        required: true,
                        message: '请输入区'
                    }]}
                    initialValue={'青羊区'}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='community'
                    label="社区（居委会、村委会）"
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='street'
                    label="街道"
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='address'
                    label="详细地址"
                    rules={[{
                        required: true,
                        message: '请输入详细地址'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='done'
                    label="是否做过"
                    initialValue={'否'}
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='spouse_name'
                    label="配偶姓名"
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='spouse_phone'
                    label="配偶电话"
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
                </Form.Item>
                <Form.Item
                    name='child_phone'
                    label="子女电话"
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
                </Form.Item>
                <Form.Item
                    name='babysitter_phone'
                    label="保姆电话"
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
                </Form.Item>
                <Form.Item
                    name='old_address'
                    label="原有地址"
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='old_address_type'
                    label="原有地址居住类型"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
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
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='now_address_type'
                    label="现居地址居住类型"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
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
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    label="客户标记"
                    name="sign"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 500 }}
                    >
                        <Option value='无'>无</Option>
                        <Option value='黑名单'>黑名单</Option>
                        <Option value='白名单'>白名单</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='figure'
                    label="身材情况"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='正常'>正常</Option>
                        <Option value='偏瘦'>偏瘦</Option>
                        <Option value='偏胖'>偏胖</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='three_high'
                    label="是否有三高"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='take_medicine'
                    label="是否长期服药"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='self_care'
                    label="自理情况"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='完全自理'>完全自理</Option>
                        <Option value='半自理'>半自理</Option>
                        <Option value='无法自理'>无法自理</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='mental_state'
                    label="精神状态"
                >
                    <Select placeholder='请选择' style={{ width: 500 }}>
                        <Option value='偏差'>偏差</Option>
                        <Option value='正常'>正常</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='character'
                    label="性格特点"
                >
                    <Input placeholder='请输入' style={{ width: 500 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='complaints'
                    label="投诉/不满次数"
                >
                    <InputNumber placeholder='请输入' style={{ width: 500 }}/>
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

export default AddPersonModal;