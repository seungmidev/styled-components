import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import Button from './components/Button/Button';
import BlockButton from './components/Button/BlockButton';

const StyleBox = styled.div`
  width: 550px;
  margin: 50px auto;
  
  .btn-wrap {
    padding: 2.0rem;
    text-align: center;
    border: 1px solid #ddd;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyleBox>
        <div className="btn-wrap">
          <Button color="primary">Primary</Button>
          <Button color="secondary" size="small">Secondary</Button>
          <Button color="dark" size="large">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="link">Link</Button>
          <BlockButton type="reset" color="primary" size="large">Block</BlockButton>
        </div>
      </StyleBox>
    </React.Fragment>
  );
}

export default App;
