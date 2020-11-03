import React from 'react';
import TarotCard from './TarotCard.jsx';

const DisplayOne = ({card}) => {
  return (
    <div className="display-one">
      {<TarotCard
        card={card}
      />}
    </div>
  );
};

export default DisplayOne;
