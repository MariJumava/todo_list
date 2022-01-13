

export const CompletedTodos = ({completedCardsLength}) => {
    return (
      <div className="card-btn">
          <span className="completed-todos-title">Done ToDos: </span>
        {completedCardsLength}
      </div>
    );
  };
  