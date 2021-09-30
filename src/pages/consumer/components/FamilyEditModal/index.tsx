import { Modal, Form, Button, Input } from 'antd';
import submitAllCustomer from '../../hooks/submitAllCustomer';

interface FamilyEditModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean;
    success: () => void;
}

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
};

const FamilyEditModal = (props: FamilyEditModalProp) => {
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
            title={'编辑电话信息'}
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
                    name='spouse_phone'
                    label="配偶电话"
                >
                    <Input placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <Form.Item
                    name='child_phone'
                    label="子女电话"
                >
                    <Input placeholder='请输入' style={{ width: 400 }}/>
                </Form.Item>
                <Form.Item
                    name='babysitter_phone'
                    label="保姆电话"
                >
                    <Input placeholder='请输入' style={{ width: 400 }}/>
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

export default FamilyEditModal;