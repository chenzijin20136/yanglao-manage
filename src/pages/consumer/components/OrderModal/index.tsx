import { Modal, Form, Select, Button, Input, DatePicker, message } from 'antd';

import submitOrder from '../../hooks/submitOrder';
import getAllEmployee from '../../hooks/getAllEmployee';
import { useEffect, useState } from 'react';
import moment from 'moment';

interface OrderModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean;
    onSuccess: () => void;
}

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const serviceList = [
    {
        key: 1,
        name: '助浴（健康老年人）- 60/次',
        value: 60,
        unit: '次'
    },
    {
        key: 2,
        name: '助浴（半失能老年人）- 80/次',
        value: 80,
        unit: '次'
    },
    {
        key: 3,
        name: '助浴（全失能老年人）- 100/次',
        value: 100,
        unit: '次'
    },
    {
        key: 4,
        name: '家电维修 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 5,
        name: '疏通管道 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 6,
        name: '修锁 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 7,
        name: '打扫卫生-地面清洁 - 1.5/平米',
        value: 1.5,
        unit: '平米'
    },
    {
        key: 8,
        name: '玻璃窗户清洗 - 1.5/平米',
        value: 1.5,
        unit: '平米'
    },
    {
        key: 9,
        name: '空调清洗 - 20/台',
        value: 20,
        unit: '台'
    },
    {
        key: 10,
        name: '排风扇清洗 - 25/次',
        value: 25,
        unit: '次'
    },
    {
        key: 11,
        name: '上门洗衣物 - 5/件',
        value: 5,
        unit: '件'
    },
    {
        key: 12,
        name: '送餐 - 5/次',
        value: 5,
        unit: '次'
    },
    {
        key: 13,
        name: '喂饭 - 15/次',
        value: 15,
        unit: '次'
    },
    {
        key: 14,
        name: '理发（男性）- 20/次',
        value: 20,
        unit: '次'
    },
    {
        key: 15,
        name: '理发（女性）- 30/次',
        value: 30,
        unit: '次'
    },
    {
        key: 16,
        name: '单独洗发（含吹发）（男性）- 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 17,
        name: '修面 - 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 18,
        name: '剪甲-手指甲 - 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 19,
        name: '清理排泄物 - 60/次',
        value: 60,
        unit: '次'
    },
    {
        key: 20,
        name: '水/电/气维修 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 21,
        name: '常规检查 - 20/次',
        value: 20,
        unit: '次'
    },
    {
        key: 22,
        name: '陪同就诊（2小时以内）- 80/次',
        value: 80,
        unit: '次'
    },
    {
        key: 23,
        name: '陪同就诊（半天以内）- 120/次',
        value: 120,
        unit: '次'
    },
    {
        key: 24,
        name: '代领门诊药物 - 20/次',
        value: 20,
        unit: '次'
    },
    {
        key: 25,
        name: '按摩理疗 - 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 26,
        name: '推拿 - 30/次',
        value: 30,
        unit: '次'
    },
    {
        key: 27,
        name: '生活护理（30分钟）- 40/次',
        value: 40,
        unit: '次'
    },
    {
        key: 28,
        name: '修脚 - 15/次',
        value: 15,
        unit: '次'
    },
    {
        key: 29,
        name: '代购物品 - 5/次',
        value: 5,
        unit: '次'
    },
    {
        key: 30,
        name: '水/电/气代缴 - 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 31,
        name: '抽烟机清洗-深度清洗 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 32,
        name: '单独洗发（含吹发）（女性）- 15/次',
        value: 15,
        unit: '次'
    },
    {
        key: 33,
        name: '剪甲-脚趾甲 - 20/次',
        value: 20,
        unit: '次'
    },
    {
        key: 34,
        name: '生活护理（60分钟）- 60/次',
        value: 60,
        unit: '次'
    },
    {
        key: 35,
        name: '康复服务包-推拿按摩 - 20/次',
        value: 20,
        unit: '次'
    },
    {
        key: 36,
        name: '康复服务包-常规体检 - 5/次',
        value: 5,
        unit: '次'
    },
    {
        key: 37,
        name: '助洁服务包-全屋打扫-大面积 - 150/次',
        value: 150,
        unit: '次'
    },
    {
        key: 38,
        name: '助洁服务包-全屋打扫-小面积 - 100/次',
        value: 100,
        unit: '次'
    },
    {
        key: 39,
        name: '助行服务包-协助老人外出 - 36/次',
        value: 36,
        unit: '次'
    },
    {
        key: 40,
        name: '助行服务包-协助轮椅换乘或户外活动 - 36/次',
        value: 36,
        unit: '次'
    },
    {
        key: 41,
        name: '关节被动训练及指导 - 120/次',
        value: 120,
        unit: '次'
    },
    {
        key: 42,
        name: '协助换乘轮椅/平车或进行户外活动 - 50/次',
        value: 50,
        unit: '次'
    },
    {
        key: 43,
        name: '足底按摩 - 30/次',
        value: 30,
        unit: '次'
    },
    {
        key: 44,
        name: '助行服务包-代缴水电气 - 10/次',
        value: 10,
        unit: '次'
    },
    {
        key: 45,
        name: '康复服务包-足部护理 - 25/次',
        value: 25,
        unit: '次'
    },
    {
        key: 46,
        name: '康复服务包-陪同就 - 50/次 v',
        value: 50,
        unit: '次'
    }
]

