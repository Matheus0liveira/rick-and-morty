import { useState, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import { FiSearch, FiArrowLeft, FiArrowRight, FiHeart } from 'react-icons/fi';
import
StyledMain,
{
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

import { Container } from '../../assets/globalStyles';



import SwipeDown from '../../../public/swipeDown.json';
import Loading from '../../../public/loading.json';

import Card from '../../compoenents/Card';

import api from '../../api/profiles';



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Home({ data, params }) {

  const [dataCard, setDataCard] = useState(data);

  const [showDescrition, setShowDescription] = useState(false);

  const [loading, setLoading] = useState(true);

  const [disableButtons, setDisableButtons] = useState(false);

  const searchRef = useRef(null);

  const router = useRouter();

  const myScroll = useRef(null);


  useEffect(() => {

    setDataCard(data);
  }, [data])


  const executeScroll = () => scrollToRef(myScroll);


  const SwipeDownAnimation = {
    loop: true,
    autoplay: true,
    animationData: SwipeDown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }

  };


  const LoadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    const name = searchRef.current.value;

    const results = await api.get(`/character/?name=${name}`);

    if (results) {
      setDataCard(results.data);

      setDisableButtons(true);
    }
    console.log(results.data);

  };


  const handleMoveToNextPage = () => {



    if (!dataCard.info.next) {

      return ''

    }


    const nextPage = dataCard.info.next.split('page=')[1];

    return router.push(nextPage);


  };


  const handleMoveToPrevPage = () => {

    if (!dataCard.info.prev) {

      return ''

    }


    const prevPage = dataCard.info.prev.split('page=')[1];
    return router.push(`${prevPage}`);



  };
  const backHomeOnePage = () => {

    setDisableButtons(false);
    return router.push(`1`);
  }

  Router.events.on('routeChangeStart', () => {


    if (!dataCard.info.next) {


      setLoading(false)

    }
  });

  Router.events.on('routeChangeComplete', () => {


    if (dataCard.info.next !== null) {

      setLoading(true);
      executeScroll();

    }

  });



  return (
    <>
      <StyledMain>
        <Container>
          <img src="/rick.svg" alt="Rick Sanches" />
          <Text>Rick and Morty</Text>


          <Description showDescrition={showDescrition}>

            A série mostra as aventuras insólitas do cientista beberrão Rick Sanchez e seu neto
            inseguro e com hormônios em ebulição Morty Smith, membros de uma família americana comum,
            composta também por Jerry, um pai ignorante; Beth, uma mãe sensata e Summer,
            uma irmã mais velha, típica adolescente alienada, que se compadece do irmão
            quando passa a integrar as aventuras de seu avô.

          </Description>




          <StyledButton
            name='showAndHideDescription'
            onClick={() => setShowDescription(!showDescrition)}
            about='true' >

            {!showDescrition ? 'SOBRE' : 'ESCONDER'}

          </StyledButton>

          <StyledArrowDown>
            <Lottie
              isClickToPauseDisabled
              options={SwipeDownAnimation}
              height={80}
              width={80} />
          </StyledArrowDown>


        </Container>
      </StyledMain>

      <StyledProfiles>


        <Box />

        <Container>

          <div ref={myScroll}>

            <Text person='true' >Personagens</Text>
            <Line />

          </div>
          <InputSearch onSubmit={handleSubmit}>

            <input
              ref={searchRef}
              type="text"
              placeholder='Pesquisar'
            />

            <StyledButton name='search' type='submit' search='true' >
              <FiSearch />
            </StyledButton>

          </InputSearch>


        </Container>

        <Container>
          <SectionCards>
            {loading
              ?
              (


                <Card results={dataCard.results} />
              )

              :

              (
                <Lottie
                  isClickToPauseDisabled
                  options={LoadingAnimation}
                  height={80}
                  width={80} />
              )
            }


          </SectionCards>


        </Container>
        <Container>
          <CountPages>

            {disableButtons
              ?
              (


                <StyledButton name='back' back='true' onClick={backHomeOnePage} ><FiArrowLeft /> Voltar</StyledButton>
              )
              :
              (

                <>
                  <StyledButton
                    name='returnPage'
                    countPage='true'
                    onClick={handleMoveToPrevPage}

                  >

                    <FiArrowLeft />
                    Prev

            </StyledButton>


                  <Text count='true'>{params.id}</Text>



                  <StyledButton
                    name='nextPage'
                    countPage='true'
                    onClick={handleMoveToNextPage}
                  >

                    Next
                    <FiArrowRight />

                  </StyledButton>
                </>
              )}



          </CountPages>
        </Container>
        <Text footer='true'>Created By: <a target='_blank' href='https://github.com/Matheus0liveira'> Matheus Oliveira <span><FiHeart /> </span> </a></Text>
      </StyledProfiles>
      <footer>

      </footer>

    </>
  );


};


export async function getStaticProps({ params }) {

  const { data } = await api.get(`/character?page=${params.id}`);



  return { props: { data, params } };


}

export async function getStaticPaths() {

  return {

    paths: [

      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
      {
        params: { id: '4' },
      },
      {
        params: { id: '5' },
      },
      {
        params: { id: '6' },
      },
      {
        params: { id: '7' },
      },
      {
        params: { id: '8' },
      },
      {
        params: { id: '9' },
      },
      {
        params: { id: '10' },
      },
      {
        params: { id: '11' },
      },
      {
        params: { id: '12' },
      },
      {
        params: { id: '13' },
      },
      {
        params: { id: '14' },
      },
      {
        params: { id: '15' },
      },
      {
        params: { id: '16' },
      },
      {
        params: { id: '17' },
      },
      {
        params: { id: '18' },
      },
      {
        params: { id: '19' },
      },
      {
        params: { id: '20' },
      },
      {
        params: { id: '21' },
      },
      {
        params: { id: '22' },
      },
      {
        params: { id: '23' },
      },
      {
        params: { id: '24' },
      },
      {
        params: { id: '25' },
      },
      {
        params: { id: '26' },
      },
      {
        params: { id: '27' },
      },
      {
        params: { id: '28' },
      },
      {
        params: { id: '29' },
      },
      {
        params: { id: '30' },
      },
      {
        params: { id: '31' },
      },
      {
        params: { id: '32' },
      },
      {
        params: { id: '33' },
      },
      {
        params: { id: '34' },
      },
    ],


    fallback: false,
  };
};

export default Home;