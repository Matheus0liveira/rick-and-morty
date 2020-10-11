import { useState, useRef } from 'react';
import Lottie from 'react-lottie';
import { FiSearch, FiArrowLeft, FiArrowRight, FiHeart } from 'react-icons/fi';
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
  SectionCards,
  CountPages
} from './styles';

import SwipeDown from '../../../public/swipeDown.json';

import { Container } from '../../assets/globalStyles';

import Card from '../../compoenents/Card';

function Home() {
  const [showDescrition, setShowDescription] = useState(false);

  const searchRef = useRef(null);


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SwipeDown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }

  };



  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(searchRef.current.value);
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




          <StyledButton onClick={() => setShowDescription(!showDescrition)} about='true' > SOBRE</StyledButton>

          <StyledArrowDown>
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              height={80}
              width={80} />
          </StyledArrowDown>


        </Container>
      </StyledMain>

      <StyledProfiles>


        <Box />

        <Container>

          <div>

            <Text person='true' >Personagens</Text>
            <Line />

          </div>
          <InputSearch onSubmit={handleSubmit}>

            <input
              ref={searchRef}
              type="text"
              placeholder='Pesquisar'
            />

            <StyledButton type='submit' search='true' >
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
        <Container>
          <CountPages>
            <StyledButton countPage='true'> <FiArrowLeft /> Prev</StyledButton>
            <Text count='true'>01</Text>
            <StyledButton countPage='true'>Next <FiArrowRight /></StyledButton>
          </CountPages>
        </Container>
        <Text footer='true'>Created By: <a target='_blank' href='https://github.com/Matheus0liveira'> Matheus Oliveira <span><FiHeart /> </span> </a></Text>
      </StyledProfiles>
      <footer>

      </footer>

    </>
  );


};

export default Home;