import React from 'react';

declare module 'styled-components' {
  export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'link';
    size?: 'small' | 'large';
  }

  export interface InputProps {
    type?: string;
    placeholder: string;
  }
}
