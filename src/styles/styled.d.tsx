import React from 'react';

declare module 'styled-components' {
  export interface ButtonProps {
    // 기본적으로 모든 리액트 컴포넌트는 children이라고 하는 prop을 갖음
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'link';
    size?: 'small' | 'large';
  }
}
