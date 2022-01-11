import {Card} from '../card/Card';
import './Column.css';

export const Column = ({ cards, removeCard }) => {
  return (
    <div className='column'>
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              key={card.id}
              index={index}
              removeCard={() => {cards.removeCard(card.id)}}
            />
          );
        })}
    </div>
  );
};

