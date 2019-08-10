import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root
  {
    min-height: 100%;
  }
  body {
    background: linear-gradient(180deg, #22202c 0%, #402845);
    color: #fff;
    -webkit-font-smoothing: antialiased !important;

  }
  body, input, button, textarea{
    color: #fff;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
    border: 0;
    ::selection {
    background: #f94d6a; /* WebKit/Blink Browsers */
  }

  input{
    padding: 0 20px 0;
  }

  button {
    cursor: pointer;
    background: #f94d6a;
    height: 42px;
    color: #fff;
    padding: 0 20px 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#f94d6a')};
    }
  }
}
`;
