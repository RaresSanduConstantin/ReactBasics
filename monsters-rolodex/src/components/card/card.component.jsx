import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <p>
        <img alt="Pisica" src={props.catel.url} />
      </p>

      <h3> {props.catel.name} </h3>
      <p>{props.catel.email}</p>
      <p>{props.catel.address.city}</p>
      <p>{props.catel.company.catchPhrase}</p>
    </div>
  );
};

/*`http://place-puppy.com/200x20${props.catel.id - 1}` 



*/
