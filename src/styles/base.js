import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    @font-face {
      font-family: 'NewPatagonia';
      src: url('../fonts/NewPatagonia-Normal.otf');
    }
  }

  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    
    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.green};
    transition: color .1s ease;
  }

  p {
    font-weight: 400;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  main {
    padding: 4rem 2rem;
  }
`
