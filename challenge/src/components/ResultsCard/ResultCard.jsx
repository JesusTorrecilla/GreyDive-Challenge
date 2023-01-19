import React from "react";
import "./ResultCard.css";

function ResultCard(props) {
  return (
    <div className="rcard">
      <p className="capitalize">Nombre: {props.name}</p>
      <p>Email: {props.email}</p>
      <p className="capitalize">País: {props.country}</p>
      <p>Fecha de Nacimiento: {props.date}</p>
    </div>
  );
}

export default ResultCard;
