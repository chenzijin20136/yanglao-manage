import { useState } from 'react';
import { Modal, Button } from 'antd';
import { ContainerFilled } from '@ant-design/icons';

import BasicEditModal from '../BasicEditModal';
import FamilyEditModal from '../FamilyEditModal';
import AddressEditModal from '../AddressEditModal';
import PersonEditModal from '../PersonEditModal';
import HealthModal from '../HealthModal';

import styles from './index.less';

export interface DataType {
    name?: string; // 姓名
    phone?: string; // 绑定电话
    sex?: string; // 性别
    years?: string; // 年龄
    current_score?: string; // 剩余积分
    type?: string; // 客户类型，高龄及计生/低保
    phone_tab?: string; // 通话标记
    ethnic?: string; // 名族（汉族）
    province?: string; // 省（四川省）
    city?: string; // 城市（成都市）
    county?: string; // 区（青羊区）
    community?: string; // 社区（居委会、村委会）
    street?: string; // 街道
    address?: string; // 详细地址
    spouse_name?: string; // 配偶姓名
    spouse_phone?: string; // 配偶电话
    child_phone?: string; // 子女电话
    babysitter_phone?: string; // 保姆电话
    old_address?: string; // 原有地址
    old_address_type?: string; // 原有地址居住类型：自住房/子女住房/租住房
    now_address?: string; // 现居地址
    now_address_type?: string; // 现居地址居住类型：自住房/子女住房/租住房
    living_space?: string; // 住房面积
    figure?: string; // 身材：偏胖/偏瘦/正常
    three_high?: string; // 是否有三高：是/否
    take_medicine?: string; // 是否长期服药：是/否
    self_care?: string; // 自理情况：完全自理/半自理/无法自理
    mental_state?: string; // 精神状态: 偏差/正常
    character?: string; // 性格特点
    complaints?: string; // 投诉/不满次数
    done?: string; // 是否做过
    callbackType?: string; // 回访方式
    callbackisDone?: string; // 服务项目是否完成
    quality?: string; // 服务质量
    evaluate?: string; // 综合评价
    servicePerson?: string; // 服务人员
    checkDetail?: boolean;
    source?: string; // 客户来源
    sign?: string; // 客户标记
    sick_case?: string; // 客户病例，病史情况
    disease?: string; //患有疾病
    food?: string; // 饮食禁忌
    mentality?: string; // 心理情况
    agree_goout?: string; // 是否同意老人独自外出
    intelligence?: string; //神志清楚程度
}

interface EditModalProp {
    onCancel: () => void;
    data: DataType | undefined;
    onSuccess: () => void;
}

const basicData = [
    {
        lable: '姓名',
        key: 'name'
    },
    {
        lable: '电话',
        key: 'phone',
        render: (text: string, record: any) => (
            <span>{text || '- -'}{record.phone_tab &&<span className={styles['basic-tip']}>{record.phone_tab}</span>}</span>
        )
    },
    {
        lable: '详细地址',
        key: 'address'
    },
    {
        lable: '年龄',
        key: 'years'
    },
    {
        lable: '性别',
        key: 'sex'
    },
    {
        lable: '剩余积分',
        key: 'current_score'
    },
    {
        lable: '类型',
        key: 'type'
    },
    {
        lable: '客户来源',
        key: 'source'
    },
    {
        lable: '客户标记',
        key: 'sign'
    },
    {
        lable: '是否做过',
        key: 'done'
    },
    {
        lable: '民族',
        key: 'ethnic'
    },
    {
        lable: '省份',
        key: 'province'
    },
    {
        lable: '城市',
        key: 'city'
    },
    {
        lable: '区',
        key: 'county'
    },
    {
        lable: '街道',
        key: 'street'
    },
    {
        lable: '社区（居委会、村委会）',
        key: 'community'
    },
];

const familyData = [
    {
        lable: '配偶电话',
        key: 'spouse_phone'
    },
    {
        lable: '子女电话',
        key: 'child_phone'
    },
    {
        lable: '保姆电话',
        key: 'babysitter_phone'
    },
];

const addressData = [
    {
        lable: '原有地址',
        key: 'old_address',
        render: (text: string, record: any) => (
            <span>{text || '- -'}{record.old_address_type && <span className={styles['address-tip']}>{record.old_address_type}</span>}</span>
        )
    },
    {
        lable: '现居地址',
        key: 'now_address',
        render: (text: string, record: any) => (
            <span>{text || '- -'}{record.now_address_type && <span className={styles['address-tip']}>{record.now_address_type}</span>}</span>
        )
    },
    {
        lable: '住房面积',
        key: 'living_space',
        render: (text: string) => text || '- -'
    },
]

const personData = [
    {
        lable: '身材',
        key: 'figure',
        render: (text: string) => {
            if(!text) return '- -';
            if(text !== '正常') return <span className={styles['person-red']}>{text}</span>;
            return text
        }
    },
    {
        lable: '投诉/不满次数',
        key: 'complaints',
        render: (text: string) => {
            if(text === undefined || text === null) return '- -';
            if(text !== '0') return <span className={styles['person-red']}>{text} 次</span>;
            return `${text} 次`
        }
    },
]

