import React from 'react';
import Image from 'react-bootstrap/Image'

const TarotCard = ({card}) => {

  return card === false ? (<div></div>) : (
    <div>
      <span>{card.name}</span>
      <br></br>
      <img src={card.url} width="200" height="350"></img>
      <p>{card.desc}</p>
      <p>{card.meaning_rev}</p>
      <p>{card.meaning_up}</p>
    </div>
  );
};

export default TarotCard;
