import { useState } from 'react';
import { StyledMain, Text, Description, StyledButton, StyledArrowDown } from './styles';
import { Container } from '../../assets/globalStyles';
import Lottie from 'react-lottie';

import SwipeDown from '../../../public/swipeDown.json';

function Home() {
  const [showDescrition, setShowDescription] = useState(false)


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SwipeDown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }

  };



  return (
    <>
      <StyledMain>
        <Container>
          <img src="/rick.svg" alt="" />
          <Text>Rick and Morty</Text>


          <Description showDescrition={showDescrition}>
            A série mostra as aventuras insólitas do cientista beberrão Rick Sanchez e seu neto
            inseguro e com hormônios em ebulição Morty Smith, membros de uma família americana comum,
            composta também por Jerry, um pai ignorante; Beth, uma mãe sensata e Summer,
            uma irmã mais velha, típica adolescente alienada, que se compadece do irmão
            quando passa a integrar as aventuras de seu avô.
              </Description>




          <StyledButton onClick={() => setShowDescription(!showDescrition)} > SOBRE</StyledButton>

          <StyledArrowDown>
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              height={60}
              width={60} />
          </StyledArrowDown>


        </Container>
      </StyledMain>

      <p>swed</p>
      <p>swed</p>
      <p>swed</p>
      <p>swed</p>
      <p>swed</p>
      <p>swed</p>

    </>
  );


};

export default Home;