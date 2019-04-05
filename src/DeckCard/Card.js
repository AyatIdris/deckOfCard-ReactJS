import React from 'react';
import './deckcard.css';

const Card = props => {
  let { suit, value } = props;

  if (suit === '♠' || suit === '♣') {
    return (
      <div className="card card-black">
        <div className="card-tl">
          <div className="card-value">{value}</div>
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-br">
          <div className="card-value">{value}</div>
          <div className="card-suit">{suit}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card card-red">
        <div className="card-tl">
          <div className="card-value">{value}</div>
          <div className="card-suit">{suit}</div>
        </div>
        <div className="card-br">
          <div className="card-value">{value}</div>
          <div className="card-suit">{suit}</div>
        </div>
      </div>
    );
  }
};

export default Card;
