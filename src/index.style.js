import { createGlobalStyle } from 'styled-components'
import { BASE_FONT_SIZE, DEVICE } from './utils/constants'
import { px2rem, px2vw } from './utils/helpers'

const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #fff;
  --color-black: #000;
  --color-blue: #09e;
  --color-red: #e56;

  --color-body-bg: #f9f9f9;
  --color-border: #abc;
  --color-text: #456;
  --color-text-02: #4a4a4a;
  --color-text-nav: #7f7f7f;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  list-style: none;
  text-decoration: none;
  outline: none;
  position: relative;

  font-size: 100%;
  font: inherit;
  vertical-align: baseline;

  animation: .25 linear .1s ease-in;
  flex-wrap: wrap;
}

body {
  color: var(--color-text);
  background-color: var(--color-body-bg);

  font-size: ${px2rem(BASE_FONT_SIZE)};
  font-family: 'Roboto', 'Helvetica Neue', sans-serif;
  font-kerning: normal;
  letter-spacing: normal;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;

  min-width: 320px;
  width: 100%;

  /*
  @media ${DEVICE.tablet} {
    font-size: ${px2vw(18)};
  }

  @media ${DEVICE.desktop} {
    font-size: ${px2vw(16)};
  }
  */
}
img {
  max-width: 100%;
}

.text-center {
  text-align: center;
}
`

export default GlobalStyle
