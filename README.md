# styled-components

CSS in JS로서, Javascript파일 안에서 CSS를 처리 할 수 있게 해주는 대표적인 라이브러리이다. [styled-components](https://styled-components.com/).

## Setup
```
yarn add styled-components
```
typescript를 사용한다면 관련 모듈을 추가 설치 해준다.
```
yarn add -D @types/styled-components
```

### import
```javascript
import styled from "styled-components";
```  

### component
styled 다음에 HTML 태그를, 백틱 안에는 CSS를 넣는다.
```javascript
const Container = styled.div`
  width: 550px;
  margin: 50px auto;
  
  .btn-wrap {
    padding: 2.0rem;
    text-align: center;
    border: 1px solid #ddd;
  }
`;
```

## typescript

### 타입 지정
```javascript
// src/types/styled.d.ts
declare module 'styled-components' {
  export interface ButtonProps {
    children: React.ReactNode;
    type? : 'button' | 'submit' | 'reset' | undefined;
    color? : 'primary' | 'secondary' | 'light' | 'dark' | 'link' | undefined;
    size? : 'small' | 'large' | undefined;
  }
}
```