import { useState } from 'react';
import { Table, Button, Popconfirm, Breadcrumb } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { HomeOutlined } from '@ant-design/icons';

import getAllemployee from './hooks/getAllemployee';

import SearchBar from './components/SearchBar';
import AddEmployeeModal from './components/AddEmployeeModal';

import styles from './index.less';

interface DataType{
    name: string;
}

const Employee = () => {
    const [visible, setVisible] = useState(false);
    const { loading, data: allData, changeFilters, getData, complainedCount } = getAllemployee();

    const columns: ColumnsType<DataType> = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => text || '- -'
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render: text => text || '- -'
        },
        {
            title: '绑定电话',
            dataIndex: 'phone',
            key: 'phone',
            render: text => text || '- -'
        },
        {
            title: '投诉次数',
            dataIndex: 'complained_count',
            key: 'complained_count',
            render: text => text === undefined ? '- -' : `${text} 次`
        },
        {
            title: '',
            dataIndex: 'operation',
            key: 'operation',
            width: 180,
            render: (text: string, record: any) => (
                <div className={styles['col-operation']}>
                    <Button type="link">
                        编辑
                    </Button>
                    <Popconfirm
                        title={'确认删除该员工？'}
                    >
                        <Button type="link">
                            删除
                        </Button>
                    </Popconfirm>
                </div>
            ),
        }
    ];
    
    return (
        <div>
            <Breadcrumb className={styles['bread']}>
                <Breadcrumb.Item><HomeOutlined />员工管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['wrapper']}>
                <SearchBar
                    data={complainedCount}
                    changeData={changeFilters}
                />
                <div className={styles['option']}>
                    共有 {allData.length} 条数据
                    <div>
                        <Button type="primary" onClick={() => setVisible(true)}>添加员工</Button>
                    </div>
                </div>
                <Table
                    dataSource={allData}
                    columns={columns}
                    loading={loading}
                    rowKey={'id'}
                />
                <AddEmployeeModal
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    success={() => getData()}
                />
            </div>
        </div>
    )
} 

export default Employee;