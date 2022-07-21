import { createGlobalStyle } from "styled-components";

import "~/assets/styles/styles.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body {
    scroll-behavior: smooth;
  }

  html,
  body,
  #app {
 
  }

  body {
    background-color: #fff;
    overflow: auto;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
    scrollbar-width: 6px;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d4d57;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: transparent;
  }

  img,
  svg {
    display: block;
    width: 100%;
  }

  button:hover,
  button:focus,
  button:active,
  button:active:focus:not(:disabled):not(.disabled) {
    box-shadow: none !important;
    outline: 0 !important;
  }

  .btn:hover,
  .btn:focus,
  .btn:active,
  .btn:active:focus:not(:disabled):not(.disabled) {
    box-shadow: none !important;
    outline: 0 !important;
  }
`;
