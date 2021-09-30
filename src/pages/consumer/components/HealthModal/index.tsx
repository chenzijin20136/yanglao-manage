import { Modal, Form, Select, Button, Input } from 'antd';
import submitAllCustomer from '../../hooks/submitAllCustomer';

interface HealthModalProp{
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

const HealthModal = (props: HealthModalProp) => {
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
            title={'编辑客户健康信息'}
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
                    name='sick_case'
                    label="既往病史情况"
                    initialValue={'无'}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='disease'
                    label="目前是否患有疾病"
                    initialValue={'否'}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='food'
                    label="饮食禁忌"
                    initialValue={'无'}
                >
                    <Input placeholder='请输入' style={{ width: 400 }} allowClear/>
                </Form.Item>
                <Form.Item
                    name='mentality'
                    label="心理情况"
                    initialValue={'正常'}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='正常'>正常</Option>
                        <Option value='性格外向'>性格外向</Option>
                        <Option value='消极'>消极</Option>
                        <Option value='孤僻'>孤僻</Option>
                        <Option value='有自杀倾向'>有自杀倾向</Option>
                        <Option value='性格内向'>性格内向</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='agree_goout'
                    label="是否同意老人独自外出"
                    initialValue={'否'}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='intelligence'
                    label="神智清楚程度"
                    initialValue={'清楚'}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='清楚'>清楚</Option>
                        <Option value='有时清楚'>有时清楚</Option>
                        <Option value='不清楚'>不清楚</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='three_high'
                    label="是否有三高"
                    rules={[{
                        required: true,
                        message: '请选择是否有三高'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='take_medicine'
                    label="是否长期服药"
                    rules={[{
                        required: true,
                        message: '请选择是否长期服药'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='是'>是</Option>
                        <Option value='否'>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='self_care'
                    label="自理情况"
                    rules={[{
                        required: true,
                        message: '请选择自理情况'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='完全自理'>完全自理</Option>
                        <Option value='半自理'>半自理</Option>
                        <Option value='无法自理'>无法自理</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='mental_state'
                    label="精神状态"
                    rules={[{
                        required: true,
                        message: '请选择精神状态'
                    }]}
                >
                    <Select placeholder='请选择' style={{ width: 400 }}>
                        <Option value='偏差'>偏差</Option>
                        <Option value='正常'>正常</Option>
                    </Select>
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

export default HealthModal;