import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { NEUTRAL, PRIMARY } from '../../Constants/Colors';


const StyledButton = styled(Button)`
  ${({ type }) => {
    switch (type) {
      case 'primary':
        return `
            background-color: ${PRIMARY.primaryMain}; 
            color: ${PRIMARY.primaryColor};
            &:hover {
                background-color: ${PRIMARY.primaryHover} !important;
            }
            &:active {
                background-color: ${PRIMARY.primaryPressed} !important;
            }
            &:focus {
                outline: 2px solid ${PRIMARY.primaryFocus};
            }
            &:disabled {
                background-color: ${NEUTRAL.neutral_20};
                color: ${NEUTRAL.neutral_50};
                pointer-events: none;
                cursor: not-allowed; 
            }
        `;
      case 'secondary':
        return `
            background-color: ${PRIMARY.primarySecondary}; 
            color: ${PRIMARY.primaryMain};
            &:hover {
                color: ${PRIMARY.primaryHover} !important;
            }
            &:active {
                color: ${PRIMARY.primaryPressed} !important;
            }
            &:focus {
                outline: 2px solid ${PRIMARY.primaryFocus};
            }
            &:disabled {
                background-color: ${NEUTRAL.neutral_20};
                color: ${NEUTRAL.neutral_50};
                pointer-events: none;
                cursor: not-allowed; 
            }
        `;
      case 'outline':
        return `
            background-color: ${PRIMARY.primarySecondary}; 
            color: ${PRIMARY.primaryMain};
            outline: 2px solid ${PRIMARY.primaryBorder};
            &:hover {
                color: ${PRIMARY.primaryHover} !important;
                outline: 2px solid ${PRIMARY.primaryHover};
            }
            &:active {
                color: ${PRIMARY.primaryPressed} !important;
                outline: 2px solid ${PRIMARY.primaryPressed};
            }
            &:focus {
                outline: 2px solid ${PRIMARY.primaryFocus};
            }
            &:disabled {
                background-color: ${NEUTRAL.neutral_20};
                color: ${NEUTRAL.neutral_50};
                pointer-events: none;
                cursor: not-allowed; 
                outline: 2px solid ${NEUTRAL.neutral_40} !important;
            }
        `;
      case 'text':
        return `
            background-color: ${NEUTRAL.neutral_10}; 
            color: ${PRIMARY.primaryMain};
            &:hover {
                color: ${PRIMARY.primaryHover} !important;
                background-color: ${NEUTRAL.neutral_10} !important;
                outline: none !important; 
            }
            &:active {
                color: ${PRIMARY.primaryPressed} !important;
                background-color: ${NEUTRAL.neutral_10} !important;
                outline: none !important; 
            }
            &:focus {
                outline: 2px solid ${PRIMARY.primaryFocus};
                background-color: ${NEUTRAL.neutral_10} !important; 
            }
            &:disabled {
                background-color: ${NEUTRAL.neutral_10};
                color: ${NEUTRAL.neutral_50};
                pointer-events: none;
                cursor: not-allowed; 
            }
        `;
      default:
        return ``;
    }
  }}
`;

const CustomButton = ({ type, children, ...props }) => {
    return (
      <StyledButton type={type} {...props}>
        {children}
      </StyledButton>
    );
  };

export default CustomButton;