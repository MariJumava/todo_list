import './Card.css';

export const Card = ({ card, index, removeCard }) => {
  return (
    <div className='card'>
      <div>{index + 1}</div>
      &nbsp;
      {card.title}
      <button onClick={removeCard}>&times;</button>
    </div>
  );
};

