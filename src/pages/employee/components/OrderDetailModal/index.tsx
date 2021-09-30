import { Modal, Form, Select, Button, Input, DatePicker } from 'antd';

interface OrderModalProp{
    onCancel: () => void;
    data: any;
    visible: boolean
}

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

const OrderDetailModal = (props: OrderModalProp) => {
    const { onCancel, data = {}, visible } = props;

    const onFinish = (values: any) => {
        console.log('values', values)
    }

    return (
        <Modal
            title={'派单详情'}
            visible={visible}
            onCancel={onCancel}
            wrapClassName="private-modal"
            maskClosable={false}
            destroyOnClose={true}
            footer={null}
            width={720}
        >

        </Modal>
    )
}

export default OrderDetailModal;