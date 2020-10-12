import styled, { css } from 'styled-components';


export const StyledCard = styled.article`
  display: flex;

  background: #44475A;
  width: 45%;
  border-radius: 0.8rem;
  overflow: hidden;
  padding-right: 2rem;
  transition: transform .2s ease;

  &:hover{
    transform: scale(1.01);
  }

  img{
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }


   @media (max-width: 980px){
      
    width: 100%;

   }

  
`


export const Text = styled.h1`

margin: 2rem 0 0 2rem;

${props => props.title && css`

  margin-top: 1rem;
  color: #F8F8F2;
  font-weight: bold;
  font-size: 2rem;

`}

${props => props.description && css`

  display: flex;
  align-items: center;
  margin: 0.5rem 0 0  2rem;
  color: #CCCCCC;
  font-weight: lighter ;
`}

${props => props.ball && css`

  display: flex;
  align-items: center;
  margin: 0.5rem 0 0  0.2rem;
  color: #CCCCCC;
  font-weight: lighter;
`}

`
export const Ball = styled.span`

 display:flex;
 align-items: center;
 margin-left: 2rem;

`
export const BallIndicator = styled.h1`

  width: 1rem;
  height: 1rem;
  
  border-radius: 50%;
  margin-right: 0.5rem;

  ${props => props.status === 'Alive' && css`
    background: #50FA7B;
  `}
  ${props => props.status === 'Dead' && css`
    background: #FF5555;
  `}
  ${props => props.status === 'unknown' && css`
    background: #282A36;
  `}
`