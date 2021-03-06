import React from 'react';
import TarotCard from './TarotCard.jsx'

const TarotCardList = ({cardList}) => {
  const mappedList = cardList.map((card, i) => <TarotCard
  card={card}
  key={i} />);

  return (
    <div className="entire-list">
      {mappedList}
    </div>
  );
};

export default TarotCardList;
