import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar-track {
    background-color: #800080;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }

`