const healthData = [
    {
        lable: '既往病史情况',
        key: 'sick_case',
        render: (text: string) => text || '- -'
    },
    {
        lable: '目前是否患有疾病',
        key: 'disease',
        render: (text: string) => text || '- -'
    },
    {
        lable: '饮食禁忌',
        key: 'food',
        render: (text: string) => text || '- -'
    },
    {
        lable: '心理情况',
        key: 'mentality',
        render: (text: string) => text || '- -'
    },
    {
        lable: '是否同意老人独自外出',
        key: 'agree_goout',
        render: (text: string) => text || '- -'
    },
    {
        lable: '神智清楚程度',
        key: 'intelligence',
        render: (text: string) => text || '- -'
    },
    {
        lable: '是否有三高',
        key: 'three_high',
        render: (text: string) => {
            if(!text) return '- -';
            if(text !== '否') return <span className={styles['person-red']}>{text}</span>;
            return text
        }
    },
    {
        lable: '是否长期服药',
        key: 'take_medicine',
        render: (text: string) => {
            if(!text) return '- -';
            if(text !== '否') return <span className={styles['person-red']}>{text}</span>;
            return text
        }
    },
    {
        lable: '自理情况',
        key: 'self_care',
        render: (text: string) => {
            if(!text) return '- -';
            if(text !== '完全自理') return <span className={styles['person-red']}>{text}</span>;
            return text
        }
    },
    {
        lable: '精神状态',
        key: 'mental_state',
        render: (text: string) => text || '- -'
    },
]

const orderData = [
    {
        lable: '服务人员',
        key: 'employee'
    },
    {
        lable: '服务项目',
        key: 'item'
    },
    {
        lable: '本单积分',
        key: 'scores'
    },
    {
        lable: '派单时间',
        key: 'time'
    },
]

const DetailModal = (props: EditModalProp) => {
    const { onCancel, data = {}, onSuccess } = props;
    const [basicVisible, setBasicVisible] = useState(false);
    const [familyVisible, setFamilyVisible] = useState(false);
    const [addressVisible, setAddressVisible] = useState(false);
    const [personVisible, setPersonVisible] = useState(false);
    const [callbackVisible, setCallbackVisible] = useState(false);
    const [healthVisible, setHealthVisible] = useState(false);

    return (
        <div>
            <Modal
                title={data.name}
                visible={Boolean(data.checkDetail)}
                onCancel={onCancel}
                wrapClassName='full-screen-modal'
                maskClosable={false}
                destroyOnClose={true}
                footer={null}
                width={456}
            >
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>基础信息</h3>
                        <Button onClick={() => setBasicVisible(true)}>编辑</Button>
                    </div>
                    <div className={styles['basic-content']}>
                        {basicData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{item.render ? item.render(data[item.key], data) : (data[item.key] || '- -')}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>电话信息</h3>
                        <Button onClick={() => setFamilyVisible(true)}>编辑</Button>
                    </div>
                    <div className={styles['basic-content']}>
                        {familyData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{data[item.key] || '- -'}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>居住信息</h3>
                        <Button onClick={() => setAddressVisible(true)}>编辑</Button>
                    </div>
                    <div className={styles['basic-content']}>
                        {addressData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{item.render(data[item.key], data)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>客户概况</h3>
                        <Button onClick={() => setPersonVisible(true)}>编辑</Button>
                    </div>
                    <div className={styles['basic-content']}>
                        {personData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{item.render(data[item.key])}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>健康信息</h3>
                        <Button onClick={() => setHealthVisible(true)}>编辑</Button>
                    </div>
                    <div className={styles['basic-content']}>
                        {healthData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{item.render(data[item.key])}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles['detail-wrapper']}>
                    <div className={styles['title']}>
                        <ContainerFilled />
                        <h3>派单信息</h3>
                    </div>
                    <div className={styles['basic-content']}>
                        {orderData.map(item => (
                            <div className={styles['content']} key={item.key}>
                                {item.lable}：<span>{data[item.key] || '- -'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
            <BasicEditModal
                onCancel={() => setBasicVisible(false)}
                data={data}
                visible={basicVisible}
                success={() => {
                    onSuccess();
                    onCancel();
                }}
            />
            <FamilyEditModal
                data={data}
                visible={familyVisible}
                onCancel={() => setFamilyVisible(false)}
                success={() => {
                    onSuccess();
                    onCancel();
                }}
            />
            <AddressEditModal
                data={data}
                visible={addressVisible}
                onCancel={() => setAddressVisible(false)}
                success={() => {
                    onSuccess();
                    onCancel();
                }}
            />
            <PersonEditModal
                data={data}
                visible={personVisible}
                onCancel={() => setPersonVisible(false)}
                success={() => {
                    onSuccess();
                    onCancel();
                }}
            />
            <HealthModal
                data={data}
                visible={healthVisible}
                onCancel={() => setHealthVisible(false)}
                success={() => {
                    onSuccess();
                    onCancel();
                }}
            />
        </div>
    );
};

export default DetailModal;
