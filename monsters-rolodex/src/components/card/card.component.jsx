import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <p>
        <img alt="Pisica" src={props.monster.url} />
      </p>

      <h3> {props.monster.name} </h3>
      <p>{props.monster.email}</p>
      <p>{props.monster.address.city}</p>
      <p>{props.monster.company.catchPhrase}</p>
    </div>
  );
};

/*`http://place-puppy.com/200x20${props.catel.id - 1}` 



*/
