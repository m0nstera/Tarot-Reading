import React from 'react';

const DisplayOne = ({card}) => {
  return (
    <div>
      <div className="highlit">
        {card === null
        ? "pick a card!"
        : <><span>{card.name}</span>
        <p>{card.desc}</p>
        <p>{card.meaning_rev}</p>
        <p>{card.meaning_up}</p></>}
      </div>
    </div>
  );
};

export default DisplayOne;
