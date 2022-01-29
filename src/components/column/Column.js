import { Card } from '../card/Card';

export const Column = ({ selectedCards, removeCard, onToggle }) => {
  return (
    <div className="column">
      {selectedCards.map((card, index) => {
        return (
          <Card
            card={card}
            key={card.id}
            index={index}
            removeCard={removeCard}
            onChange={onToggle}
          />
        );
      })}
    </div>
  );
};
