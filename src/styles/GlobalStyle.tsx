import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html {
    /* 결과 → 16px × 62.5% = 10px */
    font-size: 62.5%;
  }
  body {
    /* 결과 → 10px × 1.6 = 16px */
    font-size: 1.6rem;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  input[type='search'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
`;

export default GlobalStyle;