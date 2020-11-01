import React from 'react';
// import from;

const TarotCard = ({card}) => {
  return (
    <div>
      <span>{card.name}</span>
      <p>{card.desc}</p>
      <p>{card.meaning_rev}</p>
      <p>{card.meaning_up}</p>
    </div>
  );
};

export default TarotCard;
