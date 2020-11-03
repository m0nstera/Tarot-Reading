import React from 'react';
import Image from 'react-bootstrap/Image'

const TarotCard = ({card}) => {

  return card === false ? (<div></div>) : (
    <div className="one-card">
      <h5>{card.name}</h5>
        <Image src={card.url}
          width="200px"
          height="350px"/>
        <p>{card.desc}</p>
        <p><span>Light: </span>{card.meaning_up}</p>
        <p><span>Shadow: </span> {card.meaning_rev}</p>
    </div>
  // <div class="one-card">
  //   <div class="flip-box-inner">
  //     <div className="card-front">
  //       <h5>{card.name}</h5>
  //       <Image src={card.url}
  //       className="one-card-img"
  //       width="200px" height="350px"
  //       />
  //     </div>
  //     <div className="card-back" >
  //       <p>{card.desc}</p>
  //       <p><span>Light: </span>{card.meaning_up}</p>
  //       <p><span>Shadow: </span> {card.meaning_rev}</p>
  //     </div>
  //   </div>
  // </div>
  );
};

export default TarotCard;
