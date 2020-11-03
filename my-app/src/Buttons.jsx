import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Buttons = ({toggleDeckVisability, clickOne, clickThree}) => {
  return (
    <Container className="btn-container">
      <Button
        variant="dark"
        onClick={toggleDeckVisability}
      >Explore the deck</Button>
      <Button
        variant="dark"
        onClick={clickOne}
      >Let fate choose a card for you!</Button>
      <Button
        variant="dark"
        onClick={clickThree}
      >Three-card reading</Button>
    </Container>
  );
};

// export default Buttons;
