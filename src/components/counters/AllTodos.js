

export const AllTodos = ({ cardCount }) => {
    return (
      <div className="card-btn">
          <span className="all-todos-title">All ToDos: </span>
        {cardCount}
      </div>
    );
  };
  