const OrderModal = (props: OrderModalProp) => {
    const [form] = Form.useForm();
    const [inputsuffix, setInputsuffix] = useState('次');
    const [curscore, setCurscore] = useState(0);
    const { onCancel, data = {}, visible, onSuccess } = props;
    const { submit, loading } = submitOrder();
    const { data: employees } = getAllEmployee()

    const itemChange = (value: string) => {
        const numberItem = form.getFieldValue('numbers');
        const curItem = serviceList.find(item => item.name === value) || {unit: '次', value: 0};
        const totalScore = Number(numberItem)*curItem.value;
        setInputsuffix(curItem.unit);
        setCurscore(totalScore);
    }

    const numberChange = (e: any) => {
        if(!e.target.value) return;
        const numberItem = Number(e.target.value);
        const serviceItem = form.getFieldValue('serviceitem');
        const curItem = serviceList.find(item => item.name === serviceItem) || {value: 0};
        const totalScore = numberItem*curItem.value;
        setCurscore(totalScore);
    }

    const onFinish = (values: any) => {
        if(curscore > (data.current_score || 0)){
            message.error('积分不足');
            return;
        }
        const params = {
            customer_id: data.id,
            employee_id: values.employee.value,
            employee_name: values.employee.label,
            score_cost: curscore,
            service_time: values.service_time ? moment(values.service_time).valueOf() : undefined,
            work_hours: Number(values.work_hours),
            count: `${values.numbers+inputsuffix}`,
            service_type: values.serviceitem,
            customer_name: data.name,
        }
        submit(params).then(() => {
            onCancel();
            onSuccess();
        })
    }

    useEffect(() => {
        form.resetFields();
        setCurscore(0);
    }, [data])
    console.log('data', data, data.current_score)
    return (
        <Modal
            title={'派单'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName="private-modal"
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={720}
        >
            <Form
                form={form}
                labelAlign="left"
                onFinish={onFinish}
                {...layout}
            >
                <Form.Item
                    name='name'
                    label="客户姓名"
                    required={true}
                >
                    {data.name}
                </Form.Item>
                <Form.Item
                    name='current_score'
                    label="当前积分"
                >
                    {data.current_score}
                </Form.Item>
                <Form.Item
                    name='employee'
                    label="服务人员"
                    rules={[{
                        required: true,
                        message: '请选择服务人员'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }} labelInValue>
                        {employees.map((item: any) => (
                            <Option value={item.id} key={item.id}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name='serviceitem'
                    label="服务项目"
                    rules={[{
                        required: true,
                        message: '请选择服务项目'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }} onChange={itemChange}>
                        {serviceList.map(item => (
                            <Option value={item.name} key={item.key}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name='numbers'
                    label="服务数量"
                    rules={[{
                        required: true,
                        message: '请输入服务数量'
                    }]}
                    initialValue={1}
                >
                    <Input suffix={inputsuffix} style={{ width: 400 }} onChange={numberChange}/>
                </Form.Item>
                <Form.Item
                    name='scores'
                    label="本单积分"
                >
                    {curscore}
                </Form.Item>
                <Form.Item
                    name='work_hours'
                    label="所需工时"
                    rules={[{
                        required: true,
                        message: '请输入所需工时'
                    }]}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} addonAfter='小时'/>
                </Form.Item>
                <Form.Item
                    name='service_time'
                    label="派单时间"
                    initialValue={moment()}
                >
                    <DatePicker style={{ width: 400 }} allowClear/>
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

export default OrderModal;