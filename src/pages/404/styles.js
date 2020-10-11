import styled, { css } from 'styled-components';

const Styled404 = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   height: calc(100vh - 8rem);


`;


export const Text = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;


  ${props => props.error && css`

    font-weight: bold;
    font-size: 2.5rem;
  `}


`;
export const StyledButton = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #44475A;
  color:  #F8F8F2;
  border: 0.2rem solid #F8F8F2;
  text-align: center;
  border-radius: 0.8rem;
  padding: 1rem 2rem; 
  width: 10%;
  cursor: pointer;
  transition: all .2s ease;

  svg{
    margin-right: 0.5rem;
  }


  &:hover{
    background: #F8F8F2;
    color: #44475A;
    border: 0.2rem solid #44475A;
  }


`;

export default Styled404;