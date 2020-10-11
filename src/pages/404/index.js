import { useRouter } from 'next/router';

import { FiArrowLeft } from 'react-icons/fi';

import Lottie from 'react-lottie';

import Styled404, { Text, StyledButton } from './styles';

import Error404 from '../../../public/Error.json';



const Custom404 = () => {

  const router = useRouter();

  const ErrorAnimation = {
    loop: true,
    autoplay: true,
    animationData: Error404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }

  };

  return (
    <Styled404>
      <div>
        <Lottie
          isClickToPauseDisabled
          options={ErrorAnimation}
          height={200}
          width={300} />
        <Text error> Error 404</Text>
        <Text> This page not Found</Text>
      </div>
      <StyledButton onClick={() => router.push('/home/1')}> <FiArrowLeft /> Voltar</StyledButton>
    </Styled404>
  )
}

export default Custom404;