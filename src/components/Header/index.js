import { StyledHeader } from './styles';



import { Container } from '../../assets/globalStyles'


const Header = () => {


  return (
    <StyledHeader>
      <Container>
        <img src="/rick.svg" alt="Rick Sanches" width="50" />
      </Container>
    </StyledHeader>
  );
};



export default Header;