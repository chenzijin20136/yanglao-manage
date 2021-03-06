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
                    label="??????"
                    name="sex"
                >
                    <Select
                        allowClear
                        placeholder='?????????'
                        style={{ width: 100 }}
                    >
                        <Option value={'???'} key={'???'}>???</Option>
                        <Option value={'???'} key={'???'}>???</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="??????"
                    name="type"
                >
                    <Select
                        allowClear
                        placeholder='?????????'
                        style={{ width: 100 }}
                    >
                        <Option value={'???????????????'} key={'???????????????'}>???????????????</Option>
                        <Option value={'??????'} key={'??????'}>??????</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="??????"
                    name="phone"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 140 }}
                    >
                        {phoneData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="????????????"
                    name="phone_tab"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 140 }}
                    >
                        <Option value='?????????'>?????????</Option>
                        <Option value='????????????'>????????????</Option>
                        <Option value='??????'>??????</Option>
                        <Option value='??????'>??????</Option>
                        <Option value='????????????'>????????????</Option>
                        <Option value='??????/??????'>??????/??????</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="??????"
                    name="county"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 160 }}
                    >
                        {areaData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="??????"
                    name="street"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 160 }}
                    >
                        {streetData.map((item: string) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="?????????????????????????????????"
                    name="community"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 160 }}
                    >
                        {communityData.map((item: any) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="????????????"
                    name="address"
                >
                    <Select
                        allowClear
                        showSearch
                        placeholder='?????????'
                        style={{ width: 180 }}
                    >
                        {addressData.map((item: any) => (
                            <Option value={item} key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="????????????"
                    name="complaint"
                >
                    <Select
                        allowClear
                        placeholder='?????????'
                        style={{ width: 140 }}
                    >
                        <Option value={'yes'}>???</Option>
                        <Option value={'no'}>???</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="????????????"
                    name="source"
                >
                    <Select
                        allowClear
                        placeholder='?????????'
                        style={{ width: 140 }}
                    >
                        <Option value='????????????'>????????????</Option>
                        <Option value='????????????'>????????????</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="????????????"
                    name="sign"
                >
                    <Select
                        allowClear
                        placeholder='?????????'
                        style={{ width: 140 }}
                    >
                        <Option value='?????????'>?????????</Option>
                        <Option value='?????????'>?????????</Option>
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SearchBar;