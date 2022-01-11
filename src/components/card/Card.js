import "./Card.css";

export const Card = ({ card, index, removeCard, onChange }) => {
  const styles = {
    span: {
      display: "flex",
      alignItems: "center",
    },
  };

  const classes = [];

  if (card.completed) {
    classes.push("done");
  }

  return (
    <div className="card">
      <span className={classes.join(" ")} style={styles.span}>
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
