import styled, { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`

  :root{

    font-size: 62.5%;

  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }


  body,
  html{
    background: #F8F8F2;

  }

  button,input{
    outline: 0;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 2%;


`;