import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/Cormorant_Garamond/cormorant-garamond-v10-latin-500.svg#CormorantGaramond') format('svg'); /* Legacy iOS */
}

  html {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background: #fcfbf8; */
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }

  main, footer {
    position: relative;
  }
  
  div {
    font-family: "Roboto";
    //font-family: "Cormorant Garamond";
  }
  
  h1, h2, h3, h4, h5 {
    font-family: "Cormorant Garamond";
  }

  .content-container{
    margin: 0 auto;
    margin-top: 5%;
    width: 728px;

    @media only screen and (max-width: 480px) {
      width: 100%;

    }
  }
  
  .container {
    max-width: 1060px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: #4d3300
  }

  a:visited {
    // color: ${({ theme }) => theme.primaryDark};
  }

  button {
    background-color: ${({ theme }) => theme.primaryLight};
    border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
    border-radius: 2px;
    cursor: pointer;
    line-height: 1rem !important;
    padding: 0.5rem 1.675rem;
    box-shadow: 7.5px 5.5px 10px rgba(0, 0, 0, 0.03);

    &:hover {
      border: ${({ theme }) => `1px solid ${theme.primaryLight}`};
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.primaryLight};
    }

    &:active {
      border: ${({ theme }) => `1px solid ${theme.primaryLight}`};
      background-color: ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.primaryLight};
    }
  }

  `
