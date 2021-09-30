import { useState } from 'react';
import { Button, Breadcrumb, Upload, Table, Tooltip } from 'antd';
import { history } from 'umi';
import xlsx from 'xlsx';
import { HomeOutlined } from '@ant-design/icons';

import { exportExcel } from '@/utils/tool';

import submitAllCustomer from '../hooks/submitAllCustomer';

import styles from './index.less';

const headers = {
    province: '省份',
    city: '城市',
    county: '区',
    street: '街道',
    community: '社区（居委会、村委会）',
    name: '姓名',
    sex: '性别',
    phone: '绑定电话',
    ethnic: '名族',
    address: '详细地址',
    type: '类型',
    years: '年龄',
    current_score: '剩余积分',
    phone_tab: '通话标记',
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
};

const BatchAdd = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const { submit, loading: submitLoading } = submitAllCustomer();

    const columns = [
        {
            key: 'name', 
            title: '姓名',
            dataIndex: 'name',
            width: 100,
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            width: 80,
        },
        {
            title: '绑定电话',
            dataIndex: 'phone',
            key: 'phone',
            width: 140,
        },
        {
            title: '名族',
            dataIndex: 'ethnic',
            key: 'ethnic',
            width: 80,
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
            width: 120
        },
        {
            title: '年龄',
            dataIndex: 'years',
            key: 'years',
            width: 100
        },
        {
            title: '剩余积分',
            dataIndex: 'current_score',
            key: 'current_score',
            width: 100
        },
        {
            title: '通话标记',
            dataIndex: 'phone_tab',
            key: 'phone_tab',
            width: 120
        },
        {
            title: '省份',
            dataIndex: 'province',
            key: 'province',
            width: 100,
        },
        {
            title: '城市',
            dataIndex: 'city',
            key: 'city',
            width: 100,
        },
        {
            title: '区',
            dataIndex: 'county',
            key: 'county',
            width: 100,
        },
        {
            title: '街道',
            dataIndex: 'street',
            key: 'street',
            width: 100,
        },
        {
            title: '社区（居委会、村委会）',
            dataIndex: 'community',
            key: 'community',
            width: 200
        },
        {
            title: '是否做过',
            dataIndex: 'done',
            key: 'done',
            width: 80
        },
        {
            title: '客户来源',
            dataIndex: 'source',
            key: 'source',
            width: 100
        },
        {
            title: '客户标记',
            dataIndex: 'sign',
            key: 'sign',
            width: 100
        },
        {
            title: '配偶电话',
            dataIndex: 'spouse_phone',
            key: 'spouse_phone',
            width: 120
        },
        {
            title: '子女电话',
            dataIndex: 'child_phone',
            key: 'child_phone',
            width: 120
        },
        {
            title: '保姆电话',
            dataIndex: 'babysitter_phone',
            key: 'babysitter_phone',
            width: 120
        },
        {
            title: '原有地址',
            dataIndex: 'old_address',
            key: 'old_address',
            width: 120
        },
        {
            title: '原有地址居住类型',
            dataIndex: 'old_address_type',
            key: 'old_address_type',
            width: 120
        },
        {
            title: '现居地址',
            dataIndex: 'now_address',
            key: 'now_address',
            width: 120
        },
        {
            title: '现居地址居住类型',
            dataIndex: 'now_address_type',
            key: 'now_address_type',
            width: 120
        },
        {
            title: '住房面积',
            dataIndex: 'living_space',
            key: 'living_space',
            width: 120
        },
        {
            title: '身材',
            dataIndex: 'figure',
            key: 'figure',
            width: 120
        },
        {
            title: '是否有三高',
            dataIndex: 'three_high',
            key: 'three_high',
            width: 80
        },
        {
            title: '是否长期服药',
            dataIndex: 'take_medicine',
            key: 'take_medicine',
            width: 80
        },
        {
            title: '自理情况',
            dataIndex: 'self_care',
            key: 'self_care',
            width: 120
        },
        {
            title: '精神状态',
            dataIndex: 'mental_state',
            key: 'mental_state',
            width: 120
        },
        {
            title: '性格特点',
            dataIndex: 'character',
            key: 'character',
            width: 120
        },
        {
            title: '投诉/不满次数',
            dataIndex: 'complaints',
            key: 'complaints',
            width: 80
        }
    ];

    const handleDownload = () => {
        // 用于下载模板的数据
        const sheetData = [{
            province: '四川省',
            city: '成都市',
            county: '青羊区',
            street: '草市街街道',
            community: '小关庙社区',
            name: '杨某某',
            sex: '男、女',
            phone: '',
            ethnic: '汉族',
            address: '',
            type: '高龄及计生、低保',
            years: '40',
            current_score: '200',
            phone_tab: '无人接听、停机/空号、已派单、预约派单、拒单、搬家',
            done: '是、否',
            source: '政府客户',
            complaints: '0',
            sign: '白名单、黑名单、无',
            spouse_phone: '',
            child_phone: '',
            babysitter_phone: '',
            old_address: '',
            old_address_type: '自住房、子女住房、租住房',
            now_address: '',
            now_address_type: '自住房、子女住房、租住房',
            living_space: '',
            figure: '正常、偏胖、偏瘦',
            three_high: '是、否',
            take_medicine: '是、否',
            self_care: '完全自理、半自理、无法自理',
            mental_state: '正常、偏差',
            character: '',
        }];

        exportExcel(xlsx.utils.json_to_sheet([
            headers,
            ...sheetData
        ], {
            skipHeader: true
        }), '批量添加客户信息模板')
    };

    const beforeUpload = async (file:any) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (event: any) => {
            const { result } = event.target;
            const workbook = xlsx.read(result, { type: 'binary' });
            const sheets = workbook.Sheets;
            
            for(const sheet in sheets){
                const curData: any = xlsx.utils.sheet_to_json(sheets[sheet]);
                setData(curData.map((item: any) => {
                    let obj = {};
                    for(let key in headers){
                        obj[key] = item[headers[key]];
                    }
                    return obj;
                }))
            }
        }
    };

    const onChange = (file: any) => {
        setLoading(true);
        if(file.file.status !== 'done') return;
        setLoading(false);
    };

    const onClick = () => {
        submit(data).then(() => history.replace('/consumer'))
    }
    
    return (
        <div>
            <Breadcrumb className={styles['bread']}>
                <Breadcrumb.Item onClick={() => history.replace('/consumer')} className={styles['item']}><HomeOutlined />客户管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    批量添加客户
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['wrapper']}>
                <p className={styles['title']}>批量添加客户信息</p>
                <Button onClick={handleDownload}>下载模板</Button>
                <Upload
                    showUploadList={false}
                    accept=".xlsx"
                    beforeUpload={beforeUpload}
                    onChange={onChange}
                >
                    <Button type="primary" loading={loading}>上传数据</Button>
                </Upload>
                {data.length ? <p className={styles['tip']}>共 {data.length} 条数据</p> : null}
                {data.length ?
                    <div className={styles['footer']}>
                        <Table
                            dataSource={data}
                            columns={columns}
                            scroll={{
                                x: 5500
                            }}
                            rowKey={'name'}
                            loading={loading}
                        /> 
                        <Button type='primary' onClick={onClick} loading={submitLoading}>提交</Button>
                    </div>
                : null}
            </div>
        </div>
    )
}

export default BatchAdd;