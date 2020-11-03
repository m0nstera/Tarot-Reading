import React from 'react';
import TarotCard from './TarotCard.jsx';
import Container from 'react-bootstrap/Container';

const DisplayThree = ({cardListToDisplay}) => {

  return (
    <div>
      <Container>
        {cardListToDisplay === null
        ? ""
        : cardListToDisplay.map((card) => <TarotCard
          card={card}
          />)}
      </Container>
    </div>
  );
};

export default DisplayThree;
