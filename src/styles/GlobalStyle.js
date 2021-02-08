import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
    width: 100%;
}

body {
    width: 100%;
    margin: 0;
    font-family: Sans-Serif;
}

ol li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
