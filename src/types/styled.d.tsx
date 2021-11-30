import React from 'react';

declare module 'styled-components' {
  export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'link' | undefined;
    size?: 'small' | 'large' | undefined;
  }

  export interface InputProps {
    type?: string;
    placeholder: string;
  }
}
