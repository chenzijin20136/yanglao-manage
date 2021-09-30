import { useState } from 'react';
import { Table, Button, Popconfirm, Tooltip, Breadcrumb } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { history } from 'umi';
import xlsx from 'xlsx';
import { UsergroupAddOutlined, HomeOutlined, AppstoreAddOutlined, DownloadOutlined } from '@ant-design/icons';

import { exportExcel } from '@/utils/tool';

import DetailModal, { DataType } from './components/DetailModal';
import SearchBar from './components/SearchBar';
import AddPersonModal from './components/AddPersonModal';
import OrderModal from './components/OrderModal';

import getAllCustomer from './hooks/getAllCustomer';
import submitDelete from './hooks/submitDelete';

import styles from './index.less';

const headers = {
    name: '姓名',
    sex: '性别',
    phone: '绑定电话',
    ethnic: '名族',
    address: '详细地址',
    type: '类型',
    years: '年龄',
    current_score: '剩余积分',
    phone_tab: '通话标记',
    province: '省份',
    city: '城市',
    county: '区',
    street: '街道',
    community: '社区（居委会、村委会）',
    done: '是否做过',
    source: '客户来源',
    complaints: '投诉次数',
    sign: '客户标记',
    spouse_phone: '配偶电话',
    child_phone: '子女电话',
    babysitter_phone: '保姆电话',
    old_address: '原有地址',
    old_address_type: '原有地址居住类型',
    now_address: '现居地址',
    now_address_type: '现居地址居住类型',
    living_space: '住房面积',
    figure: '身材',
    three_high: '是否有三高',
    take_medicine: '是否长期服药',
    self_care: '自理情况',
    mental_state: '精神状态',
    character: '性格特点',
    sick_case: '既往病史情况',
    disease: '目前是否患有疾病',
    food: '饮食禁忌',
    mentality: '心理情况',
    agree_goout: '是否同意老人独自外出',
    intelligence: '神智清楚程度'
};

const Consumer = () => {
    const [modalData, setModalData] = useState(undefined);
    const [visible, setVisible] = useState(false);
    const [orderVisible, setOrderVisible] = useState(false);
    const { data: allData, getData, loading, changeFilters } = getAllCustomer({});
    const { submit, loading: submitLoading } = submitDelete();

    const onConfirm = (id: string) => {
        submit(id).then(() => getData({}))
    }

    const columns: ColumnsType<DataType> = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 100,
            fixed: 'left',
            render: text => text || '- -'
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            width: 80,
            render: text => text || '- -'
        },
        {
            title: '年龄',
            dataIndex: 'years',
            key: 'years',
            width: 80,
            render: text => text || '- -'
        },
        {
            title: '绑定电话',
            dataIndex: 'phone',
            key: 'phone',
            width: 140,
            render: text => text || '- -'
        },
        {
            title: '剩余积分',
            dataIndex: 'current_score',
            key: 'current_score',
            width: 100,
            render: text => text === undefined ? '- -' : text
        },
        {
            title: '详细地址',
            dataIndex: 'address',
            key: 'address',
            width: 200,
            render: (text: string) => {
                if(!text) return '- -';
                if(text.length > 12) return (
                    <Tooltip title={text}>{text.slice(0, 12)}...</Tooltip>
                )
                return text
            }
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width: 120,
            render: text => text || '- -'
        },
        {
            title: '通话标记',
            dataIndex: 'phone_tab',
            key: 'phone_tab',
            width: 120,
            render: text => text || '- -'
        },
        {
            title: '地区',
            dataIndex: 'county',
            key: 'county',
            width: 100,
            render: text => text || '- -'
        },
        {
            title: '街道',
            dataIndex: 'street',
            key: 'street',
            width: 120,
            render: text => text || '- -'
        },
        {
            title: '社区（居委会、村委会）',
            dataIndex: 'community',
            key: 'community',
            width: 200,
            render: text => text || '- -'
        },
        {
            title: '是否做过',
            dataIndex: 'done',
            key: 'done',
            width: 100,
            render: text => text || '- -'
        },
        {
            title: '客户来源',
            dataIndex: 'source',
            key: 'source',
            width: 100,
            render: text => text || '- -'
        },
        {
            title: '投诉次数',
            dataIndex: 'complaints',
            key: 'complaints',
            width: 100,
            render: text => text === undefined ? '- -' : text
        },
        {
            title: '客户标记',
            dataIndex: 'sign',
            key: 'sign',
            width: 100,
            render: text => text || '- -'
        },
        {
            title: '',
            dataIndex: 'operation',
            key: 'operation',
            width: 160,
            fixed: 'right',
            render: (text: string, record: any) => (
                <div className={styles['col-operation']}>
                    <Button type="link" onClick={() => setModalData({
                        checkDetail: true,
                        ...record
                    })}>
                        详情
                    </Button>
                    <Button type="link" onClick={() => {
                        setOrderVisible(true);
                        setModalData(record);
                    }}>
                        派单
                    </Button>
                    <Popconfirm
                        title={'确认删除该客户？'}
                        onConfirm={() => onConfirm(record.id)}
                    >
                        <Button type="link" loading={submitLoading}>
                            删除
                        </Button>
                    </Popconfirm>
                </div>
            ),
        }
    ];

    const onCancel = () => {
        setModalData(undefined);
    };

    const addClick = () => {
        setVisible(true);
    }

    const addCancel = () => {
        setVisible(false)
    }

    const orderCancel = () => {
        setModalData(undefined);
        setOrderVisible(false)
    }

    const download = () => {
        exportExcel(xlsx.utils.json_to_sheet([
            headers,
            ...allData
        ], {
            skipHeader: true
        }), '客户数据')
    }

    return (
        <div>
            <Breadcrumb className={styles['bread']}>
                <Breadcrumb.Item><HomeOutlined />客户管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['wrapper']}>
                <SearchBar
                    data={allData}
                    changeData={changeFilters}
                />
                <div className={styles['option']}>
                    共有 {allData.length} 条数据
                    <div>
                        <Tooltip title='批量添加客户'>
                            <UsergroupAddOutlined onClick={() => history.replace('/consumer/Batchadd')}/>
                        </Tooltip>
                        <Tooltip title='批量添加积分'>
                            <AppstoreAddOutlined onClick={() => history.replace('/consumer/BatchaddScore')}/>
                        </Tooltip>
                        <Tooltip title='下载当前数据'>
                            <DownloadOutlined onClick={download}/>
                        </Tooltip>
                        <Button type="primary" onClick={addClick}>添加客户</Button>
                    </div>
                </div>
                <Table
                    dataSource={allData}
                    columns={columns}
                    rowClassName={(record: any) => {
                        if(record.done === '是') return styles['table-row-isdone']
                    }}
                    rowKey={'id'}
                    scroll={{
                        x: '130%'
                    }}
                    loading={loading}
                />
                <DetailModal
                    onCancel={onCancel}
                    data={modalData}
                    onSuccess={() => getData({})}
                />
                <AddPersonModal
                    visible={visible}
                    onCancel={addCancel}
                    success={() => getData({})}
                    allName={allData.map((item: any) => item.name)}
                />
                <OrderModal
                    visible={orderVisible}
                    onCancel={orderCancel}
                    data={modalData}
                    onSuccess={() => getData({})}
                />
            </div>
        </div>
    )
} 

export default Consumer;