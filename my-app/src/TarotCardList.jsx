import React from 'react';
import TarotCard from './TarotCard.jsx'

const TarotCardList = ({cardList,
  // clickOne, cardToDisplay
}) => {
  const mappedList = cardList.map((card, i) => <TarotCard
  card={card}
  key={i}
  // clickOne={clickOne}
/>);
  return (
    <div>
      {mappedList}
    </div>
  );
};

export default TarotCardList;
