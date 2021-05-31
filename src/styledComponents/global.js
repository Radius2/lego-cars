import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;   
}
button {
  padding: 4px 8px;
  font-size: 14px;
  border:none; 
  cursor: pointer;
  max-height: 100%;

}
button:active, button:focus {
  outline: none;
  border: none;
}
input {
  outline: none;
  border: none;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
}
input:active, input:focus {
    outline: none;
    border: none;
}
    `