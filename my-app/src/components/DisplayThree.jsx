import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import TarotCard from './TarotCard.jsx';

const DisplayThree = ({cardListToDisplay}) => {

  return (
    <div>
        {/* {cardListToDisplay === null}
        ? ""
        :  */}
      <Container>
        <Carousel className="carousel-of-random">
          {cardListToDisplay.map(card =>
            <Carousel.Item
              autoPlay={false}
              controls={true}
              indicators={true}
            >
              <TarotCard
                card={card}
              />
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
    </div>
  );
};

export default DisplayThree;
