import React from 'react';
import TarotCard from './TarotCard.jsx';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'

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
            // interval={undefined}
            autoPlay={false}
            // interval={5000}
            controls={true}
            indicators={true}
            >
            <TarotCard
              card={card}/>
          </Carousel.Item>)}
        </Carousel>
      </Container>
    </div>
  );
};

export default DisplayThree;
