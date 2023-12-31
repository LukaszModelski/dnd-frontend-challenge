import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    background-image: url('./public/talent-calc-bg-min.jpg');
    background-repeat: repeat; //TODO: decide if repeat or cover
    color: ${(props) => props.theme.colors.white};
    font-family: Arial, sans-serif;
    letter-spacing: 0.5px;
  }

  h1, label {
    margin: 0;
  }

  button {
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  /* active talent border animation */
  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`
