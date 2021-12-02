import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import Button from './components/Button/Button';
import BlockButton from './components/Button/BlockButton';

const Container = styled.div`
  padding: 0 2.0rem;
  margin: 5.0rem auto;
  
  .title-wrap {
    margin-bottom: 2.0rem;
  }
  .btn-wrap {
    padding: 2.0rem;
    text-align: center;
    border: 1px solid #ddd;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;
const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="title-wrap">
          <Title>styled-components</Title>
          <Subtitle>CSS in JS</Subtitle>
        </div>
        <div className="btn-wrap">
          <Button color="primary">Primary</Button>
          <Button color="secondary" size="small">Secondary</Button>
          <Button color="dark" size="large">Dark</Button>
          <Button color="light">Light</Button>
          <Button type="reset" color="link">Link</Button>
          <BlockButton color="primary" size="large">Block</BlockButton>
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
