
import { StyledCard, Text, Ball, BallIndicator } from './styled';

const Card = ({ results }) => {
  return (
    <>
      { results.map(person => (

        <StyledCard key={person.id}>
          <img src={person.image} alt={person.name} />
          <div>
            <Text title='true'>{person.name}</Text>
            <Ball>
              <BallIndicator status={person.status} />
              <Text ball='true'  >{person.status} - {person.species}</Text>
            </Ball>
            <Text title='true'>Sexo</Text>
            <Text description='true' >{person.gender}</Text>
            <Text title='true'>Ultima localização</Text>
            <Text description='true' >{person.location.name}</Text>
          </div>
        </StyledCard>

      ))}
    </>
  );
};


export default Card;