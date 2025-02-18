import React from 'react';
import CustomText from '../../Components/Typography/Typography';
import { Divider, Flex } from 'antd';

function Typography(props) {
    return (
        <Flex justify='space-evenly'>
            <div>
                <CustomText fs='14px' fw='medium'>Header</CustomText>
                <Divider/>
                <CustomText fs='20px' fw='medium'>20px Text Example</CustomText>
                <Divider/>
                <CustomText fs='28px' fw='medium'>28px Text Example</CustomText>
                <Divider/>
                <CustomText fs='36px' fw='medium'>36px Text Example</CustomText>
                <Divider/>
            </div>
            <div>
                <CustomText fs='14px' fw='medium'>Body Text</CustomText>
                <Divider/>
                <CustomText fs='12px' fw=''>12px Text Example</CustomText>
                <Divider/>
                <CustomText fs='14px' fw=''>14px Text Example</CustomText>
                <Divider/>
                <CustomText fs='16px' fw=''>16px Text Example</CustomText>
                <Divider/>
            </div>
            <div>
                <CustomText fs='14px' fw='medium'>Font Weights</CustomText>
                <Divider/>
                <CustomText fs='' fw='regular'>Regular: 400</CustomText>
                <Divider/>
                <CustomText fs='' fw='medium'>Medium: 500</CustomText>
                <Divider/>
                <CustomText fs='' fw='semi-bold'>Semi Bold: 600</CustomText>
                <Divider/>
            </div>
        </Flex>
    );
}

export default Typography;