import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    background-image: url('./public/talent-calc-bg-min.jpg');
    background-repeat: repeat; //TODO: decide if repeat or cover
  }
`
