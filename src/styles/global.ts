import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --color-blue-primary: #2E5E96;
    --color-blue-secondary: #74A4D8;
    --color-blue-tertiary: #B4CBE7;
    --color-dark: #30363D;
    --color-gray: #616C78;
    --color-gray-light: #B1BCCA;
    --color-background: #F6F6F6;

    --color-white: #F6F6F6;
    --color-red: #c53030;
    --color-green: #28A54B;

    --shadow-smallest: 0px 2px 4px rgba(0,0,0,0.1);
    --shadow-extra-small: 0px 4px 8px rgba(0,0,0,0.12);
    --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
    --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
    --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
    --shadow-hover: 0 30px 60px rgba(0,0,0,0.12);
  }
   *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body{
      background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    /* overflow-y: scroll; */

    ::-webkit-scrollbar-track {
      background-color: var(--color-background);
    }

    scrollbar-track-color: var(--color-background);
    ::-webkit-scrollbar {
      width: 6px;
      background: var(--color-background);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-blue-primary);
    }

    scrollbar-base-color: var(--color-blue-primary);
    }

    // Responsivo
    html {
      font-size: 62.5%;

      @media (max-width: 1080px) {
        font-size: 58%;
      }

      @media (max-width: 720px) {
        font-size: 54%;
      }

      @media (max-width: 425px) {
        font-size: 48%;
      }
    }

    html + .react-datepicker__portal {
    font-size: inherit;
  }

    body, input, button{
      font: 400 16px "Roboto", sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 700;
    }

    button, a{
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

  [disabled] {
    opacity: 0.5;
  }
`;
