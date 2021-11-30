import React from 'react';
import styled, { ButtonProps } from 'styled-components';
import { StyleButton } from './Button';

// extend: styled 함수 전달하여 스타일 확장
// const StyleBlockButton = styled(StyleButton.withComponent('a'))`
const StyleBlockButton = styled(StyleButton)`
  width: 100%;
  margin: 1.0rem 0;
`;

const BlockButton = ({ children, type, ...props }: ButtonProps) => <StyleBlockButton {...props}>{children}</StyleBlockButton>

export default BlockButton;
