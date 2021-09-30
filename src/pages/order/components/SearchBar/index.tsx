import { Form, Select, DatePicker } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

import styles from './index.less';

interface SearchBarProp{
    data: any[];
    changeData: Function;
}

const { Option } = Select;
const { RangePicker } = DatePicker;

const filterObj = (obj: {}) => {
    let res = {};
    for(const key in obj){
        if(obj[key] !== undefined){
            res[key] = obj[key]
        }
    }
    return res
}

const SearchBar = (props: SearchBarProp) => {
    const { data, changeData } = props;
    const [customerData, setCustomerData] = useState<any>([]);
    const [employeeData, setEmployeeData] = useState<any>([]);
    const [projectData, setProjectData] = useState<any>([]);

    const onValuesChange = (changeValue: any, allValue: any) => {
        const { time, ...rst }: any = filterObj(allValue);
        const params = {
            ...rst,
            time_begin: time && moment(time[0]).valueOf(),
            time_end: time && moment(time[1]).valueOf()
        }
        changeData(params)
    }

    useEffect(() => {
        if(!data.length) return;
        
        let customerList: any = [], employeeList: any = [], projectList: any = [];

        for(let i = 0; i < data.length; i++){
            const curItem = data[i];
            curItem.customer_name && !customerList.find((item: any) => item.customer_name === curItem.customer_name) && customerList.push({
                customer_id: curItem.customer_id,
                customer_name: curItem.customer_name
            });
            curItem.employee_name && !employeeList.find((item: any) => item.employee_name === curItem.employee_name) && employeeList.push({
                employee_id: curItem.employee_id,
                employee_name: curItem.employee_name
            });
            curItem.service_type && projectList.push(curItem.service_type);
        }

        setCustomerData([...new Set(customerList)]);
        setEmployeeData([...new Set(employeeList)]);
        setProjectData([...new Set(projectList)]);
    }, [data])

    return (
        <div className={styles['search-wrapper']}>
            <Form
                layout='inline'
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    label="客户"
                    name="customer_id"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                    >
                        {customerData.map((item: any) => (
                            <Option value={item.customer_id} key={item.customer_id}>{item.customer_name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="服务人员"
                    name="employee_id"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                    >
                        {employeeData.map((item: any) => (
                            <Option value={item.employee_id} key={item.employee_id}>{item.employee_name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="服务项目"
                    name="service_type"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                        dropdownMatchSelectWidth={false}
                    >
                        {projectData.map((item: any) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name='time'
                    label="派单时间"
                >
                    <RangePicker allowClear/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SearchBar;