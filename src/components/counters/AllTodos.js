
export const AllTodos = ({ cardCount }) => {
    return (
      <div className="card-btn">
        <span className="all-todos-title">All ToDos:&nbsp;</span>
         <span>{cardCount}</span>
      </div>
    );
};

export const CompletedTodos = ({ completedCardsLength }) => {
    return (
      <div className="card-btn">
        <span className="completed-todos-title">Done ToDos:&nbsp;</span>
         <span>{completedCardsLength}</span>
      </div>
    );
};
    
  