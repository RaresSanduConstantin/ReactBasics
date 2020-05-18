import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <p>
        <img
          alt="monster"
          src={`http://place-puppy.com/200x20${props.monster.id - 1}`}
        />
      </p>
      <h3> {props.monster.name} </h3>
      <p>{props.puppi.url}</p>
      <p>{props.monster.email}</p>
      <p>{props.monster.address.city}</p>
      <p>{props.monster.company.catchPhrase}</p>
    </div>
  );
};
