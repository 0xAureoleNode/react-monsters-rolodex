import { Component } from 'react';
import './card.styless.css';

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
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
  }
}

export default Card;
