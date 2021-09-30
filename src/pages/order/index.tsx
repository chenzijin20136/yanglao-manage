import { useState } from 'react';
import { Table, Button, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import CallbackModal from './components/CallbackModal';
import SearchBar from './components/SearchBar';
import CallbackDetailModal from './components/CallbackDetailModal';

import getAllOrder from './hooks/getAllOrder';

import styles from './index.less';
import moment from 'moment';

const Order = () => {
    const [initData, setInitData] = useState(undefined);
    const [visible, setVisible] = useState(false);
    const [detailVisible, setDetailVisible] = useState(false);
    const { orderData, totalhour, loading, getData, changeFilters, allOrderData } = getAllOrder();
    console.log('allData', orderData, totalhour)
    const columns = [
        {
            title: '客户',
            dataIndex: 'customer_name',
            key: 'customer_name',
            render: (text: string) => text || '- -'
        },
        {
            title: '服务人员',
            dataIndex: 'employee_name',
            key: 'employee_name',
            render: (text: string) => text || '- -'
        },
        {
            title: '服务项目',
            dataIndex: 'service_type',
            key: 'service_type',
            render: (text: string) => text || '- -'
        },
        {
            title: '服务数量',
            dataIndex: 'count',
            key: 'count',
            render: (text: string) => text || '- -'
        },
        {
            title: '消费积分',
            dataIndex: 'score_cost',
            key: 'score_cost',
            render: (text: string) => text === undefined ? '- -' : `${text}分`
        },
        {
            title: '派单时间',
            dataIndex: 'service_time',
            key: 'service_time',
            render: (text: number) => text ? moment(text).format('YYYY-MM-DD') : '- -'
        },
        {
            title: '所需工时',
            dataIndex: 'work_hours',
            key: 'work_hours',
            render: (text: string) => text === undefined ? '- -' : `${text}h`
        },
        {
            title: '',
            dataIndex: 'operation',
            key: 'operation',
            render: (text: string, record: any) => (
                <div className={styles['col-operation']}>
                    {record.service_order_call_back ?
                    <Button type="link" onClick={() => {
                        setDetailVisible(true);
                        setInitData({
                            ...record,
                            ...record.service_order_call_back
                        })
                    }}>
                        回访详情
                    </Button>
                     :
                    <Button type="link" onClick={() => {
                        setVisible(true);
                        setInitData(record)
                    }}>
                        回访
                    </Button>
                    }
                </div>
            ),
        }
    ]

    return (
        <div>
            <Breadcrumb className={styles['bread']}>
                <Breadcrumb.Item><HomeOutlined />派单管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['wrapper']}>
                <SearchBar
                    data={allOrderData}
                    changeData={changeFilters}
                />
                <div className={styles['option']}>
                    总计工时：{totalhour}h
                    <div>共有 {orderData.length} 条数据</div>
                </div>
                <Table
                    dataSource={orderData}
                    columns={columns}
                    rowKey={'id'}
                    loading={loading}
                />
            </div>
            <CallbackModal
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                    setInitData(undefined);
                }}
                data={initData}
                success={() => getData()}
            />
            <CallbackDetailModal
                data={initData}
                visible={detailVisible}
                onCancel={() => {
                    setDetailVisible(false);
                    setInitData(undefined);
                }}
            />
        </div>
    )
}

export default Order;