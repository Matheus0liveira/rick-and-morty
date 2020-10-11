
import { StyledCard, Text, BallIndicator } from './styled';

const Card = () => {
  return (
    <StyledCard>
      <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/pt/999/UP0151-CUSA09971_00-AV00000000000002/1601171542000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="" />
      <div>
        <Text title={true}>Rick</Text>
        <Text description={true} > <BallIndicator /> Alive - Human</Text>
        <Text title={true}>Last known location</Text>
        <Text description={true} >Citadel of Ricks</Text>
        <Text title={true}>First seen in</Text>
        <Text description={true} >Close Rick-counters of the Rick Kind</Text>
      </div>
    </StyledCard>
  );
};


export default Card;