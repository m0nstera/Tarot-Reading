import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Buttons = ({toggleDeckVisability, clickOneCard, clickThree}) => {

  return (
    <Container className="btn-container">
      <Button
        className="btn-cardlist"
        size="lg"
        variant="dark"
        onClick={toggleDeckVisability}
      >Explore the deck</Button>
      <Button
        className="btn-draw-one"
        size="lg"
        variant="dark"
        onClick={clickOneCard}
      >Let fate choose a card for you!</Button>
      <Button
        className="btn-draw-three"
        size="lg"
        variant="dark"
        onClick={clickThree}
      >Three-card reading</Button>
    </Container>
  );
};

export default Buttons;
