import { useState } from 'react';
import { Button, Breadcrumb, Upload, Table, message } from 'antd';
import { history } from 'umi';
import xlsx from 'xlsx';
import { HomeOutlined } from '@ant-design/icons';

import { exportExcel } from '@/utils/tool';

import getAllCustomer from '../hooks/getAllCustomer';

import styles from './index.less';

const headers = {
    name: '姓名',
    add_score: '积分'
};

const BatchaddScore = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const { data: allData } = getAllCustomer({});
    console.log('allData', allData)
    const columns = [
        {
            key: 'name', 
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '积分',
            dataIndex: 'add_score',
            key: 'add_score'
        }
    ];

    const handleDownload = () => {
        // 用于下载模板的数据
        const sheetData = [{
            name: '杨某某',
            add_score: '100',
        }];

        exportExcel(xlsx.utils.json_to_sheet([
            headers,
            ...sheetData
        ], {
            skipHeader: true
        }), '批量添加积分模板')
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

    const isRepeat = (arr: any) => {
        let hash = {};
        for(const value of arr){
            if(hash[value]) return true;
            hash[value] = true;
        }
        return false;
    }

    const onClick = () => {
        const sameName = data.map((item: any) => item.name);

        if(isRepeat(sameName)){
            message.error('存在相同姓名');
            return;
        }

        const params = data.map((item: any) => {
            const findItem = allData.find((i: any) => i.name === item.name);
            if(findItem){
                return {
                    id: findItem.id,
                    add_score: item.add_score && Number(item.add_score)
                }
            }else{
                return undefined
            }
        })
        console.log('onClick', data, )
    }
    
    return (
        <div>
            <Breadcrumb className={styles['bread']}>
                <Breadcrumb.Item onClick={() => history.replace('/consumer')} className={styles['item']}><HomeOutlined />客户管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    批量添加积分
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['wrapper']}>
                <p className={styles['title']}>批量添加积分</p>
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
                            rowKey={'name'}
                            loading={loading}
                        /> 
                        <Button type='primary' onClick={onClick}>提交</Button>
                    </div>
                : null}
            </div>
        </div>
    )
}

export default BatchaddScore;