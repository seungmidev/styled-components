import React from 'react';
import styled, { css, ButtonProps } from 'styled-components';

// mixin: CSS 그룹화하여 여러 곳에서 쓰고 싶을 때
const COLOR = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primaryColor};
    border-color: ${({ theme }) => theme.color.primaryColor};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.secondaryColor};
    border-color: ${({ theme }) => theme.color.secondaryColor};
  `,
  light: css`
    color: #212529;
    background-color: ${({ theme }) => theme.color.lightColor};
    border-color: ${({ theme }) => theme.color.lightColor};
  `,
  dark: css`
    background-color: ${({ theme }) => theme.color.darkColor};
    border-color: ${({ theme }) => theme.color.darkColor};
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

// attrs: Attributes 속성을 부여하고 싶을 때(고정적인 props, 기본 tag props 등)
export const StyleButton = styled.button.attrs(({ type }) => ({
  type: type || 'button',
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

const Button = ({ children, ...props }: ButtonProps) => <StyleButton {...props}>{children}</StyleButton>;

export default Button;
