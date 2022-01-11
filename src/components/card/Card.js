import './Card.css';

export const Card = ({ card, index, removeCard }) => {
    
  return (
    <div className='card'>
        <div>
            <input type='checkbox' />
            <div>{index + 1}</div>
                &nbsp;
            {card.title}
            </div>
      <button onClick={removeCard}>&times;</button>
    </div>
  );
};

