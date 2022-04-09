import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-gray:hsl(0, 0%, 63%);
    --col-dark:hsl(0, 0%, 0%);
    --col-light:hsl(0, 0%, 100%);
    --col-gray-dark:hsl(0, 0%, 27%);

    --font-primary: 'Spartan', sans-serif;

    --height-header: 8rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-gray);


  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-dark);

    border-radius: 10rem;

    &:hover{
    background-color: var(--col-gray-dark);

    }
  }

  body{
    min-height: 100vh;
    font: 12px;
    font-family: var(--font-primary);
    font-weight: 500;
    overflow: hidden;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;

  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    font-weight: 900;
  }


`;

export default GlobalStyle;
