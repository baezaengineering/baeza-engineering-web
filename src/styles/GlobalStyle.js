import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';
import Media from './Media';

const { myColors, fontSizes } = Theme;

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        width: 100%;
    }

    #root {
        min-height: 100vh;
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: ${myColors.darkGray};
        line-height: 1.3;
        font-family: sans-serif;
        font-size: ${fontSizes.medium};
        ${Media.phablet`font-size: ${fontSizes.small};`}
    
        &.hidden {
          overflow: hidden;
        }
        &.blur {
          overflow: hidden;
          #root > .container > * {
            pointer-events: none;
            user-select: none;
          }
        }
    }

    ol li {
        list-style-type: none;
    }
    `;

export default GlobalStyle;
