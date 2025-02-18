import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../Constants/Typography';

const { Text } = Typography;

const StyledText = styled(Text)`
    font-size: ${FONT_SIZE.t_14};
    font-weight: ${FONT_WEIGHT.regular};
    ${({fw}) => {
        switch (fw) {
          case 'regular':
            return `font-weight: ${FONT_WEIGHT.regular};`
          case 'medium':
            return `font-weight: ${FONT_WEIGHT.medium};`
          case 'semi-bold':
            return `font-weight: ${FONT_WEIGHT.semi_bold};`
          default:
            return ``;
        }
    }}
    ${({fs}) => {
        return `font-size: ${fs}`;
    }}
`
function CustomText({ fw, fs, ...props }) {
    return (
        <Typography>
            <StyledText fw={fw} fs={fs} {...props}>
                {props.children}
            </StyledText>
        </Typography>
    );
}

export default CustomText;