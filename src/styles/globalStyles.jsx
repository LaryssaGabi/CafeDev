import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
}

html{
  scroll-behavior: smooth;
}

body{
  overflow-x: hidden;
}

*::-webkit-scrollbar {
    width: 9px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid transparent;
    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
    cursor: pointer; 
  }

  *:hover::-webkit-scrollbar-thumb,
  *:active::-webkit-scrollbar-thumb,
  *::-webkit-scrollbar-thumb:hover {
    background-color: #210e00de; 
  }
 
`