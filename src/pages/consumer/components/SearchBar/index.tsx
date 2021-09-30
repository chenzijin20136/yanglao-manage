import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';

import styles from './index.less';

interface SearchBarProp{
    data: any[];
    changeData: Function;
}

const { Option } = Select;

const filterObj = (obj: {}) => {
    let res = {};
    for(const key in obj){
        if(obj[key] !== undefined){
            res[key] = obj[key]
        }
    }
    return res
}

const complaintType = {
    'yes': true,
    'no': false
}

const SearchBar = (props: SearchBarProp) => {
    const { data, changeData } = props;
    const [phoneData, setPhoneData] = useState<any>([]);
    const [areaData, setAreaData] = useState<any>([]);
    const [streetData, setStreetData] = useState<any>([]);
    const [communityData, setCommunityData] = useState<any>([]);
    const [addressData, setAddressData] = useState<any>([]);

    useEffect(() => {
        if(!data.length) return;

        let phonedata: any = [];
        let areadata: any = [];
        let streetdata: any = [];
        let communitydata: any = [];
        let addressdata: any = [];

        for(let i = 0; i < data.length; i++){
            const curItem = data[i];
            curItem.phone && phonedata.push(curItem.phone);
            curItem.spouse_phone && phonedata.push(curItem.spouse_phone);
            curItem.child_phone && phonedata.push(curItem.child_phone);
            curItem.babysitter_phone && phonedata.push(curItem.babysitter_phone);
            curItem.county && areadata.push();
            curItem.street && streetdata.push(curItem.street);
            curItem.community && communitydata.push(curItem.community);
            curItem.address && addressdata.push(curItem.address);
        }
        setPhoneData([...new Set(phonedata)]);
        setAreaData([...new Set(areadata)]);
        setStreetData([...new Set(streetdata)]);
        setCommunityData([...new Set(communitydata)]);
        setAddressData([...new Set(addressdata)]);
    }, [data])

    const onValuesChange = (changeValue: any, allValue: any) => {
        changeData(filterObj({
            ...allValue,
            complaint: allValue.complaint && complaintType[allValue.complaint]
        }));
    }
    
    return (
        <div className={styles['search-wrapper']}>
            <Form
                layout='inline'
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    label="性别"
                    name="sex"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 100 }}
                    >
                        <Option value={'男'} key={'男'}>男</Option>
                        <Option value={'女'} key={'女'}>女</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="类型"
                    name="type"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 100 }}
                    >
                        <Option value={'高龄及计生'} key={'高龄及计生'}>高龄及计生</Option>
                        <Option value={'低保'} key={'低保'}>低保</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="电话"
                    name="phone"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 140 }}
                    >
                        {phoneData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="通话标记"
                    name="phone_tab"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 140 }}
                    >
                        <Option value='已派单'>已派单</Option>
                        <Option value='预约派单'>预约派单</Option>
                        <Option value='拒单'>拒单</Option>
                        <Option value='搬家'>搬家</Option>
                        <Option value='无人接听'>无人接听</Option>
                        <Option value='空号/停机'>空号/停机</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="地区"
                    name="county"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                    >
                        {areaData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="街道"
                    name="street"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                    >
                        {streetData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="社区（居委会、村委会）"
                    name="community"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 160 }}
                    >
                        {communityData.map((item: any) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="详细地址"
                    name="address"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='请输入'
                        style={{ width: 180 }}
                    >
                        {addressData.map((item: any) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="是否投诉"
                    name="complaint"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 140 }}
                    >
                        <Option value={'yes'}>是</Option>
                        <Option value={'no'}>否</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="客户来源"
                    name="source"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 140 }}
                    >
                        <Option value='政府客户'>政府客户</Option>
                        <Option value='市场客户'>市场客户</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="客户标记"
                    name="sign"
                >
                    <Select
                        allowClear
                        placeholder='请选择'
                        style={{ width: 140 }}
                    >
                        <Option value='白名单'>白名单</Option>
                        <Option value='黑名单'>黑名单</Option>
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SearchBar;