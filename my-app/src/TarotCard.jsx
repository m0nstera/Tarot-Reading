import React from 'react';
import Image from 'react-bootstrap/Image'

const TarotCard = ({card}) => {

  return card === false ? (<div></div>) : (
    <div className="one-card">
      <h5>{card.name}</h5>
      <Image src={card.url} width="200" height="350" className="one-card-img"/>
      <p>{card.desc}</p>
      <p><span>Light: </span>{card.meaning_up}</p>
      <p><span>Shadow: </span> {card.meaning_rev}</p>
    </div>
  );
};

export default TarotCard;
