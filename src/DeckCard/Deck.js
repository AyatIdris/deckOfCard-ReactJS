import React from 'react';
import Card from './Card';
import './deckcard.css';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    const suits = ['♠', '♥', '♦', '♣'];
    const faceVals = [
      'A',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K'
    ];

    let cardDeck = [];
    let card = {};

    suits.forEach(suit => {
      faceVals.forEach(val => {
        card = { suit: suit, value: val };
        cardDeck.push(card);
      });
    });

    this.state = { cards: cardDeck };
  }

  suffleCard(deck) {
    console.log('suffling..');
    let count = deck.length;
    let i = 0;
    while (count) {
      i = Math.floor(Math.random() * count--);
      [deck[i], deck[count]] = [deck[count], deck[i]];
    }

    this.setState({
      cards: deck
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.suffleCard(this.state.cards)}>
          Suffle Cards
        </button>
        <div className="deck">
          {this.state.cards.map(card => {
            return <Card value={card.value} suit={card.suit} />;
          })}
        </div>
      </div>
    );
  }
}

export default Deck;
