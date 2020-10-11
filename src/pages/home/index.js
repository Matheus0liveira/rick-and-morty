import { useState } from 'react';
import Lottie from 'react-lottie';
import { FiSearch } from 'react-icons/fi';
import {
  StyledMain,
  Text,
  Description,
  StyledButton,
  StyledArrowDown,
  StyledProfiles,
  InputSearch,
  Box,
  Line,
  SectionCards
} from './styles';

import SwipeDown from '../../../public/swipeDown.json';

import { Container } from '../../assets/globalStyles';

import Card from '../../compoenents/Card';

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




          <StyledButton onClick={() => setShowDescription(!showDescrition)} about > SOBRE</StyledButton>

          <StyledArrowDown>
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              height={40}
              width={40} />
          </StyledArrowDown>


        </Container>
      </StyledMain>

      <StyledProfiles>


        <Box />

        <Container>

          <div>

            <Text person >Personagens</Text>
            <Line />

          </div>
          <InputSearch>

            <input type="text" placeholder='Pesquisar' />

            <StyledButton search >
              <FiSearch />
            </StyledButton>

          </InputSearch>


        </Container>

        <Container>
          <SectionCards>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </SectionCards>

        </Container>

      </StyledProfiles>

    </>
  );


};

export default Home;