import './card.styless.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default Card;
