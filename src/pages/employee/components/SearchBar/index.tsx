import { Form, Select } from 'antd';

import styles from './index.less';

interface SearchBarProp{
    data: any[];
    changeData: Function;
}

const filterObj = (obj: {}) => {
    let res = {};
    for(const key in obj){
        if(obj[key] !== undefined){
            res[key] = obj[key]
        }
    }
    return res
}

const { Option } = Select;

const SearchBar = (props: SearchBarProp) => {
    const { data, changeData } = props;

    const onValuesChange = (changeValue: any, allValue: any) => {
        changeData(filterObj(allValue))
    }

    return (
        <div className={styles['search-wrapper']}>
            <Form
                layout='inline'
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    label="投诉次数"
                    name="complainedCount"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 140 }}
                    >
                        {data.map(item => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SearchBar;