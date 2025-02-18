import React from 'react';
import CustomButton from '../../Components/Button/CustomButton';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Flex } from 'antd';

function Button(props) {
    const btnTypes = [
        { type: 'primary', label: 'Primary'},
        { type: 'secondary', label: 'Secondary'},
        { type: 'outline', label: 'Outline'},
        { type: 'text', label: 'Text'},
    ]

    // DISPLAY BUTTON GROUP BY TYPE
    const element = btnTypes.map((btnType) => {
        return (
            <>
                <Flex gap="small" justify='center'>
                    <CustomButton type={btnType.type}> {btnType.label} </CustomButton>
                    <CustomButton type={btnType.type} icon={<ExclamationCircleOutlined />}></CustomButton>
                    <CustomButton type={btnType.type} icon={<ExclamationCircleOutlined />}> {btnType.label} </CustomButton>
                    <CustomButton type={btnType.type} icon={<ExclamationCircleOutlined />} iconPosition='end'> {btnType.label} </CustomButton>
                    <CustomButton disabled type={btnType.type}> {btnType.label} </CustomButton>
                    <CustomButton disabled type={btnType.type} icon={<ExclamationCircleOutlined />}></CustomButton>
                    <CustomButton disabled type={btnType.type} icon={<ExclamationCircleOutlined />}> {btnType.label} </CustomButton>
                    <CustomButton disabled type={btnType.type} icon={<ExclamationCircleOutlined />} iconPosition='end'> {btnType.label} </CustomButton>
                </Flex>
                <Divider/>
            </>
        )
    })
    return (
        <>
            {element}
        </>
    );
}

export default Button;