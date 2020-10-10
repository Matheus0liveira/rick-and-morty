import styled, { css } from 'styled-components';


export const StyledMain = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F2;
  height: calc(100vh - 8rem);

  
`;


export const Text = styled.h1`
  text-align: center;
  font-size: min(8rem, 10vw);
  font-weight: bold;
  color: #282A36;  
`;

export const Description = styled.p`
  text-align: justify;
  font-weight: lighter;
  margin: 2rem 0;
  max-height: 2000px;
  font-size: min(2rem, 10vw);
  line-height: 1.5;
  color: #282A36;  
  visibility: visible;
  transition: all .5s; 




  ${props => !props.showDescrition && css`
   opacity: 0;
   max-height: 0;
   visibility: hidden;

    
  `}


`;
export const StyledButton = styled.button`
  /* width: 10rem; */
  padding: 0.8rem 5rem;
  border: 0;
  border-radius: 0.6rem;
  font-weight: bold;
  color: #F8F8F2;
  background: #44475A;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  transition: background .2s ease;

  &:hover{
  background: #292A36;

  }

`;


export const StyledArrowDown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4rem;

 
`;