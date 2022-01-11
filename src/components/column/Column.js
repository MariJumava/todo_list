import { Card } from "../card/Card";

export const Column = ({ cards, removeCard, onToggle }) => {
  return (
    <div className="column">
      {cards.map((card, index) => {
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
