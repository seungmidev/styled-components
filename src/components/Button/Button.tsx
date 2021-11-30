import React from 'react';
import styled, { css, ButtonProps } from 'styled-components';

// mixin: CSS 그룹화하여 여러 곳에서 쓰고 싶을 때
const COLOR = {
  primary: css`
    background-color: #007bff;
    border-color: #007bff;
  `,
  secondary: css`
    background-color: #6c757d;
    border-color: #6c757d;
  `,
  light: css`
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  `,
  dark: css`
    background-color: #343a40;
    border-color: #343a40;
  `,
  link: css`
    color: #007bff;
    background-color: transparent;
  `,
}

const SIZE = {
  small: css`
    padding: .4rem .8rem;
    font-size: 1.4rem;
  `,
  large: css`
    padding: .8rem 1.6rem;
    font-size: 2.0rem;
  `,
}

// attrs: Attributes 속성을 부여하고 싶을 때
export const StyleButton = styled.button.attrs(props => ({
  type: props.type || 'button'
}))<ButtonProps>`
  display: inline-block;
  align-items: center;
  padding: .6rem 1.2rem;
  margin: 0 .5rem;
  font-size: 1.6rem;
  color: #fff;
  line-height:1.5;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
 
 ${props => props.color && COLOR[props.color]};
 
 ${props => props.size && SIZE[props.size]};
`;

const Button = ({ children, type, ...props }: ButtonProps) => <StyleButton {...props}>{children}</StyleButton>;

export default Button;
