import React from 'react';
import TarotCard from './TarotCard.jsx'

const DisplayThree = ({cardListToDisplay}) => {

  return (
    <div>
      <div className="highlit2">
        {cardListToDisplay === null
        ? ""
        : cardListToDisplay.map((card) => <TarotCard
          card={card}
          />)}
      </div>
    </div>
  );
};

export default DisplayThree;
