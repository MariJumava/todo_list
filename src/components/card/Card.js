import './Card.css';

export const Card = ({ card, index, removeCard, onChange }) => {
  return (
    <div className="card">
      <span className={`card${card.completed && '_completed'}`}>
        <input
          type="checkbox"
          checked={card.completed}
          onChange={() => onChange(card.id)}
        />
        <span>{index + 1}</span>
        &nbsp;
        <h4>{card.title}</h4>
      </span>
      <button onClick={() => removeCard(card.id)}>&times;</button>
    </div>
  );
};
