import styled, { css } from 'styled-components';


export const StyledMain = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F2;
  height: calc(100vh - 8rem);

  img{
    width: 10rem;
    margin: 0 auto;
  }

  
`;


export const Text = styled.h1`
  text-align: center;
  font-size: min(8rem, 10vw);
  font-weight: bold;
  color: #282A36;  

  ${props => props.person && css`

    color: #F8F8F2;
  font-size: min(4rem, 10vw);
    text-align: left;


    @media (max-width: 840px){

    text-align: center;
    }

  `}
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
   margin:0;

    
  `}


`;
export const StyledButton = styled.button`

  cursor: pointer;
  transition: background .2s ease;

  ${props => props.about && css`

    padding: 0.8rem 5rem;
    border: 0;
    border-radius: 0.6rem;
    font-weight: bold;
    color: #F8F8F2;
    background: #44475A;
    text-align: center;
    margin: 0 auto;


    @media (max-width: 400px) { 
        margin-bottom: 20rem;

    }

  `}

  &:hover{
  background: #292A36;

  }

  ${props => props.search && css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border: 0;
    border-radius: 0.6rem;
    background: #BD93F9;
    padding: 0 3rem;


    &:hover{
      background: #44475A;
    }

    svg{
      font-size: 2rem;
    }

     @media (max-width: 840px){
      margin-top: 2rem;
      width: 100%;
  }
    
  `}

`;


export const StyledArrowDown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4rem;

 
`;

export const StyledProfiles = styled.div`
  background: #282A36;
  padding: 6rem 0;

  div{
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 840px){

    flex-direction: column;
    }
  }



 
`;
export const InputSearch = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282A36;

  input{
    width: 100%;
    padding: 0 2rem; 
    height: 4rem;
    border: 0;
    border-radius: 0.6rem;
    margin-right: 4rem;
    font-weight: bold;


    ::placeholder{
      font-weight: bold;
      color: #424558;
    }


    @media (max-width: 840px){

      margin-right: 0;
      width: 100%;
      margin-top: 2rem;
    }


  }

 
`;


export const Box = styled.div`

  position: absolute;
  /* top: 0; */
  left: 0;
  right: 0;
  bottom: 0;
  background: #F8F8F2;
  width: 6rem;
  height: 6rem;

  margin: 0 auto -3rem auto;
  transform: rotate(45deg);
`;


export const Line = styled.div`
  width: 40rem;
  height: 0.1rem; 
  background: #BD93F9;
  margin-top: 2rem;


  @media (max-width: 840px){
      
    margin: 2rem auto;
    width: 100%;
  }
`;


export const SectionCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 5rem;

  margin-top: 10rem;
  width: 100%;
`;
